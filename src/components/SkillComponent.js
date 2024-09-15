import React from "react";
import { motion } from "framer-motion";

const SkillComponent = ({ title, icon }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.08, opacity: 1 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.4, transition: { duration: 1.5 } }}
      className="p-2 h-auto rounded mt-2 mr-2 text-white"
    >
      <div className="flex justify-center">{icon}</div>
      <p className="text-center md:text-lg">{title}</p>
    </motion.div>
  );
};

export default SkillComponent;
