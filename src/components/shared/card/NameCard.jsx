import React from "react";

const NameCard = ({ name, image, number }) => {
  return (
    <div className="relative h-[300px] w-full md:h-[350px] rounded-3xl overflow-hidden group">
      {/* content  */}
      <div className="relative w-full h-full rounded-xl overflow-hidden transition-transform duration-300 hover:scale-100">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      {/* Bottom Dark Gradient Overlay */}
      <div className="group-hover:flex hidden  absolute top-0 bottom-0 w-full h-full bg-gradient-to-t from-black/95 via-black/60 to-transparent"></div>

      {/* Service Name */}
      <h2 className="absolute top-4 left-5 text-white text-xl font-bold z-10">
        {name}
      </h2>
      {/* under number and rounded style  */}
      <div className="flex items-center absolute bottom-0 left-0">
        <div className="relative p-4 rounded-[0_40px_0_0] bg-[#1b1b1b]">
          <div className="w-[60px] h-[60px] leading-[60px] border-1 border-[#F5B754] bg-transparent rounded-full overflow-hidden  text-white font-bold text-[14px] text-center group-hover:bg-[#F5B754] group-hover:text-[#1b1b1b]">
            {number ? (
              number
            ) : (
              <span class="inline-block text-sm -rotate-45">➜</span>
            )}
          </div>
          <div className="absolute -top-[19px] -left-[4px] rotate-[-90deg]">
            <svg
              viewBox="0 0 11 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-5"
            >
              <path
                d="M11 1.55e-06L0 0L2.38e-07 11C1.66e-07 4.92 4.92 1.62e-06 11 1.55e-06Z"
                fill="#1b1b1b"
              ></path>
            </svg>
          </div>
          <div className="absolute -bottom-[2px] -right-[22px] rotate-[-90deg]">
            <svg
              viewBox="0 0 11 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
            >
              <path
                d="M11 1.55e-06L0 0L2.38e-07 11C1.66e-07 4.92 4.92 1.62e-06 11 1.55e-06Z"
                fill="#1b1b1b"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NameCard;
