/* eslint-disable no-unused-vars */

import {
  FaTachometerAlt,
  FaCar,
  FaUsers,
  FaClipboardList,
  FaStar,
  FaMoneyBill,
  FaUserCog,
  FaShoppingCart,
  FaRoute,
  FaMapMarkedAlt,
} from "react-icons/fa";
import { Car, LogOut, Settings } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../redux/auth/authSlice";
import { HiOutlineDocumentText } from "react-icons/hi";
import { FiEdit } from "react-icons/fi";
import { MdEdit } from "react-icons/md";

const menuItems = {
  Admin: [
    { name: "Dashboard", path: "overview", icon: FaTachometerAlt },
    { name: "Add Car", path: "add-car", icon: Car },
    { name: "Write Blog", path: "write-blog", icon: FiEdit },
    { name: "Blog Manage", path: "blogs-manage", icon: MdEdit },
    { name: "Manage Cars", path: "manage-cars", icon: FaCar },
    { name: "Manage Bookings", path: "manage-bookings", icon: FaClipboardList },
    { name: "Customers Management", path: "customers-manage", icon: FaUsers },
    { name: "Manage Drivers", path: "manage-drivers", icon: FaUserCog },
    { name: "Customer Message", path: "live-chat", icon: FaUserCog },
    { name: "Billing & Payments", path: "billing", icon: FaMoneyBill },
    { name: "Settings", path: "settings", icon: Settings },
  ],
  customer: [
    { name: "Dashboard", path: "user-dashboard", icon: FaTachometerAlt },
    { name: "Browse Cars", path: "browse-cars", icon: FaCar },
    { name: "My Bookings", path: "my-bookings", icon: FaShoppingCart },
    { name: "Payment History", path: "payments", icon: FaMoneyBill },
    { name: "Settings", path: "settings", icon: Settings },
  ],
  driver: [
    { name: "Start Trip", path: "start-trip", icon: FaRoute },
    { name: "Available Trips", path: "available-trips", icon: FaMapMarkedAlt },
    { name: "Trip History", path: "trip-history", icon: FaClipboardList },
    { name: "Customer Reviews", path: "customer-reviews", icon: FaStar },
    { name: "Earnings", path: "earnings", icon: FaMoneyBill },
    { name: "Settings", path: "settings", icon: Settings },
  ],
};

const Sidebar = ({ userRole }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser())
      .unwrap()
      .then(() => navigate("/login"))
      .catch((error) => error.message);
    // .catch((error) => console.error("Logout failed:", error));
  };

  const items = menuItems[userRole];
  return (
    <div className="">
      <nav>
        {items?.map(({ name, icon: Icon, path }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 rounded-lg transition my-2 ${
                isActive ? "orange bg-[#f5b754]/10" : "hover:bg-[#f5b754]/10"
              }`
            }
          >
            <Icon size={20} />
            <span>{name}</span>
          </NavLink>
        ))}
        <div className="divider">OR</div>
        <button
          onClick={handleLogout}
          className="mt-auto flex items-center gap-3 p-3 rounded-lg bg-red-500 hover:bg-red-700 w-full"
        >
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;
