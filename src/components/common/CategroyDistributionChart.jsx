import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const COLORS = [
  '#6366F1',
  '#8B5CF6',
  '#EC4899',
  '#10B981',
  '#F59E0B',
  '#F43F5E',
  '#14B8A6',
];

const CategoryDistributionChart = () => {
  const axiosSecure = useAxiosSecure();
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        const res = await axiosSecure.get('/category-distribution');

        setCategoryData(res.data);
      } catch (error) {
        console.error('Error fetching category data:', error);
      }
    };

    fetchCategoryData();
  }, []);

  console.log(categoryData);
  return (
    <motion.div
      className="sBgBlack backdrop-blur-md shadow-lg rounded-3xl md:p-6 p-3"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <h2 className="text-lg font-medium mb-4 text-gray-100">
        Category Distribution
      </h2>
      <div className="h-80">
        <ResponsiveContainer width={'100%'} height={'100%'}>
          <PieChart>
            <Pie
              data={categoryData}
              cx={'50%'}
              cy={'50%'}
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label={({ name, percent }) =>
                `${name} ${(percent * 100).toFixed(0)}%`
              }
            >
              {categoryData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(31, 41, 55, 0.8)',
                borderColor: '#4B5563',
              }}
              itemStyle={{ color: '#E5E7EB' }}
            />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default CategoryDistributionChart;
