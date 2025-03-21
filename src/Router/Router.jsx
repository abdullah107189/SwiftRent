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
]);
