import React, { useState } from "react";
import CarPromo from "../../assets/heroSection/1.jpg";
import { FaPlay } from "react-icons/fa";

function CarPromoVideo() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <div className="relative h-[450px] overflow-hidden flex items-center justify-center ">
      <div
        className="absolute top-0 left-0 w-full h-full bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${CarPromo})` }}
      ></div>
      <div className="relative z-10 text-center text-white flex flex-col items-center justify-center">
        <p className="orange text-[10px] uppercase tracking-wide">
          E x p l o r e
        </p>
        <h1 className="text-3xl font-bold">
          Car <span className="orange">Promo</span> Video
        </h1>
        <div
          className="mt-6 w-16 h-16 flex items-center justify-center border-1 border-[#F5B754] rounded-full cursor-pointer hover:scale-110 transition-transform"
          onClick={() => setIsVideoOpen(true)}
        >
          <FaPlay className="text-white text-lg" />
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>

      {isVideoOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/85 bg-opacity-80 z-50">
          <div className="relative w-[70%] h-[60%] max-w-3xl">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/1LkIftbmBZc?list=PLWFs1ZghJen-h0YvUsSJsgP6rmlFdKJLq&index=2&autoplay=1"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
            <button
              className="absolute top-2 right-2 bg-white text-black px-3 py-1 rounded-full text-xl"
              onClick={() => setIsVideoOpen(false)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CarPromoVideo;
