import { useEffect, useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { motion } from 'framer-motion';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const SalesOverviewChart = () => {
  const axiosSecure = useAxiosSecure();
  const [salesData, setSalesData] = useState([]);
  // console.log(salesData);
  const selesOversFetch = async () => {
    try {
      const response = await axiosSecure.get('/sales-overview');
      setSalesData(response.data);
    } catch (error) {
      console.error('Error fetching sales overview:', error);
    }
  };
  useEffect(() => {
    selesOversFetch();
  }, []);

  return (
    <motion.div
      className="sBgBlack backdrop-blur-md shadow-lg rounded-3xl md:p-6 p-3"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h2 className="text-lg font-medium mb-4 text-gray-100">Sales Overview</h2>

      <div className="h-80">
        <ResponsiveContainer width={'100%'} height={'100%'}>
          <LineChart data={salesData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
            <XAxis dataKey="name" stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(31, 41, 55, 0.8)',
                borderColor: '#4B5563',
              }}
              itemStyle={{ color: '#E5E7EB' }}
            />
            <Line
              type="monotone"
              dataKey="sales"
              stroke="#f5b754"
              strokeWidth={3}
              dot={{ fill: '#222222', strokeWidth: 2, r: 6 }}
              activeDot={{ r: 8, strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default SalesOverviewChart;
