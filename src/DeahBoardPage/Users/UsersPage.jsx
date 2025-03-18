import Header from '../../components/common/Header';
import StatCard from '../../components/common/StatCard';
import UserActivityHeatmap from './userActivityData';
import UserDemographicsChart from './userDemographicsData';
import UserGrowthChart from './UserGrowthChart';
import UsersTable from './UsersTable ';
import { motion } from 'framer-motion';

import { BarChart, ShoppingCart, Users, Zap } from 'lucide-react';
const UsersPage = () => {
  return (
    <div>
      <Header title={'Users'} />
      <motion.div
        className="grid grid-cols-1 gap-4 dm:grid-cols-2 lg:grid-cols-4 mb-8 mt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <StatCard
          name="Total Sales"
          icon={Zap}
          value="$12,345"
          color="#6366F1"
        />
        <StatCard name="New Users" icon={Users} value="1234" color="#BB5CF6" />
        <StatCard
          name="Total Sales"
          icon={ShoppingCart}
          value="54223"
          color="#EC4899"
        />
        <StatCard
          name="Conversion Rate"
          icon={BarChart}
          value="12.34%"
          color="#10B981"
        />
      </motion.div>
      {/* USER Table */}
      <UsersTable />

      {/* USER CHARTS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        <UserGrowthChart />
        <UserActivityHeatmap />
        <UserDemographicsChart />
      </div>
    </div>
  );
};

export default UsersPage;
