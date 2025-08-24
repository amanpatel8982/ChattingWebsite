import React from "react";
import chatVideo from "../assets/front.mp4";
import { MessageSquare, ShieldCheck, Users } from "lucide-react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section className="px-6 lg:px-20 py-16 bg-base-200 min-h-screen flex flex-col justify-center">
      
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl text-center lg:text-left space-y-6"
        >
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-gray-800">
            Chat Freely, Connect Globally <br />
            <span className="text-purple-600">Anytime, Anywhere</span>
          </h1>
          <p className="text-lg text-gray-600">
            Welcome to <span className="font-semibold text-purple-600">ChatApp</span> — 
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
              className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl shadow-md transition"
            >
              Get Started
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 border border-purple-600 text-purple-600 font-semibold rounded-xl hover:bg-purple-50 transition"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>

        {/* Right Content (Video) */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2"
        >
          <video
            src={chatVideo}
            controls
            autoPlay
            muted
            loop
            className="rounded-xl shadow-2xl w-full max-w-2xl"
          ></video>
        </motion.div>
      </div>

      {/* Features Section */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-20 text-center"
      >
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-12">
          Why Choose <span className="text-purple-600">ChatApp?</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition"
          >
            <MessageSquare className="mx-auto text-purple-600 w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Instant Messaging</h3>
            <p className="text-gray-600">
              Send and receive messages in real-time. Stay connected with no delays, anytime.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition"
          >
            <ShieldCheck className="mx-auto text-purple-600 w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Secure & Private</h3>
            <p className="text-gray-600">
              Your privacy matters. With end-to-end encryption, your chats are always safe.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition"
          >
            <Users className="mx-auto text-purple-600 w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Stay Connected</h3>
            <p className="text-gray-600">
              Build stronger connections with people around the world and grow your network.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;







