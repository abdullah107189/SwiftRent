import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../page/Home";
import Services from "../page/services/Services";

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
        path: '/contact',
        element: <Contact />,
},{
        path: "/services",
        element: <Services />,
      },
    ],
  },
]);
