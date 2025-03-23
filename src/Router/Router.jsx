import { createBrowserRouter, Navigate } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Home from '../page/Home';
import Services from '../page/services/Services';
import About from '../page/About/About';
import Contact from '../page/Contact/Contact';
import LogIn from '../page/Authentication/LogIn';
import Register from '../page/Authentication/Register';
import Dashboard from '../layout/Dashboard/Dashboard';
import OverviewPage from '../DeahBoardPage/OverviewPage';
import AddToCar from '../DeahBoardPage/AddToCar';
import CarProducatPage from '../DeahBoardPage/CarProducatPage';
import UsersPage from '../DeahBoardPage/Users/UsersPage';
import OrdersPage from '../DeahBoardPage/orderStats/OrdersPage';
import Analytics from '../DeahBoardPage/Analytics/Analytics';
import SettingsPage from '../DeahBoardPage/SettingsPage/SettingsPage';
import Profile from '../DeahBoardPage/SettingsPage/Profile ';
import CarDetails from '../components/Home/HeroSection/CardDetils';
import BrowseCars from '../DeahBoardPage/Customer/Browse Cars/BrowseCars';
import MyBookings from '../DeahBoardPage/Customer/MyBookings/MyBookings';
import PaymentHistory from '../DeahBoardPage/Customer/Payment History/PaymentHistory';
import UpdateProfile from '../DeahBoardPage/UpdateProfile/UpdateProfile';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/about',
        element: <About></About>,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/services',
        element: <Services />,
      },
      {
        path: '/car-details',
        element: <CarDetails />,
      },
    ],
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
    children: [
      { index: true, element: <Navigate to="overview" /> },
      { path: 'overview', element: <OverviewPage /> },
      { path: 'add-car', element: <AddToCar /> },

      { path: 'manage-bookings', element: <CarProducatPage /> },
      { path: 'manage-users', element: <UsersPage /> },
      { path: 'order', element: <OrdersPage /> },
      { path: 'analytics', element: <Analytics /> },
      // customer
      { path: 'browse-cars', element: <BrowseCars /> },
      { path: 'my-bookings', element: <MyBookings /> },
      { path: 'payments', element: <PaymentHistory /> },
      { path: 'profile', element: <UpdateProfile /> },
      { path: 'settings', element: <SettingsPage /> },
    ],
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/login',
    element: <LogIn />,
  },
]);
