import { FaClock, FaMapMarkedAlt, FaRoute } from "react-icons/fa";
import Header from "../../components/common/Header";
import { useState, useEffect } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";

const StartTrip = () => {
  const currentUser = useSelector((state) => state.auth.user);
  const driverEmail = currentUser?.email;
  const axiosPublic = useAxiosPublic();
  const [assignedTrips, setAssignedTrips] = useState([]);

  // Fetch assigned trips
  useEffect(() => {
    const fetchAssignedTrips = async () => {
      try {
        const response = await axiosPublic.get(
          `/driver-assignments/${driverEmail}`
        );
        setAssignedTrips(response.data);
      } catch (error) {
        console.error("Failed to fetch assigned trips:", error);
      }
    };
    fetchAssignedTrips();
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
    </div>
  );
};

export default StartTrip;
