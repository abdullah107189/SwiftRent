import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 sBgBlack text-">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Register</h1>
          <p className="text-sm text-gray-200">Welcome to SwiftRent</p>
        </div>
        <form className="space-y-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter Your Name Here"
                className="w-full px-3 py-2 border-2 rounded-md border-gray-300  focus:border-[#f5b754] focus:outline-none bg-gray-200 text-gray-900"
                required
              />
            </div>
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
                className="w-full px-3 py-2 border-2 rounded-md border-gray-300  focus:border-[#f5b754] focus:outline-none bg-gray-200 text-gray-900"
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
                className="w-full px-3 py-2 border-2 rounded-md border-gray-300  focus:border-[#f5b754] focus:outline-none  bg-gray-200 text-gray-900"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="bgOrange hover:bg-[#f5b754ef] w-full rounded-md py-3 text-white"
            >
              Continue
            </button>
          </div>
        </form>
        <p className="px-6 text-sm text-center text-gray-200 pt-3">
          Already have an account?{" "}
          <Link
            to="/login"
            className="hover:underline hover:text-[#f5b754] text-gray-200"
          >
            Login
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Register;
