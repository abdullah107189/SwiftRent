// Sidebar.jsx
import {
  FaTachometerAlt,
  FaCar,
  FaUsers,
  FaClipboardList,
  FaStar,
  FaMoneyBill,
  FaUserCog,
  FaTags,
  FaShoppingCart,
  FaUser,
  FaRoute,
} from 'react-icons/fa';
import { Car, LogOut, Settings, ShoppingCart } from 'lucide-react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../redux/auth/authSlice';
import useUserRole from '../../hooks/useUserRole';
import Spinner from '../../components/Spinner';

const menuItems = {
  Admin: [
    { name: 'Dashboard', path: 'overview', icon: FaTachometerAlt },
    { name: 'Add Car', path: 'add-car', icon: Car },
    { name: 'Manage Cars', path: 'manage-cars', icon: FaCar },
    { name: 'Manage Bookings', path: 'manage-bookings', icon: FaClipboardList },
    { name: 'Manage Orders', path: 'orders', icon: ShoppingCart },
    { name: 'User Management', path: 'manage-users', icon: FaUsers },
    { name: 'Manage Drivers', path: 'manage-drivers', icon: FaUserCog },
    { name: 'Billing & Payments', path: 'billing', icon: FaMoneyBill },
    { name: 'Reviews & Reports', path: 'manage-reviews', icon: FaStar },
    { name: 'Settings', path: 'settings', icon: Settings },
  ],
  customer: [
    { name: 'Dashboard', path: 'overview', icon: FaTachometerAlt },
    { name: 'Browse Cars', path: 'browse-cars', icon: FaCar },
    { name: 'My Bookings', path: 'my-bookings', icon: FaShoppingCart },
    { name: 'Payment History', path: 'payments', icon: FaMoneyBill },
    { name: 'Update Profile', path: 'profile', icon: FaUser },
    { name: 'Settings', path: 'settings', icon: Settings },
  ],
  driver: [
    { name: 'Start Trip', path: 'start-trip', icon: FaRoute },
    { name: 'Trip History', path: 'trip-history', icon: FaClipboardList },
    { name: 'Customer Reviews', path: 'customer-reviews', icon: FaStar },
    { name: 'Update Profile', path: 'profile', icon: FaUser },
    { name: 'Earnings', path: 'earnings', icon: FaMoneyBill },
    { name: 'Settings', path: 'settings', icon: Settings },
  ],
};

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userRole, isRoleLoading] = useUserRole();
  console.log(userRole);

  const { user } = useSelector(state => state.auth);
  console.log(user);

  const handleLogout = () => {
    dispatch(logoutUser())
      .unwrap()
      .then(() => navigate('/login'))
      .catch(error => console.error('Logout failed:', error));
  };

  // if (isRoleLoading) return <Spinner />;

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
                  ? 'text-[#f5b754] bg-[#f5b754]/10'
                  : 'hover:bg-[#f5b754]/10'
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
