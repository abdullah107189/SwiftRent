import React from "react";

const SimpleCard = ({ title, details, number }) => {
  return (
    <div className="relative p-[60px_40px_0_40px] rounded-[20px_20px_20px_0] sBgBlack">
      {/* content  */}
      <div>
        <h5 className="dark:text-white font-bold text-xl">{title}</h5>
        <p className=" text-[14px] font-light leading-[1.95em] tBlack my-3">
          {details}
        </p>
      </div>
      {/* under number and rounded style  */}
      <div className="flex items-center -ml-10">
        <div className="relative p-4 rounded-[0_40px_0_0] fBgBlack ">
          <div className="w-[60px] h-[60px] leading-[60px] rounded-full overflow-hidden sBgBlack  dark:text-white font-bold text-[14px] text-center">
            {number}.
          </div>
          <div className="absolute -top-[19px] -left-[2px] rotate-[-90deg]">
            <svg
              viewBox="0 0 11 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-5 fill-current text-[#f8f9fa] dark:text-[#1b1b1b]"
            >
              <path d="M11 1.55e-06L0 0L2.38e-07 11C1.66e-07 4.92 4.92 1.62e-06 11 1.55e-06Z"></path>
            </svg>
          </div>
          <div className="absolute -bottom-[0px] -right-[22px] rotate-[-90deg]">
            <svg
              viewBox="0 0 11 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-5 fill-current text-[#f8f9fa] dark:text-[#1b1b1b]"
            >
              <path d="M11 1.55e-06L0 0L2.38e-07 11C1.66e-07 4.92 4.92 1.62e-06 11 1.55e-06Z"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleCard;
