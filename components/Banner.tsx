import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Banner = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="relative px-4 pd-10 h-screen w-full" id="about">
      <div className="z-10 w-full h-full flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-5xl font-bold text-center text-white mb-10"
        >
          Benvenuti nel <span className="text-shade">Capolavoro</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="flex items-center justify-center"
        >
          <Link href="#capolavoro" passHref>
            <button
              className="btn-hover bg-sky-500 hover:bg-pink-400 hover:scale-110 transition duration-300 text-white font-bold py-4 px-8 text-2xl rounded-lg"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Esplora
            </button>
          </Link>
        </motion.div>

      </div>
      <div className="absolute -z-10 inset-0 bg-img"></div>
    </div>
  );
};

export default Banner;
