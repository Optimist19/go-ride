import React from "react";
import { useGLTF } from "@react-three/drei";
import { Mesh } from "three";

export function Model(props: React.ComponentProps<"group">) {
  const { nodes, materials } = useGLTF("/glb/ford_mondeo_taxi.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Object_2 as Mesh).geometry}
          material={materials.wire_006134006}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Object_3 as Mesh).geometry}
          material={materials.wire_027177027}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Object_4 as Mesh).geometry}
          material={materials.wire_087224198}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/glb/ford_mondeo_taxi.glb");