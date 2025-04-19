/* eslint-disable no-unused-vars */
// Sidebar.jsx
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
import { Car, LogOut, Settings, ShoppingCart } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../redux/auth/authSlice";

const menuItems = {
  Admin: [
    { name: "Dashboard", path: "overview", icon: FaTachometerAlt },
    { name: "Add Car", path: "add-car", icon: Car },
    { name: "Manage Cars", path: "manage-cars", icon: FaCar },
    { name: "Manage Bookings", path: "manage-bookings", icon: FaClipboardList },
    { name: "Customers Management", path: "customers-manage", icon: FaUsers },
    { name: "Manage Drivers", path: "manage-drivers", icon: FaUserCog },
    { name: "Customer Message", path: "live-chat", icon: FaUserCog },
    { name: "Billing & Payments", path: "billing", icon: FaMoneyBill },
    { name: "Settings", path: "settings", icon: Settings },
  ],
  customer: [
    { name: "Browse Cars", path: "browse-cars", icon: FaCar },
    { name: "My Bookings", path: "my-bookings", icon: FaShoppingCart },
    { name: "Payment History", path: "payments", icon: FaMoneyBill },
    // { name: 'Update Profile', path: 'profile', icon: FaUser },
    { name: "Settings", path: "settings", icon: Settings },
  ],
  driver: [
    { name: "Start Trip", path: "start-trip", icon: FaRoute },
    { name: "Available Trips", path: "available-trips", icon: FaMapMarkedAlt },
    { name: "Trip History", path: "trip-history", icon: FaClipboardList },
    { name: "Customer Reviews", path: "customer-reviews", icon: FaStar },
    // { name: 'Update Profile', path: 'profile', icon: FaUser },
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
      .catch((error) => console.error("Logout failed:", error));
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
                isActive
                  ? "text-[#f5b754] bg-[#f5b754]/10"
                  : "hover:bg-[#f5b754]/10"
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
