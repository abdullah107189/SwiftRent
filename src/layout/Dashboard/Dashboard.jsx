import { NavLink, Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import useUserRole from "../../hooks/useUserRole";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { authStateListener } from "../../redux/auth/authListener";

const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    authStateListener(dispatch);
  }, [dispatch]);
  const userRole = useUserRole();

  return (
    <div className="">
      <div className="drawer lg:drawer-open ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Outlet />
          {/* opening button for small devices  */}
          <label
            htmlFor="my-drawer-2"
            className="bg-[#302a20] orange p-3 rounded-full drawer-button lg:hidden fixed top-3 left-3 z-[100]"
          >
            <FaBars className="text-xl" />
          </label>
        </div>
        <div className="drawer-side z-[120]">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu sBgBlack min-h-full md:w-80 w-60 p-4 ">
            <div className="flex justify-between items-center mb-5">
              <NavLink to="/" className="">
                <span className="text-3xl font-black text-white">
                  <span className="text-[#f5b754]">S</span>wift
                  <span className="text-[#f5b754]">R</span>ent
                </span>
              </NavLink>
              {/* closing button for small devices  */}
              <label
                htmlFor="my-drawer-2"
                className="bg-[#f5b754]/10 orange p-3 rounded-full drawer-button lg:hidden"
              >
                <IoClose className="text-xl" />
              </label>
            </div>
            <Sidebar userRole={userRole[0]} />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
