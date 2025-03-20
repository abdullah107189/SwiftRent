import {
  BarChart2,
  Car,
  Menu,
  Settings,
  ShoppingCart,
  TrendingUp,
  User,
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

const SIDEBAR_ITEMS = [
  { name: 'Overview', icon: BarChart2, path: 'overview' },
  { name: 'Add-Car', icon: Car, path: 'addcar' },
  { name: 'Product', icon: Car, path: 'car-product' },
  { name: 'User', icon: User, path: 'users' },
  { name: 'Order', icon: ShoppingCart, path: 'order' },
  { name: 'Analytics', icon: TrendingUp, path: 'analytics' },
  { name: 'Settings', icon: Settings, path: 'settings' },
];

const Sidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setSidebarOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <motion.div
      className={`relative z-50 transition-all duration-300 ease-in-out flex-shrink-0 
              ${isSidebarOpen ? 'w-[220px]' : 'w-[80px]'}`}
      animate={{ width: isSidebarOpen ? (isSmallScreen ? 80 : 220) : 80 }}
      initial={{ width: isSmallScreen ? 80 : 220 }}
    >
      <div className="h-full bg-opacity-50 backdrop-blur-md p-4 flex flex-col border-r border-slate-100">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setSidebarOpen(!isSidebarOpen)}
          className="hidden sm:block kp-2 rounded-full transition-colors max-w-fit"
        >
          <Menu size={24} />
        </motion.button>

        <nav className="mt-8 flex-grow">
          {SIDEBAR_ITEMS.map(item => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `block transition-colors ${
                  isActive
                    ? 'bg-[#f5b754] text-white font-semibold rounded-2xl'
                    : 'text-[#f5b754]'
                }`
              }
            >
              <motion.div className="flex items-center p-4 text-sm rounded-2xl transition-color mb-2">
                <item.icon size={28} style={{ minWidth: '20px' }} />
                <AnimatePresence>
                  {isSidebarOpen && !isSmallScreen && (
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
