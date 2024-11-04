import {
  FaGoogle,
  FaFacebook,
  FaTwitter,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { RegistrationRequest } from "../api/Api";

const Registration = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [reconfirmPassword, setReconfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showReconfirmPassword, setShowReconfirmPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleReconfirmPasswordVisibility = () => {
    setShowReconfirmPassword(!showReconfirmPassword);
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

    if (!fullName.trim()) {
      validationErrors.fullName = "Full Name is required";
    }

    if (!validateEmail(email)) {
      validationErrors.email = "Invalid email format";
    }

    if (!validatePassword(password)) {
      validationErrors.password =
        "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character";
    }

    if (password !== reconfirmPassword) {
      validationErrors.reconfirmPassword = "Passwords do not match";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // RegistrationRequest(fullName, email, password)
      // .then((result) => {
      //   if (result === true) {
      //     setErrors({});
      //     navigate('/login');
      //   } else {
      //     setErrors({
      //       email: "Email already exists"
      //     });
      //   }
      // });
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="flex flex-1 gap-36">
        <div className="flex justify-center items-center w-1/2">
          <h1 className="text-8xl font-['Poppins'] font-bold text-green-700">Enclypt</h1>
        </div>
        <div className="max-w-md w-1/2 bg-white bg-opacity-50 rounded-3xl p-8 border-4 border-gray-50 shadow-xl shadow-green-300 ">
          <div className="text-center text-3xl font-extrabold text-green-700 mb-8">
            Sign Up
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className={`w-full bg-gray-100 p-3 rounded-xl border-2 border-transparent focus:outline-none focus:border-green-200 transition 
              ${errors.fullName ? "border-red-500" : ""}`}
              required
            />
            {errors.fullName && (
              <p className="text-red-500">{errors.fullName}</p>
            )}

            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full bg-gray-100 p-3 rounded-xl border-2 border-transparent focus:outline-none focus:border-green-200 transition 
              ${errors.email ? "border-red-500" : ""}`}
              required
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`w-full bg-gray-100 p-3 rounded-xl border-2 border-transparent focus:outline-none focus:border-green-200 transition 
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
            {errors.password && (
              <p className="text-red-500">{errors.password}</p>
            )}

            <div className="relative">
              <input
                type={showReconfirmPassword ? "text" : "password"}
                placeholder="Retype the Password"
                value={reconfirmPassword}
                onChange={(e) => setReconfirmPassword(e.target.value)}
                className={`w-full bg-gray-100 p-3 rounded-xl border-2 border-transparent focus:outline-none focus:border-green-200 transition 
              ${errors.reconfirmPassword ? "border-red-500" : ""}`}
                required
              />
              <span
                onClick={toggleReconfirmPasswordVisibility}
                className="absolute right-3 top-3 text-gray-500 cursor-pointer"
              >
                {showReconfirmPassword ? (
                  <FaEyeSlash size="20" />
                ) : (
                  <FaEye size="20" />
                )}
              </span>
            </div>
            {errors.reconfirmPassword && (
              <p className="text-red-500">{errors.reconfirmPassword}</p>
            )}

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-600 to-green-300 text-white py-3 rounded-xl font-bold shadow-lg transform hover:scale-105 transition"
            >
              Sign Up
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-500">
            Already have an account?{" "}
            <Link to="/login" className="text-green-600 hover:underline">
              Sign In
            </Link>
          </div>

          <div className="mt-8">
            <div className="text-center text-sm text-gray-500 mb-4">
              Or Sign Up with
            </div>
            <div className="flex justify-center space-x-6">
              <button className="bg-gray-100 p-3 rounded-full shadow shadow-green-300 hover:scale-110 transition">
                <FaGoogle className="text-red-500" size="24" />
              </button>
              <button className="bg-gray-100 p-3 rounded-full shadow shadow-green-300 hover:scale-110 transition">
                <FaFacebook className="text-blue-700" size="24" />
              </button>
              <button className="bg-gray-100 p-3 rounded-full shadow shadow-green-300 hover:scale-110 transition">
                <FaTwitter className="text-blue-400" size="24" />
              </button>
            </div>
          </div>

          <div className="mt-6 text-center">
            <a href={"#"} className="text-xs text-green-600 hover:underline">
              Learn user license agreement
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
