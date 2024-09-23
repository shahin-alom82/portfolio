

import { motion } from "framer-motion";
import Container from "../Container/Container";
import { Link } from "react-router-dom";
import { img1, img2, img3, img4 } from "../../assets";

const Project = () => {
      const project = [
            {
                  img: img2,
                  title: "E-Commerce-Shofy",
                  tech: ["Next.js", "TypeScript", "Redux", "Next Auth"],
                  liveLink: "https://shofyecommerce.vercel.app/",
                  githubLink: "https://github.com/shahin-alom82/E-Commerce-Shofy",
            },
            {
                  img: img1,
                  title: "E-Commerce-Shopping",
                  tech: ["Next.js", "TypeScript", "Redux", "Next Auth"],
                  liveLink: "https://ecommerceshopping.vercel.app/",
                  githubLink: "https://github.com/shahin-alom82/shopping",
            },
            {
                  img: img3,
                  title: "Summer-Sale",
                  tech: ["React.js", "Mongodb", "Firebase", "Express"],
                  liveLink: "https://shahin-alom82.github.io/Assignment-5/",
                  githubLink:
                        "https://github.com/shahin-alom82/Assignment-5",
            },
            {
                  img: img4,
                  title: "Todo-Application",
                  tech: ["Next.js", "TypeScript", "Redux"],
                  liveLink: "https://todoapplicationapp.vercel.app/",
                  githubLink: "https://github.com/shahin-alom82/todo-practice",
            },
      ];

      return (
            <Container
                  id={"projects"}
                  className="py-16 text-lg lg:px-0"
            >
                  <div className="w-5/6 mx-auto">
                        <div className="text-center my-10 space-y-2">
                              <motion.span className="text-3xl">
                                    VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK
                              </motion.span>
                              <motion.h1 className="text-xl">My Projects</motion.h1>
                        </div>
                        <div className="grid md:grid-cols-4 lg:grid-cols-4 grid-cols-1 lg:ml-0 ml-1 lg:gap-10 gap-4">
                              {project.map((project, index) => (
                                    <motion.div
                                          key={index}
                                          className="flex flex-col w-64 border-4 border-cyan-500 px-3 py-3 shadow-2xl  rounded-lg  bg-[#031E5B] transition duration-500 h-full"
                                    >
                                          <div className="overflow-hidden rounded-t-md h-60">
                                                <motion.img
                                                      src={project.img}
                                                      alt={project.title}
                                                      className="w-full h-80 object-cover object-top rounded-t-2xl hover:scale-125"
                                                      initial={{ y: 0 }}
                                                      whileHover={{ y: -80 }}
                                                      transition={{ duration: 1 }}
                                                />
                                          </div>
                                          <div className="flex-grow mt-4">
                                                <h3 className="text-lg font-bold text-white mb-2">
                                                      {project.title}
                                                </h3>
                                                <ul className="flex text-start flex-wrap text-xs font-medium">
                                                      {project.tech.map((tech, techIndex) => (
                                                            <li
                                                                  key={techIndex}
                                                                  className="bg-slate-950 bg-opacity-45 px-2 py-1 rounded-md m-1 transition-transform transform hover:scale-110 hover:text-designColor"
                                                            >
                                                                  {tech}
                                                            </li>
                                                      ))}
                                                </ul>
                                          </div>
                                          <div className="flex justify-between items-center mt-4 mb-1">
                                                <Link to={project.liveLink}>
                                                      <motion.button
                                                            className="text-white text-sm border-2 border-cyan-500  rounded-full px-3 py-1  hover:bg-slate-900 transition duration-300"
                                                            whileHover={{ scale: 1.1 }}
                                                      >
                                                            Live Link
                                                      </motion.button>
                                                </Link>
                                                <Link to={project.githubLink}>
                                                      <motion.button
                                                            className="text-white border-2 text-sm border-cyan-500  rounded-full px-6 py-1  hover:bg-slate-900 transition duration-300"
                                                            whileHover={{ scale: 1.1 }}
                                                      >
                                                            GitHub
                                                      </motion.button>
                                                </Link>
                                          </div>
                                    </motion.div>
                              ))}
                        </div>
                  </div>
            </Container>
      );
};

export default Project;