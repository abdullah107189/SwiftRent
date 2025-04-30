import { FaCar } from "react-icons/fa";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center gap-4">
        {/* Car with blinking headlights */}
        <div className="relative text-orange-600 text-6xl animate-bounce">
          <FaCar />
          {/* Left Headlight */}
          <div className="absolute -left-6 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-yellow-400 rounded-full animate-blink"></div>
          {/* Right Headlight */}
          <div className="absolute -right-6 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-yellow-400 rounded-full animate-blink"></div>
        </div>
        <p className=" text-lg tracking-wide animate-pulse">
          Loading your ride...
        </p>
      </div>
    </div>
  );
};

export default Spinner;
