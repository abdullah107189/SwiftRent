import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useSelector } from "react-redux";
import moment from "moment";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const BookingModal = ({ isOpen, onClose, car }) => {
  const { user } = useSelector((state) => state.auth);
  const axiosSecure = useAxiosSecure();
  const [userInfo, setUserInfo] = useState(null);
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setValue,
    trigger,
  } = useForm();

  const pickUpDate = watch("pickUpDate");
  const returnDate = watch("returnDate");

  // Fetch user info and reset form when modal opens
  useEffect(() => {
    if (isOpen && user?.email) {
      axiosSecure.get(`/user-info/${user.email}`).then((response) => {
        // console.log("Fetched userInfo:", response.data);
        setUserInfo(response.data);
        reset({
          fullName: response.data.name || user?.name || "",
          email: user?.email || "",
          carName: car?.name || "",
          carBrand: car?.brand || "",
          price: car?.price || "",
        });
      });
      setStep(1);
    }
  }, [isOpen, user, axiosSecure, reset, car]);

  // Calculate total price based on dates
  useEffect(() => {
    if (pickUpDate && returnDate) {
      const start = moment(pickUpDate);
      const end = moment(returnDate);
      const days = end.diff(start, "days") + 1;
      const newPrice = days > 0 ? car.price * days : car.price;
      setValue("price", newPrice);
    }
  }, [pickUpDate, returnDate, car.price, setValue]);

  // Handle "Next" button click with validation
  const handleNext = async () => {
    const isValid = await trigger([
      "pickUpDate",
      "returnDate",
      "pickUpLocation",
      "dropOffLocation",
    ]);
    if (isValid) {
      setStep(2);
    }
  };

  // Form submission in Step 2
  const onSubmit = async (data) => {
    try {
      const bookingData = {
        fullName: data.fullName,
        email: data.email,
        phone: data.phone,
        carId: car._id,
        carImage: car.image,
        carName: data.carName,
        carBrand: data.carBrand,
        price: data.price,
        pickUpLocation: data.pickUpLocation,
        dropOffLocation: data.dropOffLocation,
        pickUpDate: data.pickUpDate,
        returnDate: data.returnDate,
        additionalNote: data.additionalNote,
        paymentStatus: "Pending",
        tripStatus: "Pending",
        driver: "Not Assigned",
      };

      const response = await axiosSecure.post("/book-auto", bookingData);
      // console.log("Booking successful:", response.data);

      Swal.fire({
        icon: "success",
        title: "Booking Successful",
        text: "Your booking has been confirmed!",
        confirmButtonText: "OK",
      }).then(() => {
        onClose();
        navigate("/dashboard/my-bookings");
      });
    } catch (error) {
      // console.error("Failed to book:", error);
      Swal.fire({
        icon: "error",
        title: "Booking Failed",
        text: "There was an error processing your booking. Please try again.",
        confirmButtonText: "OK",
      });
    }
  };

  if (!isOpen) return null;
  if (!userInfo && isOpen) return <div>Loading...</div>;

  return (
    <div className="fixed inset-0 bg-opacity-70 flex justify-center items-center z-50">
      <div className="sBgBlack p-6 rounded-lg shadow-lg w-full max-w-2xl">
        {/* Header */}
        <div className="bg-[#f5b754] p-4 rounded-t-lg flex justify-between items-center">
          <h2 className="text-2xl font-bold">
            Booking Form - Step {step} of 2
          </h2>
          <button
            onClick={onClose}
            className="text-2xl cursor-pointer font-bold hover:text-gray-200"
          >
            ×
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-6">
          {step === 1 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <h3 className="md:col-span-2 text-lg font-semibold">
                Step 1: Select Dates and Locations
              </h3>

              {/* Pick Up Date */}
              <div>
                <label className="block text-sm font-medium tBlack">
                  Pick Up Date*
                </label>
                <input
                  type="date"
                  {...register("pickUpDate", {
                    required: "Pick Up Date is required",
                    validate: {
                      notPastDate: (value) =>
                        moment(value).isSameOrAfter(moment().startOf("day")) ||
                        "Pick Up Date cannot be in the past",
                    },
                  })}
                  className="mt-1 block w-full px-3 py-2 tBgBlack dark:bg-transparent dark:border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f5b754]"
                />
                {errors.pickUpDate && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.pickUpDate.message}
                  </p>
                )}
              </div>

              {/* Return Date */}
              <div>
                <label className="block text-sm font-medium tBlack">
                  Return Date*
                </label>
                <input
                  type="date"
                  {...register("returnDate", {
                    required: "Return Date is required",
                    validate: {
                      notBeforePickUp: (value) =>
                        pickUpDate
                          ? moment(value).isSameOrAfter(moment(pickUpDate)) ||
                            "Return Date cannot be before Pick Up Date"
                          : true,
                    },
                  })}
                  className="mt-1 block w-full px-3 py-2 tBgBlack dark:bg-transparent dark:border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f5b754]"
                />
                {errors.returnDate && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.returnDate.message}
                  </p>
                )}
              </div>

              {/* Pick Up Location */}
              <div>
                <label className="block text-sm font-medium tBlack">
                  Pick Up Location*
                </label>
                <input
                  type="text"
                  {...register("pickUpLocation", {
                    required: "Pick Up Location is required",
                  })}
                  placeholder="Enter pick up location"
                  className="mt-1 block w-full px-3 py-2 tBgBlack dark:bg-transparent dark:border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f5b754]"
                />
                {errors.pickUpLocation && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.pickUpLocation.message}
                  </p>
                )}
              </div>

              {/* Drop Off Location */}
              <div>
                <label className="block text-sm font-medium tBlack">
                  Drop Off Location*
                </label>
                <input
                  type="text"
                  {...register("dropOffLocation", {
                    required: "Drop Off Location is required",
                  })}
                  placeholder="Enter drop off location"
                  className="mt-1 block w-full px-3 py-2 tBgBlack dark:bg-transparent dark:border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f5b754]"
                />
                {errors.dropOffLocation && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.dropOffLocation.message}
                  </p>
                )}
              </div>

              {/* Display Price */}
              <div className="md:col-span-2">
                {pickUpDate && returnDate ? (
                  <p className="text-lg">
                    Total Price: ${watch("price")} (
                    {moment(returnDate).diff(moment(pickUpDate), "days") + 1}{" "}
                    days)
                  </p>
                ) : (
                  <p className="text-lg">Daily Price: ${car.price}</p>
                )}
              </div>

              {/* Next Button */}
              <div className="md:col-span-2">
                <button
                  type="button"
                  onClick={handleNext}
                  className="w-full px-4 py-2 bg-[#f5b754] text-white rounded-md hover:bg-[#e0a33d] focus:outline-none focus:ring-2 focus:ring-[#f5b754]"
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Step 2: Confirm Booking</h3>

              {/* Display Confirmation Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <p>
                  <strong>Car:</strong> {watch("carName")} - {watch("carBrand")}
                </p>
                <p>
                  <strong>Dates:</strong> {watch("pickUpDate")} to{" "}
                  {watch("returnDate")}
                </p>
                <p>
                  <strong>Locations:</strong> {watch("pickUpLocation")} to{" "}
                  {watch("dropOffLocation")}
                </p>
                <p>
                  <strong>Total Price:</strong> ${watch("price")}
                </p>
                <p>
                  <strong>Full Name:</strong> {watch("fullName")}
                </p>
                <p>
                  <strong>Email:</strong> {watch("email")}
                </p>
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-sm font-medium tBlack">
                  Phone Number*
                </label>
                <input
                  type="tel"
                  {...register("phone", {
                    required: "Phone Number is required",
                  })}
                  placeholder="Enter your phone number"
                  className="mt-1 block w-full px-3 py-2 tBgBlack dark:bg-transparent dark:border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f5b754]"
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              {/* Additional Note */}
              <div>
                <label className="block text-sm font-medium tBlack">
                  Additional Note
                </label>
                <textarea
                  {...register("additionalNote")}
                  placeholder="Enter any additional notes"
                  className="mt-1 block w-full px-3 py-2 tBgBlack dark:bg-transparent dark:border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f5b754]"
                />
              </div>

              {/* Navigation Buttons */}
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="w-full px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-[#f5b754] text-white rounded-md hover:bg-[#e0a33d] focus:outline-none focus:ring-2 focus:ring-[#f5b754]"
                >
                  Confirm Booking
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default BookingModal;
