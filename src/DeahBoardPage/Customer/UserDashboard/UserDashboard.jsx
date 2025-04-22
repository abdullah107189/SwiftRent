import {
  BarChart,
  CalendarCheck,
  ShoppingCart,
  Users,
  Wallet,
  Zap,
} from "lucide-react";
import React, { cache, useContext, useEffect, useState } from "react";

import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { motion } from "framer-motion";
import StatCard from "../../../components/common/StatCard";
import Header from "../../../components/common/Header";
import { useSelector } from "react-redux";
import { Avatar } from "@mui/material";
import BookingOverview from "../../../components/common/BookingOverView";
import UserCategoryCharty from "../../../components/common/UserCategoryChart";

export default function UserDashboard() {
  const axiosSecure = useAxiosSecure();

  const [booking, setBokking] = useState([]);
  const [payment, setPayment]=useState([])
  const [userBooking, setUserBooking] = useState([]);
  const { user } = useSelector((state) => state.auth);

  const fetchBooking = async () => {
    try {
      const userEmail = user?.email;
      const response = await axiosSecure.get(`/all-bookingPrice/${userEmail}`);
      const total = response.data.totalBookingPrice;
      setBokking(total);
    } catch (error) {
      console.error(error);
    }
  };
  const fetchPayment = async () => {
    try {
      const userEmail = user?.email;
      const response = await axiosSecure.get(`/totalPayments/${userEmail}`);
      const total = response.data.totalPaymentsPrice;
      setPayment(total);
    } catch (error) {
      console.error(error);
    }
  };

   const fetchUserBookings = async () => {
     try {
       const userEmail = user ?.email;
       const response = await axiosSecure.get(`/all-userBooking/${userEmail}`);
       setUserBooking(response.data);
     } catch (error) {
       console.error(error);
     }
  };
   useEffect(() => {
     if (!user?.email) return;
     axiosSecure
       .get(`/bookings/${user.email}`)
       .then((res) => setUserBooking(res.data))
       .catch((err) => console.error(err))
   }, [user, axiosSecure]);

  useEffect(() => {
    fetchBooking();
    fetchUserBookings();
    fetchPayment();
  }, []);
  return (
    <div className="">
      <Header title="Overview" />

      <main className="w-full px-4 pb-4">
        <motion.div
          className="grid grid-cols-1 gap-4 dm:grid-cols-2 lg:grid-cols-4 mb-8 py-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Total Booking"
            icon={CalendarCheck}
            value={userBooking.length}
            color="#6366F1"
          />
          <StatCard
            name="Total Booking Price"
            icon={Users}
            value={booking}
            color="#BB5CF6"
          />
          <StatCard
            name="Total Payment"
            icon={Wallet}
            value={payment}
            color="#EC4899"
          />
          <StatCard
            name="Conversion Rate"
            icon={BarChart}
            value="12.34%"
            color="#10B981"
          />
        </motion.div>

        {/* CHARTS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <BookingOverview />
          <UserCategoryCharty/>
              {/* <CategoryDistributionChart />
              <SalesChannelChart /> */}
            </div>
      </main>
    </div>
  );
}
