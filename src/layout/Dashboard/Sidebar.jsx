import { useState } from 'react';
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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="z-20 bg-gray-800">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-950 text-white w-64 transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-64'
        } md:static md:translate-x-0`}
      >
        <div className="p-4 flex justify-between items-center ">
          <NavLink to="/" className="flex  items-center text-center">
            <span className="text-3xl font-black text-white">
              <span className="text-[#f5b754]">S</span>wift
              <span className="text-[#f5b754]">R</span>ent
            </span>
          </NavLink>
          <AiOutlineClose
            className="cursor-pointer md:hidden"
            onClick={() => setIsOpen(false)}
          />
        </div>
        <nav className="p-4">
          {SIDEBAR_ITEMS.map(({ name, icon: Icon, path }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `flex items-center gap-3 p-3 rounded-lg transition my-2 ${
                  isActive
                    ? 'bg-gray-700 text-yellow-400'
                    : 'hover:bg-yellow-400'
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
      {!isOpen && (
        <button
          className="md:hidden fixed top-4 left-4 bg-gray-800 text-white p-2 rounded-full"
          onClick={() => setIsOpen(true)}
        >
          <Menu />
        </button>
      )}
    </div>
  );
};

export default Sidebar;
