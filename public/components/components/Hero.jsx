import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas, EarthCanvas } from "./canvas";
import { useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Experience from "./Laptop";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#663eb7]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Quantum
            <span className="text-[#663eb7]"> Dynamics</span> Inc.
          </h1>
          <p
            className={`${styles.heroSubText} mt-2 text-white bg-black bg-opacity-30 rounded-xl p-2`}
          >
            Welcome to Quantum Dynamics Inc. <br className="sm:block hidden" />
            Your Partner in Future Technologies
          </p>
        </div>
      </div>
      <div className="opacity-0 lg:opacity-100 w-full h-full">
        <Canvas
          camera={{
            fov: 45,
            near: 0.1,
            far: 2000,
            position: [-3, 1.5, 4],
          }}
        >
          <Experience />
        </Canvas>
      </div>
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
