import React, { useState, useEffect } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMoneyBill,
  FaRoute,
  FaCalendarAlt,
  FaClock,
  FaCreditCard,
  FaCheckCircle,
} from "react-icons/fa";
import Header from "../../components/common/Header";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useSelector } from "react-redux";

const TripHistory = () => {
  const currentUser = useSelector((state) => state.auth.user);
  const driverEmail = currentUser?.email;
  const axiosPublic = useAxiosPublic();
  const [tripHistory, setTripHistory] = useState([]);

  useEffect(() => {
    const fetchTripHistory = async () => {
      try {
        const response = await axiosPublic.get(`/trip-history/${driverEmail}`);
        setTripHistory(response.data);
      } catch (error) {
        console.error("Failed to fetch trip history:", error);
      }
    };

    if (driverEmail) {
      fetchTripHistory();
    }
  }, [axiosPublic, driverEmail]);

  return (
    <>
      <Header title="Trip History" />
      <div className=" px-4 py-10">
        <h2 className="text-3xl font-bold text-center orange mb-8 flex items-center justify-center gap-2">
          <FaCheckCircle /> Trip History
        </h2>

        <div className="shadow-lg rounded-2xl">
          <table className="w-full table-auto text-left border-collapse">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="text-start px-4 py-3">Customers Details</th>
                <th className="text-center px-4 py-3">Trip Dates</th>
                <th className="text-start px-4 py-3">Trip Status</th>
              </tr>
            </thead>
            <tbody>
              {tripHistory.length > 0 ? (
                tripHistory.map((trip) => (
                  <tr key={trip._id} className="border-b">
                    <td className="px-4 py-3">
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                          <FaUser className="orange" />
                          {trip.customerName}
                        </div>
                        <div className="flex items-center gap-2">
                          <FaPhone className="orange" />
                          {trip.customerPhone}
                        </div>
                        <div className="flex items-center gap-2">
                          <FaEnvelope className="orange" />
                          {trip.customerEmail}
                        </div>
                        <div className="flex items-center gap-2">
                          <FaMoneyBill className="orange" />
                          {trip.price}
                        </div>
                        <div className="flex items-center gap-2">
                          <FaRoute className="orange" />
                          {trip.pickUpLocation} → {trip.dropOffLocation}
                        </div>
                        <div className="flex items-center gap-2">
                          <FaCalendarAlt className="orange" />
                          {trip.pickUpDate} → {trip.returnDate}
                        </div>
                        <div className="flex items-center gap-2">
                          <FaCreditCard className="orange" />
                          {trip.paymentStatus}
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 gap-2">
                      <span className="flex items-center justify-center gap-2">
                        <FaClock className="orange" />
                        {trip.assignmentTime}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="px-3 py-1 text-sm items-center justify-center rounded-full font-medium bg-green-100 text-green-700">
                        {trip.tripStatus}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="px-4 py-3 text-center">
                    No completed trips found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default TripHistory;
