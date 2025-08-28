import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import OTPModal from "../components/modals/OTPModal";
import toast from "react-hot-toast";
import api from "../config/api";

const Register = () => {
  const [registerData, setRegisterData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [isOTPModalOpen, setIsOTPModalOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterData({
      ...registerData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (registerData.password !== registerData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const res = await api.post("/auth/sendOtpRegister", registerData);
      toast.success(res.data.message);
      setIsOTPModalOpen(true);
    } catch (error) {
      toast.error(
        `Error : ${error.response?.status || error.message} | ${
          error.response?.data.message || ""
        }`
      );
    }
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-[calc(100vh-64px)] bg-base-100">
        <div className="w-full max-w-md p-8 space-y-6 bg-base-200 rounded-2xl shadow-lg">
          {/* Heading */}
          <div className="text-center">
            <h1 className="text-3xl font-bold text-base-content">Create Account</h1>
            <p className="mt-2 text-base-content/70">
              Sign up to get started with MyHealthFile
            </p>
          </div>

          {/* Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Full Name */}
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-base-content"
              >
                Full Name
              </label>
              <div className="mt-1 relative">
                <div className="absolute z-10 inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaUser className="text-base-content/50" />
                </div>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  className="input input-bordered w-full ps-10"
                  placeholder="John Doe"
                  value={registerData.fullName}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-base-content"
              >
                Email
              </label>
              <div className="mt-1 relative">
                <div className="absolute z-10 inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaEnvelope className="text-base-content/50" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="input input-bordered w-full ps-10"
                  placeholder="you@example.com"
                  value={registerData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-base-content"
              >
                Password
              </label>
              <div className="mt-1 relative">
                <div className="absolute z-10 inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaLock className="text-base-content/50" />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="input input-bordered w-full ps-10"
                  placeholder="••••••••"
                  value={registerData.password}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-base-content"
              >
                Confirm Password
              </label>
              <div className="mt-1 relative">
                <div className="absolute z-10 inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaLock className="text-base-content/50" />
                </div>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  required
                  className="input input-bordered w-full ps-10"
                  placeholder="••••••••"
                  value={registerData.confirmPassword}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Terms */}
            <div className="flex items-center">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                className="checkbox checkbox-primary"
              />
              <label
                htmlFor="terms"
                className="ml-2 block text-sm text-base-content"
              >
                I Agree All Terms and Conditions
              </label>
            </div>

            {/* Submit */}
            <button type="submit" className="btn btn-primary w-full">
              Create Account
            </button>
          </form>

          {/* Already have account */}
          <div className="text-center">
            <p className="text-sm text-base-content/70">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-medium text-primary hover:underline"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* OTP Modal */}
      <OTPModal
        isOpen={isOTPModalOpen}
        onClose={() => setIsOTPModalOpen(false)}
        callingPage="register"
        data={registerData}
      />
    </>
  );
};

export default Register;
