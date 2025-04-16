import React, { useState, useEffect } from "react";
import { FaMapMarkedAlt, FaCheck, FaTimes } from "react-icons/fa";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";

const AvailableTrips = () => {
  const currentUser = useSelector((state) => state.auth.user);
  const driverEmail = currentUser?.email;
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();
  const [availableTrips, setAvailableTrips] = useState([]);

  // Fetch available trips
  useEffect(() => {
    const fetchAvailableTrips = async () => {
      try {
        const response = await axiosPublic.get(
          `/available-trips?email=${driverEmail}`
        );
        setAvailableTrips(response.data);
      } catch (error) {
        console.error("Failed to fetch available trips:", error);
      }
    };
    fetchAvailableTrips();
  }, [axiosPublic, driverEmail]);

  // Confirmation for picking a trip
  const confirmPickTrip = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to pick this trip?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        handlePickTrip(id);
      }
    });
  };

  // Confirmation for canceling a trip
  const confirmCancelTrip = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to cancel this trip? It will no longer be visible to you.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        handleCancelTrip(id);
      }
    });
  };

  // Pick Trip
  const handlePickTrip = async (id) => {
    try {
      if (!driverEmail) {
        throw new Error("Driver email not found. Please log in again.");
      }
      await axiosSecure.post(`/pick-trip/${id}`, { driverEmail });
      const response = await axiosPublic.get(
        `/available-trips?email=${driverEmail}`
      );
      setAvailableTrips(response.data);
      Swal.fire({
        title: "Success!",
        text: "Trip Picked Successfully! Check your assigned trips to start.",
        icon: "success",
        confirmButtonText: "OK",
      });
    } catch (error) {
      console.error("Failed to pick trip:", error);
      const message =
        error.response?.data?.message ||
        error.message ||
        "Failed to pick trip!";
      Swal.fire({
        title: "Error!",
        text: message,
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  // Cancel Trip
  const handleCancelTrip = async (id) => {
    try {
      if (!driverEmail) {
        throw new Error("Driver email not found. Please log in again.");
      }
      await axiosSecure.post(`/cancel-trip/${id}`, { driverEmail });
      const response = await axiosPublic.get(
        `/available-trips?email=${driverEmail}`
      );
      setAvailableTrips(response.data);
      Swal.fire({
        title: "Success!",
        text: "Trip canceled successfully!",
        icon: "success",
        confirmButtonText: "OK",
      });
    } catch (error) {
      console.error("Failed to cancel trip:", error);
      const message =
        error.response?.data?.message ||
        error.message ||
        "Failed to cancel trip!";
      Swal.fire({
        title: "Error!",
        text: message,
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className="mt-8">
      <h2 className="text-3xl font-bold text-center text-[#f5b754] mb-8 flex items-center justify-center gap-2 pt-4">
        <FaMapMarkedAlt /> Available Trips
      </h2>
      {availableTrips.length === 0 ? (
        <p className="text-center text-gray-500">
          No available trips at the moment.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
          {availableTrips.map((trip) => (
            <div
              key={trip._id}
              className="bg-[#1B1B1B] border border-amber-300 rounded-lg shadow-lg p-4"
            >
              <p>
                <strong>Customer:</strong> {trip.fullName} ({trip.email},{" "}
                {trip.phone})
              </p>
              <p>
                <strong>Route:</strong> {trip.pickUpLocation} →{" "}
                {trip.dropOffLocation}
              </p>
              <p>
                <strong>Dates:</strong> {trip.pickUpDate} → {trip.returnDate}
              </p>
              <p>
                <strong>Price:</strong> ${trip.price}
              </p>
              <p>
                <strong>Customer Say:</strong> {trip.additionalNote || "N/A"}
              </p>
              <div className="flex justify-start gap-5 mt-4">
                <button
                  onClick={() => confirmPickTrip(trip._id)}
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded flex items-center gap-2"
                >
                  <FaCheck /> Pick
                </button>
                <button
                  onClick={() => confirmCancelTrip(trip._id)}
                  className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded flex items-center gap-2"
                >
                  <FaTimes /> Cancel
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AvailableTrips;
