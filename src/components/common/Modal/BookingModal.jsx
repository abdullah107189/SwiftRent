import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useSelector } from "react-redux";
import moment from "moment"; 

const BookingModal = ({ isOpen, onClose, car }) => {
  const { user } = useSelector((state) => state.auth);
  const axiosSecure = useAxiosSecure();
  const [userInfo, setUserInfo] = useState(null);
  const [calculatedPrice, setCalculatedPrice] = useState(car?.price || 0);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm();

  
  const pickUpDate = watch("pickUpDate");
  const returnDate = watch("returnDate");


  useEffect(() => {
    if (isOpen && user?.email) {
      axiosSecure.get(`/user-info/${user.email}`).then((response) => {
        console.log("Fetched userInfo:", response.data);
        setUserInfo(response.data);
        reset({
          fullName: response.data.name || user?.name || "",
          email: user?.email || "",
          carName: car?.name || "",
          carBrand: car?.brand || "",
          price: car?.price || "",
        });
      });
    }
  }, [isOpen, user, axiosSecure, reset, car]);

  
  useEffect(() => {
    if (pickUpDate && returnDate) {
      const start = moment(pickUpDate);
      const end = moment(returnDate);
      const days = end.diff(start, "days") + 1; 
      if (days > 0) {
        setCalculatedPrice(car.price * days); 
      } else {
        setCalculatedPrice(car.price); 
      }
    }
  }, [pickUpDate, returnDate, car.price]);

  
  const onSubmit = async (data) => {
    try {
      const bookingData = {
        fullName: data.fullName,
        email: data.email,
        phone: data.phone,
        carId: car._id,
        carName: data.carName,
        carBrand: data.carBrand,
        price: calculatedPrice,
        pickUpLocation: data.pickUpLocation,
        dropOffLocation: data.dropOffLocation,
        pickUpDate: data.pickUpDate,
        returnDate: data.returnDate,
        additionalNote: data.additionalNote,
      };

      const response = await axiosSecure.post("/book-auto", bookingData);
      console.log("Booking successful:", response.data);
      onClose();
    } catch (error) {
      console.error("Failed to book:", error);
    }
  };

  if (!isOpen) return null;
  if (!userInfo && isOpen) {
    return <div>Loading...</div>;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
      <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg w-full max-w-2xl">
        {/* Header */}
        <div className="bg-[#f5b754] text-white p-4 rounded-t-lg flex justify-between items-center">
          <h2 className="text-2xl font-bold">Booking Form</h2>
          <button
            onClick={onClose}
            className="text-2xl font-bold hover:text-gray-200"
          >
            ×
          </button>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Left Column */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300">
                Full Name*
              </label>
              <input
                type="text"
                {...register("fullName", { required: "Full Name is required" })}
                readOnly
                className="mt-1 block w-full px-3 py-2 bg-gray-800 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f5b754]"
              />
              {errors.fullName && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.fullName.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300">
                Phone*
              </label>
              <input
                type="tel"
                {...register("phone", { required: "Phone is required" })}
                className="mt-1 block w-full px-3 py-2 bg-gray-800 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f5b754]"
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300">
                Pick Up Location
              </label>
              <input
                type="text"
                {...register("pickUpLocation")}
                className="mt-1 block w-full px-3 py-2 bg-gray-800 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f5b754]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300">
                Drop Off Location
              </label>
              <input
                type="text"
                {...register("dropOffLocation")}
                className="mt-1 block w-full px-3 py-2 bg-gray-800 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f5b754]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300">
                Additional Note
              </label>
              <textarea
                {...register("additionalNote")}
                className="mt-1 block w-full px-3 py-2 bg-gray-800 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f5b754]"
              ></textarea>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300">
                Email*
              </label>
              <input
                type="email"
                {...register("email", { required: "Email is required" })}
                readOnly
                className="mt-1 block w-full px-3 py-2 bg-gray-800 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f5b754]"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300">
                Car Name
              </label>
              <input
                type="text"
                {...register("carName")}
                readOnly
                className="mt-1 block w-full px-3 py-2 bg-gray-800 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f5b754]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300">
                Car Brand
              </label>
              <input
                type="text"
                {...register("carBrand")}
                readOnly
                className="mt-1 block w-full px-3 py-2 bg-gray-800 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f5b754]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300">
                Price
              </label>
              <input
                type="text"
                value={calculatedPrice}
                readOnly
                className="mt-1 block w-full px-3 py-2 bg-gray-800 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f5b754]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300">
                Pick Up Date
              </label>
              <input
                type="date"
                {...register("pickUpDate", {
                  required: "Pick Up Date is required",
                })}
                className="mt-1 block w-full px-3 py-2 bg-gray-800 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f5b754]"
              />
              {errors.pickUpDate && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.pickUpDate.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300">
                Return Date
              </label>
              <input
                type="date"
                {...register("returnDate", {
                  required: "Return Date is required",
                })}
                className="mt-1 block w-full px-3 py-2 bg-gray-800 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f5b754]"
              />
              {errors.returnDate && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.returnDate.message}
                </p>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <div className="col-span-1 md:col-span-2 mt-6">
            <button
              type="submit"
              className="w-full px-4 py-2 bg-[#f5b754] text-white rounded-md hover:bg-[#e0a33d] focus:outline-none focus:ring-2 focus:ring-[#f5b754]"
            >
              Rent Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;
