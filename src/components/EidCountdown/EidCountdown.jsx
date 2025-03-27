import { useState, useEffect } from "react";

const EidCountdown = () => {
  const calculateTimeLeft = () => {
    const eidDate = new Date("March 31, 2025 00:00:00").getTime();
    const now = new Date().getTime();
    const difference = eidDate - now;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
      setAnimation(true);
      setTimeout(() => setAnimation(false), 500); // Reset animation after 500ms
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#11001f] text-white p-4 rounded-lg shadow-lg w-full max-w-[220px] sm:max-w-[370px] md:max-w-[320px] lg:[420px] mx-auto text-center">
      <h2
        className={`text-xl sm:text-2xl md:text-2xl lg:text-3xl font-semibold mb-2 tracking-wide text-[#ffcc00] transition-all duration-1000 ease-out transform ${
          animation ? "scale-105 opacity-90" : "scale-100 opacity-100"
        }`}
      >
        Eid Countdown 🌙
      </h2>
      <div className="flex justify-center gap-2 text-2xl sm:text-3xl md:text-3xl lg:text-3xl font-semibold">
        <div className="flex flex-col items-center">
          <span
            className={`bg-[#ffcc00] text-[#11001f] px-3 py-1 text-sm lg:text-3xl rounded-md shadow-md transition-all duration-500 transform `}
          >
            {timeLeft.days}
          </span>
          <span className="text-sm mt-1">Days</span>
        </div>
        <div className="flex flex-col items-center">
          <span
            className={`bg-[#ffcc00] text-[#11001f] px-3 py-1 text-sm lg:text-3xl rounded-md shadow-md transition-all duration-500 transform `}
          >
            {timeLeft.hours}
          </span>
          <span className="text-sm mt-1">Hours</span>
        </div>
        <div className="flex flex-col items-center">
          <span
            className={`bg-[#ffcc00] text-[#11001f] px-3 py-1 text-sm lg:text-3xl rounded-md shadow-md transition-all duration-500 transform `}
          >
            {timeLeft.minutes}
          </span>
          <span className="text-sm mt-1">Minutes</span>
        </div>
        <div className="flex flex-col items-center">
          <span
            className={`bg-[#ffcc00] text-[#11001f] px-3 py-1 text-sm lg:text-3xl rounded-md shadow-md transition-all duration-500 transform `}
          >
            {timeLeft.seconds}
          </span>
          <span className="text-sm mt-1">Seconds</span>
        </div>
      </div>
      <p className="mt-2 text-sm sm:text-base md:text-lg text-[#ffcc00]">
        Get ready for a joyful and blessed Eid celebration! 🎉
      </p>
    </div>
  );
};

export default EidCountdown;
