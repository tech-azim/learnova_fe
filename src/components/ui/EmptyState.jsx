import * as React from "react";
import { motion } from 'framer-motion';


const EmptyState = ({ title, description, useResetButton, handleClearFilter, icon: Icon }) => {
  return (
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="col-span-full flex flex-col items-center justify-center p-10 bg-gray-50 rounded-xl border border-dashed border-gray-200"
      >
        <Icon className="w-12 h-12 text-red-600 mb-4" />
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {title}
        </h3>
        <p className="text-sm text-gray-600 text-center max-w-xl">
          {description}
        </p>

        {
          useResetButton && (
            <button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-4 py-2 rounded-lg shadow-xl transition-all duration-300 mt-3" onClick={handleClearFilter}>
              Reset Filter
            </button>
          )
        }
      </motion.div>
  );
}

export default EmptyState;
