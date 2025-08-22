import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";


export default function Login() {
   const navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-secondary px-4">
      <div className="bg-base-100 shadow-2xl rounded-2xl overflow-hidden flex flex-col md:flex-row w-full  max-w-4xl">
        
      
        <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-secondary to-primary items-center justify-center p-10">
          <div className="text-center text-primary-content">
            <h2 className="text-4xl font-bold mb-4">Welcome Back 👋</h2>
            <p className="text-lg opacity-90">
              Login to continue chatting with your friends in real-time.
            </p>
          </div>
        </div>

     
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl font-bold text-center mb-6">Login</h2>

          <form className="space-y-5">
          
            <div>
              <label className="block mb-2 font-semibold">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Login Button */}
            <button className="btn btn-primary w-full" onClick={() => navigate('/register')}>Login</button>

            {/* Google Login */}
            <button
              type="button"
              className="btn w-full flex items-center gap-2 border border-gray-300"
            >
              <FcGoogle size={22} /> Login with Google
            </button>
          </form>

          {/* Links */}
          <div className="mt-6 flex justify-between text-sm">
            <Link to="/forgot-password" className="hover:underline">
              Forgot Password?
            </Link>
            <Link to="/register" className="hover:underline">
              Don’t have an account? Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
