/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

const SettingSection = ({ icon: Icon, title, children }) => {
  return (
    <motion.div
      className="sBgBlack bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-3xl md:p-6 p-3 border dark:border-white/20 border-black/20 md:mb-8 mb-5"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center mb-4">
        <Icon className="mr-4" size="24" />
        <h2 className="text-xl font-semibold tBlack">{title}</h2>
      </div>
      {children}
    </motion.div>
  );
};
export default SettingSection;
