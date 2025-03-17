import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import Sidebar from './Sidebar';
import Footer from '../../components/shared/Footer';

const Dashboard = () => {
  return (
    <div className="flex flex-col min-h-screen text-white ">
      <div className="flex flex-1 text-white h-screen overflow-hidden ">
        {/* <div className=" fixed inset-0 z-0">
        <div className=" absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80"></div>
        <div className="absolute inset-0 backdrop-blur-sm"></div>
      </div> */}
        <Sidebar />
        {/*
         */}
        {/* Main Content */}
        <main className="flex-1 overflow-y-auto px-6 lg:p-8 xl:px-10">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
