import React from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signInWithPopup } from "firebase/auth";
import auth, { googleProvider } from "../../firebase/firebase.config";
import Swal from "sweetalert2";
import { setUser } from "../../redux/auth/authSlice";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const GoogleLogIn = ({ toggle = "", page = "" }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const axiosPublic = useAxiosPublic();

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      // Creating user data
      const userData = {
        uid: user.uid,
        email: user.email,
        name: user.displayName,
        photoURL: user.photoURL,
        role: toggle,
      };

      // Check if user exists, if not add them, then update last login
      const existingUserResponse = await axiosPublic.post(
        "/add-user",
        userData
      );
      if (existingUserResponse.data.message !== "User already exists") {
        console.log("New user added:", existingUserResponse.data);
      }

      // Setting up users in Redux
      dispatch(setUser(userData));

      // Notification of successful login
      if (page !== "login") {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Register successful!",
          text: `Welcome ${user.displayName}`,
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Login successful!",
          text: `Welcome ${user.displayName}`,
          showConfirmButton: false,
          timer: 1500,
        });

        // Update last login time
        await axiosPublic.patch("/update-last-login", { email: user?.email });
      }

      // Redirect to home page
      navigate("/");
    } catch (error) {
      console.error("Google Login error:", error);
      Swal.fire({
        icon: "error",
        title: "Login failed.",
        text: error.message,
        showConfirmButton: true,
      });
    }
  };

  return (
    <div
      onClick={handleGoogleLogin}
      className="flex justify-center items-center w-[220px]  rounded-md space-x-2 border m-3 p-2 border-[#b88d47ef] border-rounded cursor-pointer dark:hover:bg-white/20 hover:bg-black/10 transition-colors"
    >
      <FcGoogle size={32} />
      <p>Continue with Google</p>
    </div>
  );
};

export default GoogleLogIn;
