import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";

const useAuthForm = (authAction, successRedirect = "/") => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { loading } = useSelector((state) => state.auth);
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
        position: "center",
        icon: "success",
        title: `${
          authAction.name === "loginUser" ? "Login" : "User created"
        } successfully.`,
        showConfirmButton: false,
        timer: 1500,
      });
      navigate(from, { replace: true });
    } else {
      console.error(`${authAction.name} failed:`, resultAction.payload);
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
  };
};

export default useAuthForm;
