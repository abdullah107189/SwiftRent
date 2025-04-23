import Header from '../../../components/common/Header';

import UserActivityHeatmap from './userActivityData';

import UserGrowthChart from './UserGrowthChart';
import UsersTable from './UsersTable ';

const UsersPage = () => {
  return (
    <div>
      <Header title="Admin Dashboard" text="Welcome to SwiftRent " />
      <div className="px-4 py-4">
        {/* USER Table */}
        <UsersTable />

        {/* USER CHARTS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          <UserGrowthChart />
          <UserActivityHeatmap />
        </div>
      </div>
    </div>
  );
};

export default UsersPage;
