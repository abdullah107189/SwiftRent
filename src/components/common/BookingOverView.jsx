import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useSelector } from "react-redux";

const BookingOverview = ({ userEmail }) => {
  const [booking, setBooking] = useState([]);
  const axiosSecure = useAxiosSecure();
    const { user } = useSelector((state) => state.auth);
  
  
const fetchUserBookings = async () => {
  try {
    const userEmail = user?.email;
    const response = await axiosSecure.get(`/bookings-overview/${userEmail}`);
    setBooking(response.data);
  } catch (error) {
    console.error(error);
  }
  };
  useEffect(() => {
      fetchUserBookings();
    }, []);

  return (
    <motion.div
      className="sBgBlack backdrop-blur-md shadow-lg rounded-3xl md:p-6 p-3"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h2 className="text-lg font-medium mb-4 text-gray-100">
        Booking Overview
      </h2>

      
        <div className="h-80">
          <ResponsiveContainer width={"100%"} height={"100%"}>
            <LineChart data={booking}>
              <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
              <XAxis dataKey="carName" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(31, 41, 55, 0.8)",
                  borderColor: "#4B5563",
                }}
                itemStyle={{ color: "#E5E7EB" }}
              />
              <Line
                type="monotone"
                dataKey="price"
                stroke="#f5b754"
                strokeWidth={3}
                dot={{ fill: "#222222", strokeWidth: 2, r: 6 }}
                activeDot={{ r: 8, strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      
    </motion.div>
  );
};

export default BookingOverview;
