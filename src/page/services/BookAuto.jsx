import React from "react";
import book_Auto from "../../assets/car-of-the-year-rs.jpg";

function BookAuto() {
  return (
    <div className="relative h-[500px] overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${book_Auto})` }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/60 bg-opacity-50"></div>

      {/* Text Content */}
      <div className="relative z-10 text-center text-white flex flex-col items-center justify-center">
        <p className="text-[#F5B754] text-[10px] uppercase tracking-wide">
          R e n t N o w
        </p>
        <h1 className="text-3xl font-bold">Book Auto Rental</h1>
      </div>
    </div>
  );
}

export default BookAuto;
