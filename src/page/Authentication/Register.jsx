import React from "react";
import { Link } from "react-router-dom";
import registerImg from "../../assets/Sign up.png";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import GoogleLogIn from "./GoogleLogIn";
import useAuthForm from "../../hooks/useAuthForm";
import { registerUser } from "../../redux/auth/authSlice";

const Register = () => {
  const {
    register,
    handleSubmit,
    errors,
    loading,
    showPassword,
    togglePasswordVisibility,
    onSubmit,
  } = useAuthForm((data) =>
    registerUser({
      email: data.email,
      password: data.password,
      userInfo: {
        name: data.name,
        email: data.email,
      },
    })
  );

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex w-full max-w-7xl rounded-md overflow-hidden gap-10">
        <div className="md:block hidden md:w-2/3 h-screen">
          <img
            src={registerImg}
            alt="Register"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col md:w-1/3 w-full p-6 text-gray-200 items-center justify-center mx-auto md:bg-transparent">
          <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
            <p className="text-sm text-gray-200">
              Welcome to{" "}
              <span className="font-black text-white">
                <span className="text-[#f5b754]">S</span>wift
                <span className="text-[#f5b754]">R</span>ent
              </span>
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  {...register("name", { required: "Name is required" })}
                  placeholder="Enter Your Name Here"
                  className="w-[300px] px-3 py-2 border-2 rounded-md border-gray-300 focus:border-[#f5b754] focus:outline-none bg-gray-200 text-gray-900"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email", { required: "Email is required" })}
                  placeholder="Enter Your Email Here"
                  className="w-full px-3 py-2 border-2 rounded-md border-gray-300 focus:border-[#f5b754] focus:outline-none bg-gray-200 text-gray-900"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="password" className="text-sm mb-2 block">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    {...register("password", {
                      required: "Password is required",
                      minLength: { value: 6, message: "Minimum 6 characters" },
                      // maxLength: { value: 20, message: "Maximum 20 characters" },
                      // pattern: {
                      //   value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                      //   message:
                      //     "Must contain upper, lower, number & special char",
                      // },
                    })}
                    placeholder="Enter Your Password Here"
                    className="w-full px-3 py-2 border-2 rounded-md border-gray-300 focus:border-[#f5b754] focus:outline-none bg-gray-200 text-gray-900"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-700"
                  >
                    {showPassword ? (
                      <AiOutlineEyeInvisible size={20} />
                    ) : (
                      <AiOutlineEye size={20} />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>
            </div>
            <div>
              <button
                type="submit"
                className={`w-full py-2 mt-4 rounded-md bg-[#f5b754] text-white ${
                  loading
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-[#f5b754ef]"
                }`}
                disabled={loading}
              >
                {loading ? "Registering..." : "Register"}
              </button>
            </div>
          </form>
          <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-500"></div>
            <p className="px-3 text-sm dark:text-gray-300">
              Register with social accounts
            </p>
            <div className="flex-1 h-px sm:w-7 dark:bg-gray-500"></div>
          </div>
          <GoogleLogIn />
          <p className="px-6 text-sm text-center text-gray-200">
            Already have an account?{" "}
            <Link
              to="/login"
              className="underline text-[#f5b754ef] hover:text-gray-200"
            >
              Login.
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
