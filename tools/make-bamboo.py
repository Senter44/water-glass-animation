"""Blender authoring source for the shared visible/collision bamboo dimensions."""
import json
import math
from pathlib import Path

import bpy

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'fluid-src' / 'bamboo3d' / 'public'
OUT.mkdir(parents=True, exist_ok=True)
bpy.ops.object.select_all(action='SELECT')
bpy.ops.object.delete(use_global=False)

vertices, faces, face_materials = [], [], []
segments = 96
length, outer, inner, cut = 26.0, 4.7, 4.05, .85


def surface(radius, material, inside=False):
    start = len(vertices)
    for j in range(25):
        t = j / 24
        for i in range(segments):
            theta = i * math.tau / segments
            y, z = radius * math.cos(theta), radius * math.sin(theta)
            x = (cut * y) * (1 - t) + length * t
            vertices.append((x, y, z))
    for j in range(24):
        for i in range(segments):
            a = start + j * segments + i
            b = start + j * segments + (i + 1) % segments
            face = (a, b, b + segments, a + segments)
            faces.append(tuple(reversed(face)) if inside else face)
            face_materials.append(material)
    return start


outside = surface(outer, 0)
inside = surface(inner, 1, True)
for i in range(segments):
    j = (i + 1) % segments
    faces.append((outside + i, inside + i, inside + j, outside + j))
    face_materials.append(2)
    faces.append((outside + 24 * segments + i, outside + 24 * segments + j,
                  inside + 24 * segments + j, inside + 24 * segments + i))
    face_materials.append(2)
center = len(vertices)
vertices.append((length, 0, 0))
for i in range(segments):
    faces.append((center, inside + 24 * segments + (i + 1) % segments, inside + 24 * segments + i))
    face_materials.append(1)

# A sealed natural node makes the front section a scoop, with a dry rear tail.
node_polygon_start = len(faces)
node_start = len(vertices)
vertices.append((18, 0, 0))
for i in range(segments):
    theta = i * math.tau / segments
    vertices.append((18, inner * math.cos(theta), inner * math.sin(theta)))
for i in range(segments):
    faces.append((node_start, node_start + 1 + (i + 1) % segments, node_start + 1 + i))
    face_materials.append(1)

mesh = bpy.data.meshes.new('Hollow bamboo with diagonal opening')
mesh.from_pydata(vertices, [], faces)
mesh.update()
obj = bpy.data.objects.new('Bamboo', mesh)
bpy.context.collection.objects.link(obj)
for name, color in [('Green skin', (.18, .28, .055, 1)), ('Wet inner fiber', (.29, .20, .085, 1)), ('Cut rim', (.62, .45, .22, 1))]:
    material = bpy.data.materials.new(name)
    material.diffuse_color = color
    material.use_nodes = True
    bsdf = material.node_tree.nodes.get('Principled BSDF')
    bsdf.inputs['Base Color'].default_value = color
    bsdf.inputs['Roughness'].default_value = .35
    obj.data.materials.append(material)
for face, material in zip(mesh.polygons, face_materials):
    face.material_index = material
    face.use_smooth = material != 2
bpy.context.view_layer.objects.active = obj
obj.select_set(True)
mesh.calc_loop_triangles()
packed = []
for tri in mesh.loop_triangles:
    material = mesh.polygons[tri.polygon_index].material_index
    for vi in tri.vertices:
        p = mesh.vertices[vi].co
        if tri.polygon_index >= node_polygon_start:
            n = tuple(tri.normal)
        elif material == 0:
            n = (0, p.y / outer, p.z / outer)
        elif material == 1 and p.x < length - .001:
            n = (0, -p.y / inner, -p.z / inner)
        else:
            n = tuple(tri.normal)
        packed.extend([*p, *n, float(material), 0])
# The additional meshes are static world-space geometry (material codes >=10).
fixed = []
feeder = obj.copy()
feeder.data = obj.data.copy()
feeder.name = 'Fixed feeder spout'
bpy.context.collection.objects.link(feeder)
feeder.scale = (.50, .36, .36)
feeder.rotation_euler.z = .07
feeder.location = (28.6, 45, 18)
fixed.append((feeder, 10))

def cylinder(name, radius, depth, location, rotation, code=20):
    bpy.ops.mesh.primitive_cylinder_add(vertices=48, radius=radius, depth=depth, location=location, rotation=rotation)
    part = bpy.context.object
    part.name = name
    part.data.materials.append(obj.data.materials[0])
    for polygon in part.data.polygons:
        polygon.use_smooth = len(polygon.vertices) == 4
    fixed.append((part, code))

for z in (11.5, 24.5):
    cylinder('Upright bamboo support', 1.25, 28, (42, 16, z), (math.pi / 2, 0, 0))
cylinder('Pivot axle', .65, 18, (42, 28, 18), (0, 0, 0))
cylinder('Feeder support', 1.15, 45, (41, 24, 30), (math.pi / 2, 0, 0))
cylinder('Feeder support arm', .8, 12, (41, 45.5, 24), (0, 0, 0))
bpy.ops.mesh.primitive_uv_sphere_add(segments=32, ring_count=16, location=(53.6, 11.8, 18))
stone = bpy.context.object
stone.name = 'Return stop stone'
stone.scale = (6.0, 9.0, 5.0)
fixed.append((stone, 30))
bpy.context.view_layer.update()
for part, code in fixed:
    part.data.calc_loop_triangles()
    normal_matrix = part.matrix_world.to_3x3().inverted().transposed()
    for tri in part.data.loop_triangles:
        material = code + tri.material_index if code == 10 else code
        for vi in tri.vertices:
            vertex = part.data.vertices[vi]
            p = part.matrix_world @ vertex.co
            n = normal_matrix @ vertex.normal
            n.normalize()
            packed.extend([*p, *n, float(material), 0])

(OUT / 'bamboo-mesh.json').write_text(json.dumps(packed, separators=(',', ':')), encoding='utf8')
# Keep the editable/downloadable model assembled in its resting pose as well.
obj.rotation_euler.z = -.30
obj.location = (42 - 17 * math.cos(-.30), 28 - 17 * math.sin(-.30), 18)
bpy.context.preferences.filepaths.save_version = 0
bpy.ops.wm.save_as_mainfile(filepath=str(ROOT / 'tools' / 'bamboo.blend'))
bpy.ops.export_scene.gltf(filepath=str(OUT / 'bamboo.glb'), export_format='GLB', use_selection=False)
print(f'Exported {len(packed) // 8} vertices from Blender')
