import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";

const ImageCard = ({ name, image, number }) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <div className="relative h-[300px] w-full md:h-[450px] rounded-3xl overflow-hidden group">
      {/* Content */}
      <div className="relative w-full h-full rounded-xl overflow-hidden transition-transform duration-300 hover:scale-100">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />

        <div className="absolute bottom-0 w-full h-[20%] bg-gradient-to-t from-black/80 to-transparent"></div>
      </div>

      {/* Under number and rounded style */}
      <div className="flex items-center absolute bottom-0 left-0">
        <div
          className=" relative p-4 rounded-[0_40px_0_0] fBgBlack cursor-pointer"
          onClick={() => setIsVideoOpen(true)}
        >
          <div className="w-[60px] h-[60px] flex items-center justify-center border border-[#F5B754] bg-transparent rounded-full dark:text-white font-bold text-[14px] text-center group-hover:bg-[#F5B754] group-hover:text-[#1b1b1b]">
            {number ? number : <FaPlay className="text-lg" />}
          </div>

          <div className="absolute -top-[20px] -left-[4px] rotate-[-90deg]">
            <svg
              viewBox="0 0 11 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-5 fill-current text-[#f8f9fa] dark:text-[#1b1b1b]"
            >
              <path d="M11 1.55e-06L0 0L2.38e-07 11C1.66e-07 4.92 4.92 1.62e-06 11 1.55e-06Z"></path>
            </svg>
          </div>

          <div className="absolute -bottom-[0px] -right-[24px] rotate-[-90deg]">
            <svg
              viewBox="0 0 11 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
            >
              <path
                d="M11 1.55e-06L0 0L2.38e-07 11C1.66e-07 4.92 4.92 1.62e-06 11 1.55e-06Z"
                className="w-6 h-5 fill-current text-[#f8f9fa] dark:text-[#1b1b1b]"
              ></path>
            </svg>
          </div>
        </div>
      </div>

      {/* Video Modal */}
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
};

export default ImageCard;
