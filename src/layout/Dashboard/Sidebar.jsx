import {
  BarChart2,
  Car,
  LogOut,
  Menu,
  Settings,
  ShoppingCart,
  TrendingUp,
  User,
} from 'lucide-react';

import { CgProfile } from 'react-icons/cg';
import { CiBookmark } from 'react-icons/ci';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';

const SIDEBAR_ITEMS = [
  { name: 'Overview', icon: BarChart2, path: 'overview' },
  { name: 'Add-Car', icon: Car, path: 'addcar' },
  { name: 'Booking', icon: CiBookmark, path: 'car-product' },
  { name: 'User', icon: User, path: 'users' },
  { name: 'Order', icon: ShoppingCart, path: 'order' },
  { name: 'Profile', icon: CgProfile, path: 'profile' },
  { name: 'Analytics', icon: TrendingUp, path: 'analytics' },
  { name: 'Settings', icon: Settings, path: 'settings' },
];
import { logoutUser } from '../../redux/auth/authSlice';
const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logoutUser())
      .unwrap()
      .then(() => {
        navigate('/login');
      })
      .catch(error => {
        console.error('Logout failed:', error);
      });
  };
  return (
    <div className="">
      {/* Sidebar */}
      <div>
        <div className="flex justify-between items-center relative "></div>
        <nav className="">
          {SIDEBAR_ITEMS.map(({ name, icon: Icon, path }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `flex items-center gap-3 p-3 rounded-lg transition my-2 ${
                  isActive
                    ? 'text-[#f5b754] orange bg-[#f5b754]/10'
                    : 'hover:bg-[#f5b754]/10'
                }`
              }
            >
              <Icon size={20} />
              <span>{name}</span>
            </NavLink>
          ))}

          <div className="divider">OR</div>
          <NavLink
            onClick={handleLogout}
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 rounded-lg transition my-2 ${
                isActive
                  ? 'text-[#f5b754] orange bg-[#f5b754]/10'
                  : 'hover:bg-[#f5b754]/10'
              }`
            }
          >
            <LogOut size={20} />
            <span>LouOut</span>
          </NavLink>
        </nav>
      </div>

      {/* Mobile Toggle Button */}

      {/* <Menu /> */}
    </div>
  );
};

export default Sidebar;
