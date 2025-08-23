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







// import React, { useState } from "react";
// import rose from "../assets/rose.jpg";
// import { useNavigate } from "react-router-dom";
// import api from "../config/api";
// import { toast } from "react-hot-toast";
// import { useAuth } from "../context/AuthContext";


// const Login = () => {
//   const navigate = useNavigate();
//   const { setUser, setIsLogin, setIsAdmin,user, isUser, isAdmin } = useAuth();


//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const formSubmitKro = async (e) => {
//     e.preventDefault();
//     const logindata = {
//       email: email,
//       password: password,
//     };

//     try {
//       const res = await api.post("/auth/login", logindata);
//       toast.success(res.data.message);
//       setPassword("");
//       setEmail("");
//       setUser(res.data.data);
//       sessionStorage.setItem("EventUser",JSON.stringify(res.data.data));
//       setIsLogin(true);
//       res.data.data.role === "Admin"
//         ? (setIsAdmin(true), navigate("/adminpanel"))
//         : navigate("/dashboard");
//     } catch (error) {
//       toast.error(
//         `Error : ${error.response?.status || error.message} | ${
//           error.response?.data.message || ""
//         }`
//       );
//       console.log(error);
//     }
//     console.log(logindata);
//   };

//   return (
//     <>
//       <div className="mt-[-10%] relative h-screen flex justify-center items-center">
//         <img
//           src={rose}
//           alt=""
//           className="absolute -z-1 opacity-80 w-full h-274"
//         />

//         <div className="min-h-screen w-200 flex items-center justify-center font-serif mt-30">
//           <div className="bg-white/10  relative top-20 backdrop-blur-xl p-10 rounded-2xl shadow-2xl w-full max-w-md border border-yellow-500">
//             <h2 className="text-3xl text-center font-bold text-pink-500 mb-6 drop-shadow-md">
//               Login
//             </h2>
//             <form className="space-y-5" onSubmit={formSubmitKro}>
//               <div>
//                 <label className="text-pink-500 block mb-1">Email</label>
//                 <input
//                   type="email"
//                   className="w-full px-4 py-2 rounded-lg bg-white/20 text-black placeholder:text-gray-500 border border-yellow-400 focus:outline-none focus:ring-2 focus:ring-pink-300"
//                   placeholder="Enter your email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="text-pink-500 block mb-1">Password</label>
//                 <input
//                   type="password"
//                   className="w-full px-4 py-2 rounded-lg bg-white/20 text-black placeholder:text-gray-500 border border-yellow-400 focus:outline-none focus:ring-2 focus:ring-pink-300"
//                   placeholder="Enter your password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   required
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="w-full bg-gradient-to-r from-pink-400 to-pink-600 text-[#0f172a] font-semibold py-2 rounded-xl shadow-lg hover:scale-105 transition-transform duration-200"
//               >
//                 Sign In
//               </button>
//             </form>
//             <p className="text-center text-sm text-black mt-6">
//               Don’t have an account?{" "}
//               <span
//                 className="text-pink-400 underline cursor-pointer"
//                 onClick={() => navigate("/register")}
//               >
//                 Register
//               </span>
//             </p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Login;








// import React, { useContext, useEffect, useState } from "react";

// const AuthContext = React.createContext();

// export const AuthProvider = (props) => {
//   const [user, setUser] = useState(
//     JSON.parse(sessionStorage.getItem("EventUser")) || ""
//   );
//   const [isLogin, setIsLogin] = useState(false);
//   const [isAdmin, setIsAdmin] = useState(false);

//   useEffect(() => {
//     setIsLogin(!!user);
//     setIsAdmin(user?.role === "Admin");
//   }, [user]);

//   const value = {
//     user,
//     isLogin,
//     isAdmin,
//     setUser,
//     setIsLogin,
//     setIsAdmin,
//   };

//   return (
//     <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   return useContext(AuthContext);
// };