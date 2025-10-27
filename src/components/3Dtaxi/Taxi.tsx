import React, { Suspense } from "react";
import { Model } from "./Model";
import { OrbitControls, Environment, Bounds } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

function Taxi() {
  return (
    <div className="h-[100vh] bg-amber-300">
      <Canvas camera={{ position: [5, 2, 5], fov: 50 }} shadows>
        <Suspense
          fallback={
            <mesh>
              <boxGeometry args={[1, 1, 1]} />
              <meshStandardMaterial color="gray" />
            </mesh>
          }>
          {/* Lighting */}
          <ambientLight intensity={0.5} />
          <directionalLight
            position={[10, 10, 5]}
            intensity={1}
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
          />

          {/* Auto-fit the model */}
          <Bounds fit clip observe margin={1.2}>
            <Model />
          </Bounds>

          {/* Environment and Controls */}
          <Environment preset="sunset" />
          <OrbitControls makeDefault />

          {/* Ground plane */}
          <mesh
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, -0.5, 0]}
            receiveShadow>
            <planeGeometry args={[50, 50]} />
            <shadowMaterial opacity={0.3} />
          </mesh>
        </Suspense>
      </Canvas>
    </div>
  );
}

export default Taxi;
