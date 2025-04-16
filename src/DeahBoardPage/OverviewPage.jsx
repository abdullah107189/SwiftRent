import { useEffect, useState } from "react"; // Import useState and useEffect
import Header from "../components/common/Header";
import { motion } from "framer-motion";
import StatCard from "../components/common/StatCard";
import { BarChart, ShoppingCart, Users, Zap } from "lucide-react";
import SalesOverviewChart from "../components/common/SalesOverviewChart";
import CategoryDistributionChart from "../components/common/CategroyDistributionChart";
import SalesChannelChart from "../components/common/SalesChannelChart";
import useAxiosSecure from "../hooks/useAxiosSecure";

const OverviewPage = () => {
  const axiosSecure = useAxiosSecure();

  // Define state for storing all users
  const [allUser, setAllUser] = useState([]);
  const [cars, setCars] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [conversion, setConversion] = useState([]);

  const fetchAllUsers = async () => {
    try {
      const response = await axiosSecure.get("/all-user");
      setAllUser(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // all cars
  const fetchAllCsers = async () => {
    try {
      const response = await axiosSecure.get("/all-cars");
      setCars(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // all booking
  const fetchAllBookings = async () => {
    try {
      const response = await axiosSecure.get("/all-booking");
      setBookings(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // conversion-rate
  const fetchConversionRate = async () => {
    try {
      const response = await axiosSecure.get("/conversion-rate");
      setConversion(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchAllUsers();
    fetchAllCsers();
    fetchAllBookings();
    fetchConversionRate();
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
            name="Total Cars"
            icon={Zap}
            value={cars.length}
            color="#6366F1"
          />
          <StatCard
            name=" Users"
            icon={Users}
            value={allUser.length}
            color="#BB5CF6"
          />
          <StatCard
            name="Total Booking"
            icon={ShoppingCart}
            value={bookings?.length}
            color="#EC4899"
          />
          <StatCard
            name="Conversion Rate"
            icon={BarChart}
            value={`${conversion.conversionRate}`}
            color="#10B981"
          />
        </motion.div>

        {/* CHARTS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <SalesOverviewChart />
          <CategoryDistributionChart />
          <SalesChannelChart />
        </div>
      </main>
    </div>
  );
};

export default OverviewPage;
