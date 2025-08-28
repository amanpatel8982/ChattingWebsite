import React from "react";
import { motion } from "framer-motion";
import chatVideo from "../assets/front.mp4"; // apna video asset yaha rakha hai

const Home = () => {
  return (
    <section className="px-6 lg:px-20 py-16 bg-base-200 min-h-screen flex flex-col justify-center">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl text-center lg:text-left space-y-6"
        >
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-base-content">
            Chat Freely, Connect Globally <br />
            <span className="text-primary">Anytime, Anywhere</span>
          </h1>
          <p className="text-lg text-base-content/70">
            Welcome to <span className="font-semibold text-primary">ChatApp</span> — 
            where conversations flow without boundaries. Stay connected with friends, 
            collaborate with teams, and share your favorite moments instantly.  
            <br />  
            Whether you're chatting for fun or for work, we make every conversation 
            <span className="font-semibold"> simple, secure, and meaningful.</span>
          </p>

          <div className="flex gap-4 justify-center lg:justify-start">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-primary hover:bg-primary/80 text-white font-semibold rounded-xl shadow-md transition"
            >
              Get Started
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 border border-primary text-primary font-semibold rounded-xl hover:bg-base-100 transition"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>

        {/* Right Video Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 flex justify-center"
        >
          <video
            src={chatVideo}
            autoPlay
            loop
            muted
            playsInline
            className="rounded-xl shadow-lg border border-base-300 w-full max-w-lg"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default Home;
