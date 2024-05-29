import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { height: 'auto', opacity: 1 },
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-r from-blue-600 to-indigo-700 shadow-lg text-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <p className="text-2xl font-bold text-gray-100 hover:text-white transition duration-300 cursor-pointer">
                My Portfolio
              </p>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-24">
            <div className="flex items-center gap-x-12">
              <Link href="#about">
                <p className="text-gray-200 hover:text-white gradient-underline transition duration-300 cursor-pointer">
                  About
                </p>
              </Link>
              <Link href="#capolavoro">
                <p className="text-gray-200 hover:text-white gradient-underline transition duration-300 cursor-pointer">
                  Capolavoro
                </p>
              </Link>
              <Link href="#projects">
                <p className="text-gray-200 hover:text-white gradient-underline transition duration-300 cursor-pointer">
                  Progetti
                </p>
              </Link>
            </div>
            <div className="flex items-center justify-center">
              <Link href="#capolavoro">
                <motion.p
                  className="bg-sky-500 hover:bg-pink-400 hover:scale-110 transition duration-300 text-white font-bold py-2 px-4 text-lg rounded-lg cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  Esplora
                </motion.p>
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <button
              className="text-gray-200 hover:text-white transition duration-300 focus:outline-none"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={menuVariants}
            transition={{ duration: 0.3 }}
            className="md:hidden rounded-lg mt-2 w-full shadow-lg overflow-hidden"
          >
            <Link href="#about">
              <p className="block w-full px-4 py-2 text-gray-200 hover:text-white hover:bg-gradient-to-r hover:from-blue-800 hover:via-blue-700/80 via-40% hover:to-pink-500/50 transition duration-300 cursor-pointer">
                About
              </p>
            </Link>
            <Link href="#capolavoro">
              <p className="block w-full px-4 py-2 text-gray-200 hover:text-white hover:bg-gradient-to-r hover:from-blue-800 hover:via-blue-700/80 via-40% hover:to-pink-500/50 transition duration-300 cursor-pointer">
                Capolavoro
              </p>
            </Link>
            <Link href="#projects">
              <p className="block w-full px-4 py-2 text-gray-200 hover:text-white hover:bg-gradient-to-r hover:from-blue-800 hover:via-blue-700/80 via-40% hover:to-pink-500/50 transition duration-300 cursor-pointer">
                Progetti
              </p>
            </Link>
            <Link href="#capolavoro">
              <motion.p
                className="block w-full px-4 py-2 mt-2 bg-sky-500 hover:bg-pink-400 hover:scale-110 transition duration-300 text-white font-bold text-center rounded-lg cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Esplora
              </motion.p>
            </Link>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
