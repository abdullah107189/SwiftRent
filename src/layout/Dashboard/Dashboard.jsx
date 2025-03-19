import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const Dashboard = () => {
  return (
    <div className="flex h-screen  text-gray-100  overflow-y-auto">
      {/* Sidebar */}
      <Sidebar />
      {/* Main Content */}
      <main className="flex-1 w-full h-screen px-6 lg:p-8 xl:px-10">
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
