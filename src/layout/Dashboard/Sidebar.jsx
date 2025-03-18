import {
  BarChart2,
  Car,
  Menu,
  Settings,
  ShoppingCart,
  TrendingUp,
  User,
} from 'lucide-react';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

const SIDEBAR_ITEMS = [
  {
    name: 'Overview',
    icon: BarChart2,
    color: '#f5b754',
    path: 'overview',
  },
  { name: 'Add-Car', icon: Car, color: '#f5b754', path: 'addcar' },
  { name: 'Product', icon: Car, color: '#f5b754', path: 'car-product' },
  { name: 'User', icon: User, color: '#f5b754', path: 'users' },
  { name: 'Order', icon: ShoppingCart, color: '#f5b754', path: 'order' },
  { name: 'Analytics', icon: TrendingUp, color: '#f5b754', path: 'analytics' },
  { name: 'Settings', icon: Settings, color: '#f5b754', path: 'settings' },
];

const Sidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  return (
    <motion.div
      className="relative z-10 transition-all duration-300 ease-in-out flex-shrink-0"
      animate={{ width: isSidebarOpen ? 256 : 80 }}
      style={{ width: isSidebarOpen ? 256 : 80 }}
    >
      <div className="h-full bg-opacity-50 backdrop-blur-md p-4 flex flex-col border-r border-slate-100">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setSidebarOpen(!isSidebarOpen)}
          className="p-2 rounded-full transition-colors max-w-fit"
        >
          <Menu size={24} />
        </motion.button>

        <nav className="mt-8 flex-grow">
          {SIDEBAR_ITEMS.map((item, index) => (
            <NavLink key={item.path} to={item.path} className="block">
              <motion.div className="flex items-center p-4 text-sm rounded-lg hover:bg-amber-100 transition-color mb-2">
                <item.icon
                  size={28}
                  style={{ color: item.color, minWidth: '20px' }}
                />
                <AnimatePresence>
                  {isSidebarOpen && (
                    <motion.span
                      className="ml-4 whitespace-nowrap text-xl"
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: 'auto' }}
                      exit={{ opacity: 0, width: 0 }}
                      transition={{ duration: 0.2, delay: 0.3 }}
                    >
                      {item.name}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>
            </NavLink>
          ))}
        </nav>
      </div>
    </motion.div>
  );
};

export default Sidebar;
