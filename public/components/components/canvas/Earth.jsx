import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  Preload,
  useGLTF,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = ({ threeModel }) => {
  const earth = useGLTF(threeModel);

  return (
    <primitive
      object={earth.scene}
      scale={1}
      position-y={-1}
      rotation-y={0.3}
      rotation-x={0.1}
    />
  );
};

const EarthCanvas = ({model}) => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-1, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          autoRotateSpeed={0.8}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth threeModel={model} />
        <Environment preset="city" />
        <ambientLight intensity={0.3} />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
