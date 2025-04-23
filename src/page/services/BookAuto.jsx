import React, { useState } from "react";
import book_Auto from "../../assets/car-of-the-year-rs.jpg";
import { FaCalendarAlt } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import useAxiosPublic from "../../hooks/useAxiosPublic";

function BookAuto() {
  const axiosPublic = useAxiosPublic();
  const [pickUpDate, setPickUpDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [pickUpLocation, setPickUpLocation] = useState("");
  const [dropOffLocation, setDropOffLocation] = useState("");
  const [carType, setCarType] = useState("");
  const [showPickUpCalendar, setShowPickUpCalendar] = useState(false);
  const [showReturnCalendar, setShowReturnCalendar] = useState(false);

  const handlePickUpClick = () => {
    setShowPickUpCalendar(!showPickUpCalendar);
    setShowReturnCalendar(false);
  };

  const handleReturnClick = () => {
    setShowReturnCalendar(!showReturnCalendar);
    setShowPickUpCalendar(false);
  };

  const handleDateSelect = (date, type) => {
    if (type === "pickUp") {
      setPickUpDate(date);
      setShowPickUpCalendar(false);
    } else {
      setReturnDate(date);
      setShowReturnCalendar(false);
    }
  };

  const handleSubmit = async () => {
    if (
      !carType ||
      !pickUpLocation ||
      !pickUpDate ||
      !dropOffLocation ||
      !returnDate
    ) {
      // toast.error("Please fill in all fields.");
      return;
    }

    const bookingData = {
      carType,
      pickUpLocation,
      pickUpDate,
      dropOffLocation,
      returnDate,
    };

    try {
      const response = await axiosPublic.post("/book-auto", bookingData);

      // toast.success("Booking successful!");
      // console.log(response.data);
    } catch (error) {
      // console.error("Error booking car:", error);
      // toast.error("Error booking the car.");
    }
  };

  return (
    <div className="relative h-[500px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${book_Auto})` }}
      ></div>
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="relative z-10 text-center  px-4">
        <p className="orange text-xs uppercase tracking-wide mb-2">
          R e n t N o w
        </p>
        <h1 className="text-4xl font-extrabold drop-shadow-lg">
          Book Auto Rental
        </h1>
        <div className="mt-8 bg-black/40 backdrop-blur-lg rounded-2xl md:rounded-full p-4 shadow-lg flex flex-col gap-3 sm:flex-wrap sm:justify-center md:flex-row md:flex-wrap lg:flex-nowrap">
          <select
            onChange={(e) => setCarType(e.target.value)}
            className="bg-transparent  px-4 py-2 border border-white/30 rounded-full focus:outline-none focus:bg-[#222222]"
          >
            <option>Choose Car Type</option>
            <option>All</option>
            <option>Luxury Car</option>
            <option>Wedding Car</option>
            <option>Corporate Car</option>
            <option>VIP Transfer</option>
          </select>
          <select
            onChange={(e) => setPickUpLocation(e.target.value)}
            className="bg-transparent  px-4 py-2 border border-white/30 rounded-full focus:outline-none focus:bg-[#222222]"
          >
            <option>Pick Up Location</option>
            <option>Mymensingh</option>
            <option>Dhaka</option>
            <option>Khulna</option>
            <option>Rajshahi</option>
          </select>
          <div className="relative w-full md:w-auto">
            <label
              className={`absolute left-4 top-2 text-gray-400 transition-opacity ${
                pickUpDate ? "opacity-0" : "opacity-100"
              }`}
            >
              Pick Up Date
            </label>
            <input
              type="text"
              value={pickUpDate ? pickUpDate.toLocaleDateString() : ""}
              readOnly
              className="bg-transparent  px-4 py-2 border border-white/30 rounded-full focus:outline-none w-full"
            />
            <span
              className="absolute right-3 top-3 cursor-pointer orange"
              onClick={handlePickUpClick}
            >
              <FaCalendarAlt />
            </span>
            {showPickUpCalendar && (
              <div className="absolute -top-35 left-0 bg-white text-black p-4 rounded-md shadow-md z-50">
                <DatePicker
                  selected={pickUpDate}
                  onChange={(date) => handleDateSelect(date, "pickUp")}
                  inline
                  dateFormat="yyyy-MM-dd"
                  calendarClassName="small-calendar"
                />
              </div>
            )}
          </div>
          <select
            onChange={(e) => setDropOffLocation(e.target.value)}
            className="bg-transparent  px-4 py-2 border border-white/30 rounded-full focus:outline-none focus:bg-[#222222]"
          >
            <option>Drop Off Location</option>
            <option>Comilla</option>
            <option>Rangpur</option>
            <option>Uttara</option>
            <option>Gulshan</option>
          </select>
          <div className="relative w-full md:w-auto">
            <label
              className={`absolute left-4 top-2 text-gray-400 transition-opacity ${
                returnDate ? "opacity-0" : "opacity-100"
              }`}
            >
              Return Date
            </label>
            <input
              type="text"
              value={returnDate ? returnDate.toLocaleDateString() : ""}
              readOnly
              className="bg-transparent  px-4 py-2 border border-white/30 rounded-full focus:outline-none w-full"
            />
            <span
              className="absolute right-3 top-3 cursor-pointer orange"
              onClick={handleReturnClick}
            >
              <FaCalendarAlt />
            </span>
            {showReturnCalendar && (
              <div className="absolute -top-64 md:-top-35 left-0 bg-white text-black p-4 rounded-md shadow-md z-50">
                <DatePicker
                  selected={returnDate}
                  onChange={(date) => handleDateSelect(date, "return")}
                  inline
                  dateFormat="yyyy-MM-dd"
                  calendarClassName="small-calendar"
                />
              </div>
            )}
          </div>
          <button
            onClick={handleSubmit}
            className="bg-[#F5B754] text-black px-6 py-2 rounded-full font-semibold transition-transform transform hover:scale-105 shadow-md"
          >
            Rent Now
          </button>
        </div>
      </div>

      {/* ToastContainer for displaying toast notifications */}
      {/* <ToastContainer position="top-right" autoClose={1000} /> */}
    </div>
  );
}

export default BookAuto;
