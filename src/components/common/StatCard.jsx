// StatCard.js
import { motion } from 'framer-motion';

const StatCard = ({ name, icon: Icon, value, color }) => {
  return (
    <motion.div
      className="bg-black backdrop-blur-md overflow-hidden shadow-lg rounded-3xl"
      whileHover={{ y: -5, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.2)' }}
    >
      <div className="p-5">
        <span className="flex items-center text-sm font-medium text-white">
          <Icon
            size={32}
            className="mr-2"
            style={{ color: color }}
            aria-label={name}
          />
          {name}
        </span>
        <p className="mt-2 text-3xl font-semibold text-gray-100">{value}</p>
      </div>
    </motion.div>
  );
};

export default StatCard;
