import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const MainProduct = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2, // Start animation when 20% of the component is in view
  });

  return (
    <div
      ref={ref}
      className="relative flex flex-col items-center justify-center w-full min-h-80 sm:h-screen p-4 bg-gradient-to-r from-blue-500 to-indigo-700 text-gray-900"
      id="capolavoro"
    >
      <motion.div
        className="relative w-full mb-4 flex flex-col items-center"
        initial={{ opacity: 0, y: -50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl text-center bg-blue-900/80 rounded-lg px-4 py-2 text-gray-100 font-semibold shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Presentando il <span className="text-shade font-bold underline">capolavoro</span> definitivo
        </motion.h1>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-800 opacity-50 rounded-lg blur-lg"></div>
      </motion.div>
      <motion.div
        className="w-11/12 sm:w-9/12 lg:w-7/12 min-h-60 h-full p-4 bg-blue-900/80 rounded-lg shadow-lg flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <motion.div
          className="w-full h-52 sm:h-full bg-gray-800 rounded-lg flex items-center justify-center flex-col"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <p className="text-gray-100 text-2xl">[Video Placeholder]</p>
          <p className="text-gray-400 mt-5 text-xl font-semibold">*Coming Soon*</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default MainProduct;
