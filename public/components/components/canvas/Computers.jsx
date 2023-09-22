import React, { Suspense, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Preload,
  useGLTF,
  PointLight,
  useHelper,
} from "@react-three/drei";
import { useControls } from "leva";
import * as THREE from "three";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const lightRef = React.useRef();
  const screenRef = React.useRef();
  const lightTargetRef = React.useRef();

  useFrame(() => {
    if (lightRef.current && lightTargetRef.current) {
      lightRef.current.target = lightTargetRef.current;
    }
  });

  const computer = useGLTF("./desktop_pc/model.gltf");

  console.log(computer.scene);

  // const { position, rotation } = useControls({
  //   position: {
  //     value: { x: 4.28, y: -2.4, z: 0.57 },
  //     step: 0.01,
  //   },
  //   rotation: {
  //     value: { x: 0, y: 0, z: 0 },
  //     step: 0.01,
  //   },
  // });
  // const { position2, rotation2 } = useControls({
  //   position2: {
  //     value: { x: 0, y: 0, z: 0 },
  //     step: 0.01,
  //   },
  //   rotation2: {
  //     value: { x: 0, y: 0, z: 0 },
  //     step: 0.01,
  //   },
  // });
  // const { meshPosition } = useControls({
  //   meshPosition: {
  //     value: { x: 0, y: 0, z: 0 },
  //     step: 0.01,
  //   },
  // });

  useEffect(() => {
    if (computer.scene) {
      const lightBar = computer.scene.getObjectByName("Bar_Light");
      const blueEmissionMesh = computer.scene.getObjectByName("Plane002_1");

      if (lightBar && lightBar.material) {
        lightBar.material.emissive.set("red");
        lightBar.material.emissiveIntensity = 2;
        lightBar.material.toneMapped = false;
      }

      if (blueEmissionMesh && blueEmissionMesh.material) {
        blueEmissionMesh.material.emissive.set("blue");
        blueEmissionMesh.material.emissiveIntensity = 2;
        blueEmissionMesh.material.toneMapped = false;
      }
    }
  }, [computer]);

  return (
    <mesh>
      <hemisphereLight intensity={0.4} groundColor="black" />
      <ambientLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <spotLight
        ref={lightRef}
        color={"red"}
        intensity={0.3}
        position={[4.28, -2.4, 0.57]}
      />
      <mesh ref={lightTargetRef} position={[-9.2, -19, -1.58]} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [1, -7, 1.5]}
        rotation={[-12, 1.35, 12.01]}
      />

      <pointLight
        // ref={pointRef}
        color={"red"}
        intensity={0.3}
        position={[-0.6, 0.34, 0]}
      />
      <pointLight
        ref={screenRef}
        color={"white"}
        intensity={0.8}
        position={[1.85, 0.43, 0.56]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          enableDamping={false}
          enablePan={false}
          enableRotate={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
