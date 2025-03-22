import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import { loginUser } from "../redux/auth/authSlice";

const useAuthForm = (authAction, successRedirect = "/") => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { loading, error } = useSelector((state) => state.auth);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const from = location.state?.from?.pathname || successRedirect;

  const onSubmit = async (data) => {
    const resultAction = await dispatch(authAction(data));
    if (resultAction.meta.requestStatus === "fulfilled") {
      Swal.fire({
        icon: "success",
        title: `${
          authAction === loginUser ? "Login" : "User  created"
        } successfully.`,
        timer: 1500,
      });
      navigate(from, { replace: true });
    } else {
      const errorMsg = resultAction.payload || "Something went wrong!";
      Swal.fire({
        icon: "error",
        title: `${authAction === loginUser ? "Login" : "Registration"} Failed`,
        text: errorMsg,
      });
    }
  };

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return {
    register,
    handleSubmit,
    errors,
    loading,
    showPassword,
    togglePasswordVisibility,
    onSubmit,
    error,
  };
};

export default useAuthForm;
