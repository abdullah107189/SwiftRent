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
import AddToCar from '../DeahBoardPage/Admin/AddToCar';
import CarProducatPage from '../DeahBoardPage/CarProducatPage';
import UsersPage from '../DeahBoardPage/Admin/Users/UsersPage';

import OrdersPage from '../DeahBoardPage/orderStats/OrdersPage';
import SettingsPage from '../DeahBoardPage/SettingsPage/SettingsPage';
import BrowseCars from '../DeahBoardPage/Customer/Browse Cars/BrowseCars';
import MyBookings from '../DeahBoardPage/Customer/MyBookings/MyBookings';
import PaymentHistory from '../DeahBoardPage/Customer/Payment History/PaymentHistory';
import UpdateProfile from '../DeahBoardPage/UpdateProfile/UpdateProfile';
import CarDetails from '../components/common/CarDetails/CarDetails';
import NumberCard from '../components/shared/card/NumberCard';
import BookAuto from '../page/services/BookAuto';
import ForgetPassword from '../page/Authentication/ForgetPassword';
import ChangePassword from '../DeahBoardPage/SettingsPage/ChangePassword';
import ExpertDetails from '../page/About/expertsTeam/ExpertDetails';
import ErrorPage from '../components/shared/ErrorPage';
import StartTrip from '../DeahBoardPage/Driver/StartTrip';
import TripHistory from '../DeahBoardPage/Driver/TripHistory';
import CustomerReviews from '../DeahBoardPage/Driver/CustomerReviews';
import Earnings from '../DeahBoardPage/Driver/Earnings';
import SingleBooking from '../TextDelet/SingleBooking';
import ManageCars from '../DeahBoardPage/Admin/ManageCars/ManageCars';
import ManageBookings from '../DeahBoardPage/Admin/ManageBookings';
import ManageDrivers from '../DeahBoardPage/Admin/ManageDrivers';
import BillingPage from '../DeahBoardPage/Admin/BillingPage';
import Updatecar from '../DeahBoardPage/Admin/ManageCars/Updatecar';
import AvailableTrips from '../DeahBoardPage/Driver/AvailableTrips';
import LiveChat from '../components/liveChat/LiveChat';
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
        path: '/singlebooking',
        element: <SingleBooking></SingleBooking>,
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
        path: '/car-details/:id',
        element: <CarDetails />,
      },

      {
        path: '/number-card',
        element: <NumberCard />,
      },
      {
        path: '/book-auto',
        element: <BookAuto />,
      },
      {
        path: '/expert/:id',
        element: <ExpertDetails />,
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
      { path: 'manage-cars', element: <ManageCars /> },
      { path: 'update-car/:id', element: <Updatecar /> },
      { path: 'manage-bookings', element: <ManageBookings /> },

      { path: 'customers-manage', element: <UsersPage /> },
      { path: 'manage-drivers', element: <ManageDrivers /> },
      { path: 'billing', element: <BillingPage /> },
      { path: 'order', element: <OrdersPage /> },
      { path: 'live-chat', element: <LiveChat /> },
      { path: 'settings', element: <SettingsPage /> },
      { path: 'manage-bookings', element: <CarProducatPage /> },

      // customer
      { path: 'browse-cars', element: <BrowseCars /> },
      { path: 'my-bookings', element: <MyBookings /> },
      { path: 'payments', element: <PaymentHistory /> },
      { path: 'profile', element: <UpdateProfile /> },
      { path: 'settings', element: <SettingsPage /> },
      { path: 'change-password', element: <ChangePassword /> },
      //drivers
      { path: 'start-trip', element: <StartTrip /> },
      { path: 'available-trips', element: <AvailableTrips /> },
      { path: 'trip-history', element: <TripHistory /> },
      { path: 'customer-reviews', element: <CustomerReviews /> },
      { path: 'earnings', element: <Earnings /> },
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
  {
    path: '/forget-password',
    element: <ForgetPassword />,
  },

  {
    path: '*',
    element: <ErrorPage />,
  },
]);
