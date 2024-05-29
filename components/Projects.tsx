import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import Link from 'next/link';

const Projects = () => {
  const projects = [
    {
      name: 'Ommaggioscience website',
      description: 'Work in progress',
      image: 'https://picsum.photos/200/300?random=1',
      left: true,
    },
    {
      name: 'Teatro',
      description: 'Description for test project 2.',
      image: 'https://picsum.photos/200/300?random=2',
      left: false,
    },
    {
      name: 'Nuoto',
      description: 'Description for test project 3.',
      image: 'https://picsum.photos/200/300?random=3',
      left: true,
    },
    {
      name: 'Musica',
      description: 'Description for test project 4.',
      image: 'https://picsum.photos/200/300?random=4',
      left: false,
    },
    {
      name: 'Animatore (?)',
      description: 'Description for test project 4.',
      image: 'https://picsum.photos/200/300?random=5',
      left: true,
    },
  ];

  const slideInVariants = {
    hidden: (isLeft: boolean) => ({
      x: isLeft ? -150 : 150,
      opacity: 0,
    }),
    visible: (index: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        delay: index * 0.2,
      },
    }),
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.7, delay: 0.5 },
    },
  };

  const textVariants = (delay: number) => ({
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, delay },
    },
  });

  const hoverEffect = {
    scale: 1.01,
    boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.3)',
    transition: { duration: 0.2 },
  };

  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const showText = (index: number) => {
    setHoveredCard(index);
  };

  const hideText = () => {
    setHoveredCard(null);
  };

  return (
    <div className="w-full sm:w-7/12 p-2 py-4" id="projects">
      <table className="w-full h-full">
        <tbody>
          {projects.map((project, index) => {
            const { ref, inView } = useInView({
              triggerOnce: true,
              threshold: 0.5,
            });

            return (
              <tr key={index} ref={ref}>
                <td className="border-r w-1/2">
                  <motion.div
                    className={`min-h-40 sm:min-h-52 project-card relative shadow-lg rounded-r-none ml-0 flex w-full sm:p-4 m-2 bg-slate-800 rounded-lg ${!project.left && 'hidden'}`}
                    custom={project.left}
                    initial="hidden"
                    animate={inView ? { ...slideInVariants.visible(index) } : "hidden"}
                    variants={slideInVariants}
                    whileHover={hoverEffect}
                    onMouseEnter={() => showText(index)}
                    onMouseLeave={hideText}
                    onTouchStart={() => showText(index)}
                    // onTouchEnd={hideText}
                  >
                    <div className="absolute w-full h-full z-0">
                      <div className="w-full h-full relative project-card"></div>
                    </div>
                    <div className="absolute w-full h-full z-10 sm:bg-transparent bg-slate-800"></div>
                    <motion.div
                      className="sm:relative sm:w-1/3 sm:p-2"
                      variants={imageVariants}
                      initial="hidden"
                      animate={inView ? "visible" : "hidden"}
                    >
                      <Image src={project.image} alt={project.name} layout="fill" objectFit="cover" className="rounded-lg shadow-md z-10" />
                    </motion.div>
                    <motion.div
                      className={` w-2/3 text-center flex flex-col items-center justify-center space-y-4 sm:z-20 ${hoveredCard === index ? 'z-20 w-full sm:w-2/3  bg-opacity-80 bg-black sm:bg-opacity-100 sm:bg-transparent rounded-lg' : ''}`}
                      initial="hidden"
                      animate={inView ? "visible" : "hidden"}
                    >
                      <motion.p className="text-lg font-bold text-white" variants={textVariants(0.7)}>
                        {project.name}
                      </motion.p>
                      <motion.p className="text-sm text-gray-400" variants={textVariants(0.9)}>
                        {project.description}
                      </motion.p>
                      <div className="flex items-center justify-center">
                        <Link href="#cta">
                          <motion.p
                            className="bg-sky-500 hover:bg-pink-400 hover:scale-110 transition duration-300 text-white font-bold py-2 px-4 text-lg rounded-lg cursor-pointer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            Più info
                          </motion.p>
                        </Link>
                      </div>
                    </motion.div>
                  </motion.div>
                </td>
                <td className="border-l w-1/2">
                  <motion.div
                    className={`min-h-40 sm:min-h-52 project-card relative shadow-lg rounded-l-none ml-0 flex w-full sm:p-4 m-2 bg-slate-800 rounded-lg ${project.left && 'hidden'}`}
                    custom={!project.left}
                    initial="hidden"
                    animate={inView ? { ...slideInVariants.visible(index) } : "hidden"}
                    variants={slideInVariants}
                    whileHover={hoverEffect}
                    onMouseEnter={() => showText(index)}
                    onMouseLeave={hideText}
                    onTouchStart={() => showText(index)}
                    // onTouchEnd={hideText}
                  >
                    <div className="absolute w-full h-full z-0 sm:hidden">
                      <div className="w-full h-full relative project-card"></div>
                    </div>
                    <div className="absolute w-full h-full sm:hidden z-10 sm:bg-transparent bg-slate-800"></div>
                    <motion.div
                      className="sm:relative sm:w-1/3 sm:p-2"
                      variants={imageVariants}
                      initial="hidden"
                      animate={inView ? "visible" : "hidden"}
                    >
                      <Image src={project.image} alt={project.name} layout="fill" objectFit="cover" className="rounded-lg shadow-md z-10" />
                    </motion.div>
                    <motion.div
                      className={`w-2/3 text-center flex flex-col items-center justify-center space-y-4 sm:z-20 ${hoveredCard === index ? 'z-20 w-full sm:w-2/3 bg-opacity-80 bg-black sm:bg-opacity-100 sm:bg-transparent rounded-lg' : ''}`}
                      initial="hidden"
                      animate={inView ? "visible" : "hidden"}
                    >
                      <motion.p className="text-lg font-bold text-white" variants={textVariants(0.7)}>
                        {project.name}
                      </motion.p>
                      <motion.p className="text-sm text-gray-400" variants={textVariants(0.9)}>
                        {project.description}
                      </motion.p>
                      <div className="flex items-center justify-center">
                        <Link href="#cta">
                          <motion.p
                            className="bg-sky-500 hover:bg-pink-400 hover:scale-110 transition duration-300 text-white font-bold py-2 px-4 text-lg rounded-lg cursor-pointer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            Più info
                          </motion.p>
                        </Link>
                      </div>
                    </motion.div>
                  </motion.div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Projects;
