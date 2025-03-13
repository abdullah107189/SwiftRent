import React from "react";
import book_Auto from "../../assets/car-of-the-year-rs.jpg";

function BookAuto() {
  return (
    <div className="relative h-[500px] overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-full bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${book_Auto})` }}
      ></div>
    </div>
  );
}

export default BookAuto;
