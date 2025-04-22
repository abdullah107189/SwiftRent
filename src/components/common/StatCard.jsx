/* eslint-disable no-unused-vars */
// StatCard.js
import { motion } from "framer-motion";

const StatCard = ({ name, icon: Icon, value, color }) => {
  return (
    <motion.div

      
      className="sBgBlack backdrop-blur-md overflow-hidden shadow-lg rounded-3xl"
      whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.2)" }}
    >
      <div className="p-5">
        <span className="flex items-center text-sm font-medium ">
          <Icon
            size={32}
            className="mr-2"
            style={{ color: color }}
            aria-label={name}
          />
          {name}
        </span>
        <p className="mt-2 text-3xl font-semibold tBlack">{value}</p>
      </div>
    </motion.div>
  );
};

export default StatCard;
