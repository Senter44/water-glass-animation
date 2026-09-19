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
        if material == 0:
            n = (0, p.y / outer, p.z / outer)
        elif material == 1 and p.x < length - .001:
            n = (0, -p.y / inner, -p.z / inner)
        else:
            n = tuple(tri.normal)
        packed.extend([*p, *n, float(material), 0])
(OUT / 'bamboo-mesh.json').write_text(json.dumps(packed, separators=(',', ':')), encoding='utf8')
bpy.ops.wm.save_as_mainfile(filepath=str(ROOT / 'tools' / 'bamboo.blend'))
bpy.ops.export_scene.gltf(filepath=str(OUT / 'bamboo.glb'), export_format='GLB', use_selection=True)
print(f'Exported {len(packed) // 8} vertices from Blender')
