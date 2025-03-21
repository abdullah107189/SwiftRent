import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const Dashboard = () => {
  return (
    <div className="flex h-screen text-gray-100 overflow-y-auto">
      {/* Sidebar */}
      <Sidebar />
      {/* Main Content */}
      <main className="flex-1 h-screen px-6 py-4 xl:px-10 ">
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
