import React from "react";
import BannerPng from "../../assets/banner.png";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Banner2 = () => {
  return (
    <section>
      <div className="container py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0">
        {/* Banner Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex flex-col justify-center"
        >
          <div className="text-center md:text-left space-y-4 lg:max-w-[450px]">
            <h1 className="text-4xl font-bold !leading-snug">
              Join Our Community to Start your Journey
            </h1>
            <p className="text-dark2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis
              incidunt!
            </p>
            <a
              href="#"
              className="primary-btn !mt-8"
            >
              Join Now
            </a>
          </div>
        </motion.div>
        {/* Banner Image */}
        <div className="flex justify-center items-center">
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
           className="w-[400px] xl:w-[600px] h-[400px] relative z-20">
            <iframe
              src="https://lottie.host/embed/791a415a-1935-4b9e-a10c-27714253d31c/nWBTi5S9fr.lottie"
              className="w-full h-full"
              allowFullScreen
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner2;
