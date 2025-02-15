"use client";

import React from "react";
import { motion } from "framer-motion"; 

function Hero() {
  return (
    <div
      className="h-screen relative flex items-center justify-between px-16"
      style={{
        backgroundImage: "url(/hero-background.jpeg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/80"></div>

      <div className="relative z-10 flex items-center justify-between w-full mt-20">
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }} 
          className="max-w-[40vw] text-white"
        >
          <h1 className="text-5xl font-bold leading-tight">
            Explore & Discover Your Next  
            <span className="text-red-500"> Favorite Movies </span>
          </h1>
          <p className="text-lg mt-4 text-gray-300 leading-relaxed">
            Dive into the world of cinema with our powerful movie search app. 
            Explore trending, latest, and top-rated movies in one place. 
            Find action-packed blockbusters, heartwarming dramas, or mind-bending thrillers effortlessly.
          </p>

          <button className="mt-6 px-6 py-3 bg-red-600 text-white text-lg font-semibold rounded-md hover:bg-red-700 transition-all">
            Get Started
          </button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8, delay: 0.3 }} 
          className="relative max-w-[40vw]"
        >
          <img className="w-full drop-shadow-lg" src="/luffy.png" alt="Luffy" />
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
