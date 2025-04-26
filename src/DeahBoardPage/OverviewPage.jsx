/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import Header from '../components/common/Header';
import { motion } from 'framer-motion';
import StatCard from '../components/common/StatCard';
import { BarChart, ShoppingCart, Users, Zap } from 'lucide-react';
import SalesOverviewChart from '../components/common/SalesOverviewChart';
import CategoryDistributionChart from '../components/common/CategroyDistributionChart';
import SalesChannelChart from '../components/common/SalesChannelChart';
import useAxiosSecure from '../hooks/useAxiosSecure';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTotalSales } from '../redux/Slice/totalSlice';
import Spinner from '../components/Spinner';
import CountUp from 'react-countup';
const OverviewPage = () => {
  const axiosSecure = useAxiosSecure();

  // const dispatch = useDispatch();
  // const { totalSales, loading, error } = useSelector(
  //   state => state.totalSales?.amount ?? 0
  // );
  // const salesStatus = useSelector(state => state.totalSales?.status ?? 'idle');

  // useEffect(() => {
  //   if (salesStatus === 'idle') {
  //     dispatch(fetchTotalSales());
  //   }
  // }, [salesStatus, dispatch]);

  const [allUser, setAllUser] = useState([]);
  const [totalSeals, setTotalSales] = useState(0);
  const [ordrs, setTotalorders] = useState([]);

  const fetchAllUsers = async () => {
    try {
      const response = await axiosSecure.get('/all-user');
      setAllUser(response.data);
    } catch (error) {
      // console.error(error);
    }
  };
  const fetchTotalSales = async () => {
    try {
      const response = await axiosSecure.get('/total-sales');
      setTotalSales(response.data.totalSell);
      setTotalorders(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchAllUsers();
    fetchTotalSales();
  }, []);

  // if (loading) {
  //   return <Spinner />;
  // }
  // if (error) {
  //   return <p className="text-center text-red-500">ERROR:{error}</p>;
  // }
  console.log(totalSeals, ordrs);
  return (
    <div className="">
      <Header title="Admin Dashboard" text="Welcome to SwiftRent " />
      <main className="w-full px-4 pb-4">
        <motion.div
          className="grid grid-cols-1 gap-4 dm:grid-cols-2 lg:grid-cols-4 mb-8 py-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Total Sales"
            icon={Zap}
            value={
              <CountUp end={totalSeals} prefix="$ " decimals={2} duration={2} />
            }
            color="#6366F1"
          />
          <StatCard
            name=" Users"
            icon={Users}
            value={allUser.length}
            color="#BB5CF6"
          />
          <StatCard
            name="Total Orders"
            icon={ShoppingCart}
            value={ordrs.length}
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
          <SalesOverviewChart />
          <CategoryDistributionChart />
          <SalesChannelChart />
        </div>
      </main>
    </div>
  );
};

export default OverviewPage;
