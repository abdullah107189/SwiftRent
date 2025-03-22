import React from "react";
import { Link } from "react-router-dom";
import loginImage from "../../assets/login.png";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import GoogleLogIn from "./GoogleLogIn";
import useAuthForm from "../../hooks/useAuthForm";
import { loginUser } from "../../redux/auth/authSlice";

const Login = () => {
  const {
    register,
    handleSubmit,
    errors,
    loading,
    showPassword,
    togglePasswordVisibility,
    onSubmit,
  } = useAuthForm((data) =>
    loginUser({
      email: data.email,
      password: data.password,
    })
  );

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <div className="flex flex-col lg:flex-row max-w-4xl w-full rounded-md overflow-hidden">
        {/* Left side - Image */}
        <div className="hidden lg:block w-1/2 bg-[#201e1e]">
          <img
            src={loginImage}
            alt="Login"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right side - Form */}
        <div className="flex flex-col max-w-md lg:w-full p-6 sBgBlack text-gray-200 items-center justify-center mx-auto rounded-xl lg:rounded-none">
          <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-bold">
              <span className="font-black text-white">
                <span className="text-[#f5b754]">S</span>wift
                <span className="text-[#f5b754]">R</span>ent
              </span>
            </h1>
            <p className="text-gray-200">Welcome back!</p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email", { required: "Email is required" })}
                  placeholder="Enter Your Email"
                  className="w-full px-3 py-2 border-2 rounded-md border-gray-300 focus:border-[#f5b754] focus:outline-none bg-gray-200 text-gray-900"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
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
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters",
                      },
                    })}
                    placeholder="Enter Your Password Here"
                    className="w-[300px] px-3 py-2 border-2 rounded-md border-gray-300 focus:border-[#f5b754] focus:outline-none bg-gray-200 text-gray-900"
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
                  <p className="text-red-500 text-sm">
                    {errors.password.message}
                  </p>
                )}
              </div>
              <div className="text-right mt-2">
                <a href="#" className="text-sm hover:underline text-[#f5b754]">
                  Forgot password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className={`bgOrange w-full rounded-md py-3 text-white ${
                  loading
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-[#f5b754ef]"
                }`}
                disabled={loading}
              >
                {loading ? "Loading..." : "Login"}
              </button>
            </div>
          </form>
          <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-10 dark:bg-gray-500"></div>
            <p className="px-3 text-sm dark:text-gray-300">
              Login with social accounts
            </p>
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-500"></div>
          </div>
          <GoogleLogIn />
          <p className="px-6 text-sm text-center text-gray-200">
            Don't have an account yet?{" "}
            <Link
              to="/register"
              className="hover:underline hover:text-[#f5b754ef] text-gray-200"
            >
              Create an account
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
