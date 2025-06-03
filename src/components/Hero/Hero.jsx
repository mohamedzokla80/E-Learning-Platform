import React from "react";

import { IoIosArrowRoundForward } from "react-icons/io";
import HeroPng from "../../assets/hero.png";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Blob from "../../assets/blob.svg";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export const FadeUp = (delay) => {
  return {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.5,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};

const Hero = () => {
  return (
    <section className="bg-light overflow-hidden relative">
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px]">
        {/* Brand Info */}
        <div className="flex flex-col justify-center py-14 md:py-0 relative z-20">
          <div className="text-center md:text-left space-y-10 lg:max-w-[400px]">
            <motion.h1
              variants={FadeUp(0.6)}
              initial="initial"
              animate="animate"
              className="text-3xl lg:text-5xl font-bold !leading-snug"
            >
              Let's Learn to build a{" "}
              <span className="text-secondary">Website</span> for your business
            </motion.h1>
            <motion.div
              variants={FadeUp(0.8)}
              initial="initial"
              animate="animate"
              className="flex justify-center md:justify-start"
            >
              <button className="primary-btn flex items-center gap-2 group">
                Get Started
                <IoIosArrowRoundForward className="text-xl group-hover:translate-x-2 group-hover:-rotate-45 duration-300" />
              </button>
            </motion.div>
          </div>
        </div>
        {/* Hero Image */}
        <div className="flex justify-center items-center">
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
            className="w-[400px] xl:w-[600px] h-[400px] relative z-20"
          >
            <iframe
              src="https://lottie.host/embed/65ad25a9-49c7-4e98-aeb4-535158f3e48d/4W5GlCWYSV.lottie"
              className="w-full h-full"
              allowFullScreen
            ></iframe>
          </motion.div>
          <motion.img
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
            src={Blob}
            alt=""
            className="absolute -bottom-32 w-[800px] md:w-[1500px] z-[1] hidden md:block"
          />
        </div>
      </div>
    </section>
  );
};
export default Hero;
