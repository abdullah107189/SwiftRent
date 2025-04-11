import { useState } from "react";
import { Link } from "react-router-dom";
import registerImg from "../../assets/Sign up.png";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import GoogleLogIn from "./GoogleLogIn";
import useAuthForm from "../../hooks/useAuthForm";
import { registerUser } from "../../redux/auth/authSlice";
import { AiOutlineUser } from "react-icons/ai";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const [toggle, setToggle] = useState("customer");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleToggle = (value) => {
    setToggle(value);
  };

  const {
    register,
    handleSubmit,
    errors,
    loading,
    showPassword,
    togglePasswordVisibility,
    onSubmit: authOnSubmit,
  } = useAuthForm(registerUser);

  const onSubmit = (data) => {
    if (data.password !== confirmPassword) {
      setPasswordError("Passwords do not match");
      return;
    }
    setPasswordError("");
    authOnSubmit({
      email: data.email,
      password: data.password,
      userInfo: {
        name: data.name,
        email: data.email,
        role: toggle,
      },
    });
  };

  return (
    <>
      {" "}
      <Helmet>
        <title>Register | SwiftRent</title>
        <meta
          name="description"
          content="Create an account on SwiftRent and start renting or driving cars with ease. Sign up to get started."
        />
      </Helmet>
      <div className="flex justify-center items-center min-h-screen">
        <div className="flex w-full max-w-7xl rounded-md overflow-hidden gap-10">
          {/* Left side */}
          <div className="md:block hidden md:w-2/3 h-screen">
            <img
              src={registerImg}
              alt="Register"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right side */}
          <div className="flex flex-col md:w-1/3 w-full p-6 text-gray-200 items-center justify-center mx-auto md:bg-transparent">
            <div className="mb-6 text-center">
              <h1 className="my-3 text-4xl font-bold">
                <span className="font-black text-white">
                  <span className="text-[#f5b754]">S</span>wift
                  <span className="text-[#f5b754]">R</span>ent
                </span>
              </h1>
              <p className="text-gray-200">Create your account!</p>
            </div>
            <div className="flex justify-center items-center w-full mb-2">
              <div className="flex items-center bg-gray-100 rounded-xl p-2 w-full">
                <button
                  className={`cursor-pointer flex items-center justify-center w-1/2 py-2 rounded-lg ${
                    toggle === "customer"
                      ? "bg-[#f5b754] text-white"
                      : "bg-gray-100 text-gray-600"
                  }`}
                  onClick={() => handleToggle("customer")}
                >
                  <AiOutlineUser size={20} className="mr-2" />
                  Customer
                </button>
                <button
                  className={`cursor-pointer flex items-center justify-center w-1/2 py-2 rounded-lg ${
                    toggle === "driver"
                      ? "bg-[#f5b754] text-white"
                      : "bg-gray-100 text-gray-600"
                  }`}
                  onClick={() => handleToggle("driver")}
                >
                  <AiOutlineUser size={20} className="mr-2" />
                  Driver
                </button>
              </div>
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4 w-full max-w-sm"
            >
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-1 text-sm">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register("name", { required: "Name is required" })}
                    placeholder="Enter Your Name"
                    className="w-full px-3 py-2 border-2 rounded-md border-gray-300 focus:border-[#f5b754] focus:outline-none bg-gray-200 text-gray-900"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="block mb-1 text-sm">
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
                    <p className="text-red-500 text-sm">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="password" className="text-sm mb-1 block">
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
                          message: "Minimum 6 characters",
                        },
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
                    <p className="text-red-500 text-sm">
                      {errors.password.message}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="text-sm mb-1 block"
                  >
                    Confirm Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="confirmPassword"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Confirm Your Password"
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
                  {passwordError && (
                    <p className="text-red-500 text-sm">{passwordError}</p>
                  )}
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className={`cursor-pointer bg-[#f5b754] w-full rounded-md py-3 text-white ${
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
            <div className="flex items-center pt-4 space-x-1 w-full max-w-sm">
              <div className="flex-1 h-px bg-gray-500"></div>
              <p className="px-3 text-sm text-gray-300">
                Register with social accounts
              </p>
              <div className="flex-1 h-px bg-gray-500"></div>
            </div>
            <GoogleLogIn toggle={toggle} />
            <p className="pt-5 text-sm text-center text-gray-200">
              Already have an account?
              <Link
                to="/login"
                className="underline text-[#f5b754] hover:text-white"
              >
                Login here.
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
