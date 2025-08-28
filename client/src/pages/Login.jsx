import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-hot-toast";
import api from "../config/api";
import OTPModal from "../components/modals/OTPModal";
import { useAuth } from "../context/AuthContext";
import { useGoogleAuth } from "../config/GoogleAuth";

const Login = () => {
  const navigate = useNavigate();
  const { setUser, setIsLogin } = useAuth();
  const { isLoading, error, isInitialized, signInWithGoogle } = useGoogleAuth();
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [isOTPModalOpen, setIsOTPModalOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/sendOtpLogin", loginData);
      if (res.data.message === "OTP sent successfully") {
        setIsOTPModalOpen(true);
      } else {
        toast.success(res.data.message);
        setUser(res.data.data);
        setIsLogin(true);
        sessionStorage.setItem("ChatUser", JSON.stringify(res.data.data));
        navigate("/dashboard");
      }
    } catch (error) {
      toast.error(
        `Error : ${error.response?.status || error.message} | ${
          error.response?.data.message || ""
        }`
      );
    }
  };

  const handleGoogleSuccess = async (userData) => {
    try {
      const res = await api.post("/auth/googleLogin", userData);
      toast.success(res.data.message);
      sessionStorage.setItem("ChatUser", JSON.stringify(res.data.data));
      setUser(res.data.data);
      setIsLogin(true);
      navigate("/dashboard");
    } catch (error) {
      toast.error("Google login failed. Please try again.");
    }
  };

  const GoogleLogin = () => {
    signInWithGoogle(handleGoogleSuccess, handleGoogleFailure);
  };

  const handleGoogleFailure = (error) => {
    toast.error("Google login failed. Please try again.");
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-[calc(100vh-64px)] bg-gradient-to-br from-primary/10 via-base-200 to-secondary/10 p-4">
        <div className="w-full max-w-md p-8 space-y-6 rounded-2xl shadow-2xl 
          bg-base-100/80 backdrop-blur-md border border-base-300/40">
          
          {/* Header */}
          <div className="text-center">
            <h1 className="text-4xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Welcome Back
            </h1>
            <p className="mt-2 text-base-content/70">Sign in to your account</p>
          </div>

          {/* Form */}
          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Email */}
            <div className="space-y-1">
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-3 text-base-content/50" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="input ps-10 w-full focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                  placeholder="you@example.com"
                  value={loginData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-1">
              <label htmlFor="password" className="block text-sm font-medium">
                Password
              </label>
              <div className="relative">
                <FaLock className="absolute left-3 top-3 text-base-content/50" />
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="input ps-10 w-full focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                  placeholder="••••••••"
                  value={loginData.password}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Remember & Forgot */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="checkbox checkbox-primary" />
                <span>Remember me</span>
              </label>
              <Link to="#" className="text-primary hover:underline">
                Forgot password?
              </Link>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="btn btn-primary w-full shadow-md hover:scale-[1.02] transition-transform"
            >
              Sign In
            </button>
          </form>

          {/* Divider */}
          <div className="divider">OR</div>

          {/* Google Login */}
          <div>
            {error ? (
              <button
                className="btn btn-outline btn-error w-full flex gap-2"
                disabled
              >
                <FcGoogle className="text-xl" /> {error}
              </button>
            ) : (
              <button
                onClick={GoogleLogin}
                className="btn btn-outline w-full flex gap-2 hover:scale-[1.02] transition-transform"
                disabled={!isInitialized || isLoading}
              >
                <FcGoogle className="text-xl" />
                {isLoading
                  ? "Loading..."
                  : isInitialized
                  ? "Continue with Google"
                  : "Google Auth Error"}
              </button>
            )}
          </div>

          {/* Footer */}
          <div className="text-center text-sm text-base-content/70">
            Don’t have an account?{" "}
            <Link
              to="/register"
              className="text-primary font-semibold hover:underline"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>

      <OTPModal
        isOpen={isOTPModalOpen}
        onClose={() => setIsOTPModalOpen(false)}
        callingPage="login"
        data={loginData}
      />
    </>
  );
};

export default Login;
