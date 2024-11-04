
import {
  FaGoogle,
  FaFacebook,
  FaTwitter,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
// import { LoginRequest } from "../api/Api";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false); // State for password visibility

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePassword = (password) => {
    const re =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return re.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let validationErrors = {};

    if (!validateEmail(email)) {
      validationErrors.email = "Invalid email format";
    }

    if (!validatePassword(password)) {
      validationErrors.password =
        "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character";
    }

    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      // alert("Login successful!");
      // window.location.href = '/';
      // Further login logic here...

    //   LoginRequest(email, password)
    //     .then((result) => {
    //       if (result === true) {
    //         window.location.href = "/"
    //         toast.success("Login successful");
    //         console.log(result)
    // }
    // else{
    //   if(result.error==="user not found"){
    //     toast.error("user not found")
    //   }
    //   else if(result.error==="wrong password"){
    //     toast.error("wrong password")
    //   }
    //   else{
    //     toast.error("somthing went wrong")
    //   }
    // }
    // })
    // .catch((error) => {
    //   console.log("Login failed with error:", error);
    // })
  }
}
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 border-4 border-white shadow-xl">
        <div className="text-center text-3xl font-extrabold text-blue-500 mb-8">
          Sign In
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full bg-gray-100 p-3 rounded-xl border-2 border-transparent focus:outline-none focus:border-blue-300 transition ${
              errors.email ? "border-red-500" : ""
            }`}
            required
          />

          {errors.email && 
           <p className="text-red-500">{errors.email}</p>
          }

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full bg-gray-100 p-3 rounded-xl border-2 border-transparent focus:outline-none focus:border-blue-300 transition 
              ${errors.password ? "border-red-500" : ""}`}
              required
            />
            <span
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-3 text-gray-500 cursor-pointer"
            >
              {showPassword ? <FaEyeSlash size="20" /> : <FaEye size="20" />}
            </span>
          </div>

          {errors.password && 
          <p className="text-red-500">{errors.password}</p>
          }

          <div className="text-left pl-2 text-sm">
            <Link to={`/forgot-password`} className="text-blue-500 hover:underline">
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-blue-400 text-white py-3 rounded-xl font-bold shadow-lg transform hover:scale-105 transition"
          >
            Sign In
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-500">
          Don't have an account?
          <Link to={`/registration`} className="text-blue-500 hover:underline">
            Sign Up
          </Link>
        </div>

        <div className="mt-8">
          <div className="text-center text-sm text-gray-500 mb-4">
            Or Sign In with
          </div>
          <div className="flex justify-center space-x-6">
            <button className="bg-gray-100 p-3 rounded-full shadow hover:scale-110 transition">
              <FaGoogle className="text-red-500" size="24" />
            </button>
            <button className="bg-gray-100 p-3 rounded-full shadow hover:scale-110 transition">
              <FaFacebook className="text-blue-700" size="24" />
            </button>
            <button className="bg-gray-100 p-3 rounded-full shadow hover:scale-110 transition">
              <FaTwitter className="text-blue-400" size="24" />
            </button>
          </div>
        </div>

        <div className="mt-6 text-center">
          <a href="#" className="text-xs text-blue-500 hover:underline">
            Learn user license agreement
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;

