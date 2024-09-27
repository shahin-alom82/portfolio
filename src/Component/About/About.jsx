import { FaArrowAltCircleRight } from "react-icons/fa";
import Container from "../Container/Container";
import SectionTitle from "../SectionTitle/SectionTitle";


const About = () => {
      return (
            <div>
                  <Container id="about" className="py-20 lg:px-20">
                        <SectionTitle titleNo={"01 ."} title={"About me"}></SectionTitle>
                        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start">
                              <div className="lg:w-2/3 w-full">

                                    <h1 className="mt-5 text-[18px] text-darkText">
                                          I am a Junior Frontend Developer with a strong foundation in HTML, CSS, and React.js. I specialize in creating interactive and user-friendly web applications, and I'm currently expanding my skills in Next.js and TypeScript. Passionate about seamless user experiences and web performance, I use Tailwind CSS for responsive design and integrate various libraries to enhance functionality. I stay updated with industry trends to deliver modern, cutting-edge solutions.
                                    </h1>
                                    <h1 className="mt-5 text-[18px] text-darkText">
                                          Fast-forward to today, and I had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio rem accusantium fugiat veritatis, quidem repellat ab natus possimus? Sint, accusamus!
                                    </h1>

                                    <div className="mt-10 flex flex-col lg:flex-row gap-24 text-[16px]">
                                          <div className="space-y-2">
                                                <div className="flex gap-2 items-center">
                                                      <FaArrowAltCircleRight className="text-designColor" />
                                                      <a href="" className="hover:text-lightText text-darkText">JavaScript (ES6+)</a>
                                                </div>
                                                <div className="flex gap-2 items-center">
                                                      <FaArrowAltCircleRight className="text-designColor" />
                                                      <a href="" className="hover:text-lightText text-darkText">React js</a>
                                                </div>
                                                <div className="flex gap-2 items-center">
                                                      <FaArrowAltCircleRight className="text-designColor" />
                                                      <a href="" className="hover:text-lightText text-darkText">JavaScript (ES6+)</a>
                                                </div>
                                                <div className="flex gap-2 items-center">
                                                      <FaArrowAltCircleRight className="text-designColor" />
                                                      <a href="" className="hover:text-lightText text-darkText">MongoDB</a>
                                                </div>
                                          </div>

                                          <div className="space-y-3">
                                                <div className="flex gap-2 items-center">
                                                      <FaArrowAltCircleRight className="text-designColor" />
                                                      <a href="" className="hover:text-lightText text-darkText">Next js</a>
                                                </div>
                                                <div className="flex gap-2 items-center">
                                                      <FaArrowAltCircleRight className="text-designColor" />
                                                      <a href="" className="hover:text-lightText text-darkText">Node js</a>
                                                </div>
                                                <div className="flex gap-2 items-center">
                                                      <FaArrowAltCircleRight className="text-designColor" />
                                                      <a href="" className="hover:text-lightText text-darkText">Express js</a>
                                                </div>
                                                <div className="flex gap-2 items-center">
                                                      <FaArrowAltCircleRight className="text-designColor" />
                                                      <a href="" className="hover:text-lightText text-darkText">TailwindCSS</a>
                                                </div>
                                          </div>
                                    </div>
                              </div>

                              <div className="mt-10 lg:mt-0 ">
                                    <img className="lg:h-[400px] bg-white border-4 hover:bg-cyan-300 w-[300px] hover:backdrop-hue-rotate-30 duration-300 hover:border-8 hover:shadow-xl hover:shadow-designColor border-designColor rounded-full" src="https://i.ibb.co/y5hLCHT/448803900-991780162595052-2271124324976378812-n-removebg-preview.png" alt="" />
                              </div>

                        </div>
                  </Container>
            </div>
      );
};

export default About;
