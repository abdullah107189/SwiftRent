import { FaCar, FaClock, FaMapMarkedAlt, FaRoute } from "react-icons/fa";
import Header from "../../components/common/Header";
import { useState, useEffect } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";

const StartTrip = () => {
  const currentUser = useSelector((state) => state.auth.user);
  // const { user } = useSelector((state) => state.auth);
  const driverEmail = currentUser?.email;
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();
  const [availableTrips, setAvailableTrips] = useState([]);
  const [assignedTrips, setAssignedTrips] = useState([]);

  // Fetch both available and assigned trips
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [availableResponse, assignedResponse] = await Promise.all([
          axiosPublic.get(`/available-trips?email=${driverEmail}`),
          axiosPublic.get(`/driver-assignments/${driverEmail}`),
        ]);
        setAvailableTrips(availableResponse.data);
        setAssignedTrips(assignedResponse.data);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };
    fetchData();
  }, [axiosPublic, driverEmail]);

  const handleStartTrip = () => {
    Swal.fire({
      title: "Trip Started!",
      text: "Your trip has been started successfully. 🚗",
      icon: "success",
      showConfirmButton: false,
      timer: 2000,
    });
  };

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
      const [availableResponse, assignedResponse] = await Promise.all([
        axiosPublic.get(`/available-trips?email=${driverEmail}`),
        axiosPublic.get(`/driver-assignments/${driverEmail}`),
      ]);
      setAvailableTrips(availableResponse.data);
      setAssignedTrips(assignedResponse.data);
      Swal.fire({
        title: "Success!",
        text: "Trip Picked Successfully!",
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
      const [availableResponse, assignedResponse] = await Promise.all([
        axiosPublic.get(`/available-trips?email=${driverEmail}`),
        axiosPublic.get(`/driver-assignments/${driverEmail}`),
      ]);
      setAvailableTrips(availableResponse.data);
      setAssignedTrips(assignedResponse.data);
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
    <div className="pb-10">
      <Header title="Trip Started! 🚗" />

      {/* Assigned Trips Section */}
      <div className="mt-8">
        <h2 className="text-3xl font-bold text-center text-[#f5b754] mb-8 flex items-center justify-center gap-2 pt-4">
          <FaRoute /> Your Assigned Trips
        </h2>
        {assignedTrips.length === 0 ? (
          <p className="text-center text-gray-500">
            You have no assigned trips.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {assignedTrips.map((trip) => (
              <div
                key={trip._id}
                className="bg-[#1B1B1B] rounded-lg shadow-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {/* Car Image */}
                <div>
                  <img
                    src={
                      trip.carImage ||
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROywEwo4S2_bitDGhl3NArx4qrbpUjtiYPMw&s"
                    }
                    alt={trip.carName}
                    className="w-full h-60 object-cover rounded-xl"
                  />
                </div>
                {/* Trip Info */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold">{trip.carName}</h3>
                  <p className="flex items-center gap-2">
                    <FaClock className="text-[#f5b754]" /> Start Time:{" "}
                    {trip.pickUpDate}
                  </p>
                  <p className="flex items-center gap-2">
                    <FaMapMarkedAlt className="text-[#f5b754]" /> Pickup:{" "}
                    {trip.pickUpLocation}
                  </p>
                  <p className="flex items-center gap-2">
                    <FaRoute className="text-[#f5b754]" /> Route:{" "}
                    {trip.pickUpLocation} → {trip.dropOffLocation}
                  </p>
                  <button
                    onClick={() => handleStartTrip(trip._id)}
                    className="mt-6 w-full bg-[#f5b754] hover:bg-yellow-500 text-white font-semibold py-3 rounded-lg transition duration-300"
                  >
                    Confirm & Start Trip
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Available Trips Section */}
      <div className="mt-8">
        <h2 className="text-3xl font-bold text-center text-[#f5b754] mb-8 flex items-center justify-center gap-2 pt-4">
          <FaMapMarkedAlt /> Available Trips
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {availableTrips.map((trip) => (
            <div
              key={trip._id}
              className="bg-[#1B1B1B] rounded-lg shadow-lg p-4"
            >
              <h3 className="text-xl font-semibold">{trip.carName}</h3>
              <p>Pickup: {trip.pickUpLocation}</p>
              <p>Dropoff: {trip.dropOffLocation}</p>
              <p>Start Date: {trip.pickUpDate}</p>
              <p>Return Date: {trip.returnDate}</p>
              {/* Pick And Cancel button added */}
              <div className="flex justify-between mt-4">
                <button
                  onClick={() => confirmPickTrip(trip._id)}
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
                >
                  Pick
                </button>
                <button
                  onClick={() => confirmCancelTrip(trip._id)}
                  className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
                >
                  Cancel
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StartTrip;
