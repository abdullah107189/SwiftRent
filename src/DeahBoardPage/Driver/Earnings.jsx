import { useState, useEffect } from "react";
import { FaMoneyBill } from "react-icons/fa";
import Header from "../../components/common/Header";
import { useSelector } from "react-redux";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Earnings = () => {
  const { user } = useSelector((state) => state.auth);
  const userEmail = user?.email;

  const axiosPublice = useAxiosPublic();

  // State to hold earnings data
  const [earningsData, setEarningsData] = useState({
    total: 0,
    tripsCompleted: 0,
    lastTripEarnings: 0,
  });

  useEffect(() => {
    if (userEmail) {
      const fetchEarnings = async () => {
        try {
          const response = await axiosPublice.get(`/earnings/${userEmail}`);
          const earnings = response.data;

          if (earnings.length > 0) {
            // Calculate total earnings
            const total = earnings.reduce(
              (sum, earning) => sum + earning.amount,
              0
            );
            // Number of completed trips
            const tripsCompleted = earnings.length;
            // Most recent trip earnings ===> sorted descending in backend
            const lastTripEarnings = earnings[0].amount;
            setEarningsData({ total, tripsCompleted, lastTripEarnings });
          }
        } catch (error) {
          // console.error("Failed to fetch earnings:", error);
        }
      };

      fetchEarnings();
    }
  }, [userEmail, axiosPublice]);

  return (
    <>
      <Header title="Earnings" />
      <div className="max-w-5xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-center text-[#4caf50] mb-8 flex items-center justify-center gap-2">
          <FaMoneyBill /> Earnings
        </h2>

        <div className="bg-[#1a1a1a] shadow-lg rounded-xl p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Total Earnings Card */}
            <div className="bg-gray-800 rounded-xl p-6 text-center shadow-md border border-gray-600">
              <h3 className="text-xl font-semibold text-gray-300">
                Total Earnings
              </h3>
              <p className="text-3xl font-bold text-green-400">
                ${earningsData.total}
              </p>
            </div>

            {/* Trips Completed Card */}
            <div className="bg-gray-800 rounded-xl p-6 text-center shadow-md border border-gray-600">
              <h3 className="text-xl font-semibold text-gray-300">
                Trips Completed
              </h3>
              <p className="text-3xl font-bold text-blue-400">
                {earningsData.tripsCompleted}
              </p>
            </div>

            {/* Last Trip Earnings Card */}
            <div className="bg-gray-800 rounded-xl p-6 text-center shadow-md border border-gray-600">
              <h3 className="text-xl font-semibold text-gray-300">
                Last Trip Earnings
              </h3>
              <p className="text-3xl font-bold text-yellow-400">
                ${earningsData.lastTripEarnings}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Earnings;
