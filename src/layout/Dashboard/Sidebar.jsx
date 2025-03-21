import {
  BarChart2,
  Car,
  Menu,
  Settings,
  ShoppingCart,
  TrendingUp,
  User,
} from 'lucide-react';
import { AiOutlineClose } from 'react-icons/ai';
import { CiBookmark } from 'react-icons/ci';
import { NavLink } from 'react-router-dom';

const SIDEBAR_ITEMS = [
  { name: 'Overview', icon: BarChart2, path: 'overview' },
  { name: 'Add-Car', icon: Car, path: 'addcar' },
  { name: 'Booking', icon: CiBookmark, path: 'car-product' },
  { name: 'User', icon: User, path: 'users' },
  { name: 'Order', icon: ShoppingCart, path: 'order' },

  { name: 'Analytics', icon: TrendingUp, path: 'analytics' },
  { name: 'Settings', icon: Settings, path: 'settings' },
];

const Sidebar = () => {
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
        </nav>
      </div>

      {/* Mobile Toggle Button */}

      {/* <Menu /> */}
    </div>
  );
};

export default Sidebar;
