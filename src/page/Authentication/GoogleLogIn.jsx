import React from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signInWithPopup } from "firebase/auth";
import auth, { googleProvider } from "../../firebase/firebase.config";
import Swal from "sweetalert2";
import { setUser } from "../../redux/auth/authSlice";
import axios from "axios";

const GoogleLogIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
      };

      // Sending user data to the server
      await axios.post("http://localhost:3000/add-user", userData);

      // Setting up users in Redux
      dispatch(setUser(userData));

      // Notification of successful login
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Login successful!",
        text: `Welcome ${user.displayName}`,
        showConfirmButton: false,
        timer: 1500,
      });

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
      className="flex justify-center items-center w-[300px] rounded-md space-x-2 border m-3 p-2 border-[#b88d47ef] border-rounded cursor-pointer hover:bg-gray-800 transition-colors"
    >
      <FcGoogle size={32} />
      <p>Continue with Google</p>
    </div>
  );
};

export default GoogleLogIn;
