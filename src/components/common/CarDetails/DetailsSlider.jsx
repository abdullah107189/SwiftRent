import React, { useState } from "react";
import { BsCircleFill } from "react-icons/bs";
import img1 from "/src/assets/details/img-1 (1).jpg";
import img2 from "/src/assets/details/img-1 (2).jpg";
import img3 from "/src/assets/details/img-1 (3).jpg";

const images = [img1, img2,  img3, img3];

export default function DetailsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="relative w-full max-w-4xl mx-auto md:p-4 py-4">
      {/* Image Slider */}
      <div className="rounded-3xl overflow-hidden shadow-lg">
        <img
          src={images[currentIndex]}
          alt={`Car ${currentIndex + 1}`}
          className="w-full h-100 object-cover rounded-2xl transition-transform duration-500"
        />
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center gap-2 mt-3">
        {images.map((_, index) => (
          <BsCircleFill
            key={index}
            size={12}
            className={`cursor-pointer ${
              currentIndex === index ? "orange" : "text-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
