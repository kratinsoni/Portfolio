import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../variants.js";

function About() {
  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.7 }}
      className="h-screen"
    >
      <div className="flex md:flex-col py-2 px-6 md:px-4 h-full items-center ">
        <div className="w-2/5 md:w-3/5 md:pt-12">
          <img
            src="https://drive.google.com/thumbnail?id=19XtErFXZ0OkVLOOiJJLRxI8Jo1e2OIHc"
            width="500px"
            alt=""
          />
        </div>
        <div className=" w-3/5 md:w-full mx-2 px-2 md:px-0 text-white h-full flex justify-center items-center md:items-start md:pt-16">
          <div className="h-1/2">
            <div className="text-4xl font-bold font-poppins mb-4 ">
              About Me
            </div>
            <div className="bg-yellow-500 h-2 w-48"></div>
            <div className="text-2xl font-bold mt-6 font-poppins">
              Harshit Soni
            </div>
            <div className="text-2xl text-gray-400 align-bottom mt-8">
              Full Stack Software Engineer with hands-on experience in designing
              and implementing robust, scalable, and innovative web solutions.
              Adept at leveraging a comprehensive skill set encompassing
              front-end and back-end technologies.
            </div>
            <div className="flex gap-8 md:justify-center my-14 ">
              <button className="text-black bg-white font-poppins px-7 py-3 rounded-3xl font-semibold hover:text-white hover:bg-black  border-white border-2">
                Get In Touch
              </button>
              <Link
                className="text-white bg-black font-poppins px-7 py-3 rounded-3xl font-semibold border-white border-2 hover:border-collapse hover:bg-white hover:text-black"
                to={
                  "https://drive.google.com/uc?export=download&id=1Yo8xOCdY2pvpUh2DKyWrd98foTiWKxnL"
                }
              >
                Download CV
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
