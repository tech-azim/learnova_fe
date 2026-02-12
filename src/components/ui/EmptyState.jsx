import * as React from "react";
import { motion } from 'framer-motion';


const EmptyState = ({ sectionName, icon: Icon }) => {
  return (
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="col-span-full flex flex-col items-center justify-center p-10 bg-gray-50 rounded-xl border border-dashed border-gray-200"
      >
        <Icon className="w-12 h-12 text-red-600 mb-4" />
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Belum ada {sectionName}
        </h3>
        <p className="text-sm text-gray-600 text-center max-w-xl">
          Saat ini belum ada {sectionName} yang tersedia. Silakan cek kembali
          nanti atau hubungi kami untuk informasi lebih lanjut.
        </p>
      </motion.div>
  );
}

export default EmptyState;
