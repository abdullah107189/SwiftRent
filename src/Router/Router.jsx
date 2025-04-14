import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../page/Home";
import Services from "../page/services/Services";
import About from "../page/About/About";
import Contact from "../page/Contact/Contact";
import LogIn from "../page/Authentication/LogIn";
import Register from "../page/Authentication/Register";
import Dashboard from "../layout/Dashboard/Dashboard";
import OverviewPage from "../DeahBoardPage/OverviewPage";
import AddToCar from "../DeahBoardPage/AddToCar";
import CarProducatPage from "../DeahBoardPage/CarProducatPage";
import UsersPage from "../DeahBoardPage/Users/UsersPage";
import OrdersPage from "../DeahBoardPage/orderStats/OrdersPage";
import Analytics from "../DeahBoardPage/Analytics/Analytics";
import SettingsPage from "../DeahBoardPage/SettingsPage/SettingsPage";

import BrowseCars from "../DeahBoardPage/Customer/Browse Cars/BrowseCars";
import MyBookings from "../DeahBoardPage/Customer/MyBookings/MyBookings";
import PaymentHistory from "../DeahBoardPage/Customer/Payment History/PaymentHistory";
import UpdateProfile from "../DeahBoardPage/UpdateProfile/UpdateProfile";
import CarDetails from "../components/common/CarDetails/CarDetails";
import NumberCard from "../components/shared/card/NumberCard";
import BookAuto from "../page/services/BookAuto";
import ForgetPassword from "../page/Authentication/ForgetPassword";
import ChangePassword from "../DeahBoardPage/SettingsPage/ChangePassword";
import ExpertDetails from "../page/About/expertsTeam/ExpertDetails";
import ErrorPage from "../components/shared/ErrorPage";
import StartTrip from "../DeahBoardPage/Driver/StartTrip";
import TripHistory from "../DeahBoardPage/Driver/TripHistory";
import CustomerReviews from "../DeahBoardPage/Driver/CustomerReviews";
import Earnings from "../DeahBoardPage/Driver/Earnings";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/car-details/:id",
        element: <CarDetails />,
      },

      {
        path: "/number-card",
        element: <NumberCard />,
      },
      {
        path: "/book-auto",
        element: <BookAuto />,
      },
      {
        path: "/expert/:id",
        element: <ExpertDetails />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      { index: true, element: <Navigate to="overview" /> },
      { path: "overview", element: <OverviewPage /> },
      { path: "addcar", element: <AddToCar /> },

      { path: "car-product", element: <CarProducatPage /> },
      { path: "users", element: <UsersPage /> },
      { path: "order", element: <OrdersPage /> },
      { path: "analytics", element: <Analytics /> },

      { path: "settings", element: <SettingsPage /> },
      { path: "overview", element: <OverviewPage /> },
      { path: "add-car", element: <AddToCar /> },

      { path: "manage-bookings", element: <CarProducatPage /> },
      { path: "manage-users", element: <UsersPage /> },
      { path: "order", element: <OrdersPage /> },
      { path: "analytics", element: <Analytics /> },
      // customer
      { path: "browse-cars", element: <BrowseCars /> },
      { path: "my-bookings", element: <MyBookings /> },
      { path: "payments", element: <PaymentHistory /> },
      { path: "profile", element: <UpdateProfile /> },
      { path: "settings", element: <SettingsPage /> },
      { path: "change-password", element: <ChangePassword /> },

      //driver
      { path: "start-trip", element: <StartTrip /> },
      { path: "trip-history", element: <TripHistory /> },
      { path: "customer-reviews", element: <CustomerReviews /> },
      { path: "earnings", element: <Earnings /> },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <LogIn />,
  },
  {
    path: "/forget-password",
    element: <ForgetPassword />,
  },
]);
