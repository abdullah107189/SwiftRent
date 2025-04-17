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
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useEffect, useState } from 'react';

// Function to group users by month
const groupUsersByMonth = users => {
  const userGrowthData = [];

  users.forEach(user => {
    const month = new Date(user.creationDate).toLocaleString('default', {
      month: 'long',
      year: 'numeric',
    });

    const existingMonth = userGrowthData.find(data => data.month === month);
    if (existingMonth) {
      existingMonth.users += 1; // Increment user count for that month
    } else {
      userGrowthData.push({ month, users: 1 });
    }
  });

  return userGrowthData;
};

const UserGrowthChart = () => {
  const axiosSecure = useAxiosSecure();

  // Define state for storing all users and the processed data for the chart
  const [allUser, setAllUser] = useState([]);
  const [userGrowthData, setUserGrowthData] = useState([]);

  const fetchAllUsers = async () => {
    try {
      const response = await axiosSecure.get('/all-user');
      setAllUser(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchAllUsers();
  }, []);

  useEffect(() => {
    // Process user data whenever `allUser` changes
    if (allUser.length > 0) {
      const groupedData = groupUsersByMonth(allUser);
      setUserGrowthData(groupedData);
    }
  }, [allUser]);

  return (
    <motion.div
      className="divide-gray-700 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <h2 className="text-xl font-semibold text-gray-100 mb-4">Customer Growth</h2>
      <div className="h-[320px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={userGrowthData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="month" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(31, 41, 55, 0.8)',
                borderColor: '#4B5563',
              }}
              itemStyle={{ color: '#E5E7EB' }}
            />
            <Line
              type="monotone"
              dataKey="users"
              stroke="#8B5CF6"
              strokeWidth={2}
              dot={{ fill: '#8B5CF6', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default UserGrowthChart;
