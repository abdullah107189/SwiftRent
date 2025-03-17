import React from "react";
import { Link } from "react-router-dom";
import loginImage from "../../assets/login.png";

const Login = () => {
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
            <p className=" text-gray-200">Welcome back!</p>
          </div>
          <form className="space-y-6">
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="Enter Your Email Here"
                  className="w-full px-3 py-2 border-2 rounded-md border-gray-300 focus:border-[#f5b754] focus:outline-none bg-gray-200 text-gray-900"
                />
              </div>
              <div>
                <label htmlFor="password" className="text-sm mb-2 block">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  required
                  placeholder="*******"
                  className="w-[300px] px-3 py-2 border-2 rounded-md border-gray-300 focus:border-[#f5b754] focus:outline-none bg-gray-200 text-gray-900"
                />
                <div className="text-right mt-2">
                  <a
                    href="#"
                    className="text-sm hover:underline text-[#f5b754]"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="bgOrange hover:bg-[#f5b754ef] w-full rounded-md py-3 text-white"
              >
                Login
              </button>
            </div>
          </form>
          <p className="px-6 text-sm text-center text-gray-200 pt-3">
            New Here?{" "}
            <Link
              to="/register"
              className="hover:underline hover:text-[#f5b754] text-gray-200"
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
