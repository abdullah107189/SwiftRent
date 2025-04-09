import React from "react";
import Lottie from "lottie-react";
import carAnimation from "../../assets/car-animation.json";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div
      className="
        flex flex-col items-center justify-center
        w-full min-h-screen bg-[#222222]
        p-4 text-white
      "
    >
      {/* Lottie car animation */}
      <div className="w-full max-w-sm">
        <Lottie animationData={carAnimation} loop className="w-full h-auto" />
      </div>

      {/* Headline */}
      <h1 className="mt-8 text-5xl orange text-center font-bold md:text-6xl lg:text-7xl">
        Page Not Found
      </h1>
      <p className="mt-4 text-center text-lg md:text-xl lg:text-2xl">
        Our cars couldn’t find this page either.
        <br />
        Maybe it’s time to rent one and explore!
      </p>

      {/* Go Home button */}
      <button onClick={handleGoHome} className="fillBtn mt-8">
        Go Back Home
      </button>
    </div>
  );
};

export default ErrorPage;
