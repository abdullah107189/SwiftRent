import React from "react";
import { useForm } from "react-hook-form";
import { sendPasswordResetEmail } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ForgetPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      await sendPasswordResetEmail(auth, data.email);
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Password reset email sent. Please check your inbox.",
        confirmButtonColor: "#f5b754",
      }).then(() => {
        navigate("/login");
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.message,
        confirmButtonColor: "#f5b754",
      });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-sm p-6 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Forget Password
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="email" className="block mb-1 text-gray-600 text-sm">
              Email address
            </label>
            <input
              type="email"
              id="email"
              {...register("email", { required: "Email is required" })}
              placeholder="Enter Your Email"
              className="w-full px-3 py-2 border-2 rounded-md text-gray-500 border-gray-300 focus:border-[#f5b754] focus:outline-none"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>
          <div>
            <button
              type="submit"
              className="bg-[#f5b754] w-full rounded-md py-3 text-white hover:bg-[#f5b754ef]"
            >
              Send Reset Email
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
