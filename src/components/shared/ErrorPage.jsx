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
    <div className="flex items-center justify-center min-h-screen">
      <div className="card w-96 bg-[#222222] shadow-xl">
        <figure>
          <Lottie animationData={carAnimation} loop={true} />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-4xl font-bold">
            404 - Page Not Found
          </h2>
          <p className="text-xl mt-4">
            Our cars couldn't find this page either. Maybe it's time to rent one
            and explore!
          </p>
          <div className="card-actions justify-end mt-8">
            <button className="fillBtn" onClick={handleGoHome}>
              Go Back Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
