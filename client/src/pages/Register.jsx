import { useState } from "react";
import { Link } from "react-router-dom";
import api from "../config/api";
import { toast } from "react-hot-toast";
import { Toaster } from "react-hot-toast";


export default function Register() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
   const {name , value } = e.target;
   setFormData((previousData) => ({
    ...previousData, [name]:value
   }))
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(formData);
    try{
      const res = await api.post("/auth/register", formData);
      toast.success(res.data.message)
    }catch(error){
      toast.error(error.message)
    }

    setFormData({
      fullName:"",
      email:"",
      password:"",
      confirmPassword:"",
    })
  }







  

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
            Create Account
          </h2>
          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* ...existing code... */}
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="Enter your full name"
              />
            </div>
            {/* ...existing code... */}
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="Enter your email"
              />
            </div>
            {/* ...existing code... */}
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="Enter your password"
              />
            </div>
            {/* ...existing code... */}
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="Confirm your password"
              />
            </div>
            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              Register
            </button>
          </form>
          <p className="mt-6 text-center text-gray-600 text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 font-semibold hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
