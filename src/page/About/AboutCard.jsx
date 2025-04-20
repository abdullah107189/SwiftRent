import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import './client.css'

export default function AboutCard({ review }) {
  return (
    <div className="relative max-w-[380px]  p-[60px_40px_0_40px] rounded-[20px_20px_20px_0] sBgBlack ">
      {/* content  */}
      <div>
        <div className=" absolute top-0 right-0  fBgBlack w-25 h-12  rounded-bl-2xl items-center justify-center flex">
          <h1 className="orange text-md flex " >
            {[...Array(3)].map((_, index) => (
              <FaStar key={index} className="orange text-md" />
            ))}
          </h1>
        </div>
        <FaQuoteLeft className="orange text-4xl mb-2" />
        <p className=" text-[14px] font-light leading-[1.95em] tBlack my-3">
          {review.review}
        </p>
      </div>

      {/* under number and rounded style  */}
      <div className="flex items-center  -ml-10">
        <div className="relative p-4 rounded-[0_40px_0_0] fBgBlack">
          <div className="w-[60px] h-[60px] leading-[60px] rounded-full overflow-hidden bg-[#222]   font-bold text-[14px] text-center border border-[#222]">
            <img
              src="https://i.ibb.co.com/8nk54NXD/a96c092f-1297-4e93-8376-6c8bc2d16222.jpg"
              alt=""
            />
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
        <div className="ml-6">
          <h1 className="text-sm  font-semibold">Rahul</h1>
          <p className="text-sm font-normal  tBlack">customer</p>
        </div>
      </div>

      {/* ------------------------- */}
      <div className="absolute -top-[0px] lg:left-[261px] md:left-[251px] left-[185px] -rotate-[-90deg]">
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
      <div className="absolute top-12 -right-[2px] -rotate-[-90deg]">
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
    </div>
  );
}
