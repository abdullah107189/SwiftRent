import React from "react";
import { Link, useNavigate } from "react-router-dom";
import registerImg from "../../assets/register.jpeg";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../redux/auth/authSlice";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const resultAction = await dispatch(
      registerUser({ email: data.email, password: data.password })
    );
    if (resultAction.fulfilled.match(resultAction)) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "User created successfully.",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/");
    } else {
      console.error("Sign up failed:", resultAction.payload);
    }
  };
  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <div className="flex flex-col lg:flex-row max-w-4xl w-full  rounded-md  overflow-hidden">
        {/* Left side - Image */}
        <div className="hidden lg:block w-1/2">
          <img
            src={registerImg}
            alt="Register"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right side - Form */}
        <div className="flex flex-col max-w-md lg:w-full p-6  sBgBlack text-gray-200 items-center justify-center mx-auto rounded-xl lg:rounded-none">
          <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-bold">Register</h1>
            <p className="text-sm text-gray-200">
              Welcome to{" "}
              <span className=" font-black text-white">
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
                  required
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
                <input
                  type="password"
                  id="password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: { value: 6, message: "Minimum 6 characters" },
                    maxLength: { value: 20, message: "Maximum 20 characters" },
                    pattern: {
                      value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                      message:
                        "Must contain upper, lower, number & special char",
                    },
                  })}
                  placeholder="*******"
                  className="w-full px-3 py-2 border-2 rounded-md border-gray-300 focus:border-[#f5b754] focus:outline-none bg-gray-200 text-gray-900"
                />
                {errors.password && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>
            </div>
            <div>
              {/* <button
                type="submit"
                className="bgOrange hover:bg-[#f5b754ef] w-full rounded-md py-3 text-white"
              >
                Continue
              </button> */}
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
          <div className="flex justify-center items-center w-[300px] rounded-md space-x-2 border m-3 p-2 border-[#b88d47ef] border-rounded cursor-pointer">
            <FcGoogle size={32} />
            <p>Continue with Google</p>
          </div>
          <p className="px-6 text-sm text-center text-gray-200">
            Don&apos;t have an account yet?{" "}
            <Link
              to="/login"
              className="hover:underline hover:text-[#f5b754ef] text-gray-200"
            >
              Login
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
