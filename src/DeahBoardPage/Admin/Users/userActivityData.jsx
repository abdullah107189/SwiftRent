/* eslint-disable no-unused-vars */
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const UserActivityHeatmap = () => {
  const axiosSecure = useAxiosSecure();
  const [userActivityData, setUserActivityData] = useState([]);

  const processUserActivity = (users) => {
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const initialData = daysOfWeek.map((day) => ({
      name: day,
      "0-4": 0,
      "4-8": 0,
      "8-12": 0,
      "12-16": 0,
      "16-20": 0,
      "20-24": 0,
    }));

    users.forEach((user) => {
      const loginDate = new Date(user.lastLogin);
      const day = loginDate.getDay();
      const hour = loginDate.getHours();

      const timeRange = getTimeRange(hour);
      initialData[day][timeRange] += 1;
    });

    setUserActivityData(initialData);
  };

  const getTimeRange = (hour) => {
    if (hour >= 0 && hour < 4) return "0-4";
    if (hour >= 4 && hour < 8) return "4-8";
    if (hour >= 8 && hour < 12) return "8-12";
    if (hour >= 12 && hour < 16) return "12-16";
    if (hour >= 16 && hour < 20) return "16-20";
    return "20-24";
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axiosSecure.get("/all-user");
        processUserActivity(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserData();
  }, [axiosSecure]);

  return (
    <motion.div
      className="divide-gray-700 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <h2 className="text-xl font-semibold mb-4">Customer Activity Heatmap</h2>
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <BarChart data={userActivityData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="name" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.8)",
                borderColor: "#4B5563",
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />
            <Legend />
            <Bar dataKey="0-4" stackId="a" fill="#6366F1" />
            <Bar dataKey="4-8" stackId="a" fill="#8B5CF6" />
            <Bar dataKey="8-12" stackId="a" fill="#EC4899" />
            <Bar dataKey="12-16" stackId="a" fill="#10B981" />
            <Bar dataKey="16-20" stackId="a" fill="#F59E0B" />
            <Bar dataKey="20-24" stackId="a" fill="#3B82F6" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default UserActivityHeatmap;
