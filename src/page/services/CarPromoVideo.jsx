import React from "react";
import CarPromoVideo from "../../assets/heroSection/1.jpg";

function CarPromoVideo() {
  const text = "What We Do";
  const letters = text.split("").map((char, index) => (
    <span key={index} className="inline-block mx-[2px]">
      {char === " " ? "\u00A0\u00A0\u00A0" : char}
    </span>
  ));
  return <div>CarPromoVideo</div>;
}

export default CarPromoVideo;
