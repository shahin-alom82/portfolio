import Container from "../Container/Container";

const Education = () => {
      return (
            <Container id={"education"} className="lg:p-0 p-5 mt-28 lg:px-20 md:px-32 max-w-screen-md">
                  <div>
                        <div className="text-center">
                              <h1 className="lg:text-5xl text-3xl font-semibold">Education</h1>
                              <p className="text-xl text-darkText mt-6">My education has been a journey of self-discovery and growth. My <br /> educational details are as follows.</p>

                              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                                    {/* Collage Cart */}
                                    <div
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          style={{
                                                minWidth: "18rem",
                                                maxWidth: "100%",
                                                textDecoration: "none",
                                                color: "inherit",
                                          }}
                                          className="py-4 px-4 mt-10 cursor-pointer block rounded-lg bg-[#112240] border border-l-8 border-designColor duration-700 text-white shadow-xl transition-transform transform  hover:shadow-2xl w-80">
                                          <div>
                                                <img className="lg:h-40 w-full md:w-auto rounded-sm" src="https://i.ibb.co/0c6tDNX/download.jpg" alt="" />
                                                <div className="text-start">
                                                      <h1 className="text-[19px] mt-4 font-medium text-gray-300">Habiganj Polytechnic Institute</h1>
                                                      <h1 className="text-darkText mt-2">Diploma in Engineering - Computer Science and Technology</h1>
                                                      <p className="text-darkText mt-2">Sep 2020 - Oct 2024</p>
                                                </div>
                                                <h1 className="text-start mt-2 text-darkText">Grade : Not Published Yet</h1>
                                          </div>
                                          {/* <div className="text-start mt-2 text-darkText">
                                               
                                                <p className="mt-2">I have completed a Diploma in Computer Science & Engineering from Habiganj Polytechnic Institute, covering key subjects like Data Structures, Algorithms, OOP, DBMS, Operating Systems, and Computer Networks.</p>
                                          </div> */}
                                    </div>
                                    {/* School Cart */}
                                    <div
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          style={{
                                                minWidth: "18rem",
                                                maxWidth: "100%",
                                                textDecoration: "none",
                                                color: "inherit",
                                          }}
                                          className="py-4 px-4 mt-10 cursor-pointer block rounded-lg bg-[#112240] w-80 text-white shadow-xl duration-700 transition-transform transform  hover:shadow-2xl border border-designColor border-l-8">
                                          <div>
                                                <img className="lg:h-40 w-full md:w-auto rounded-sm" src="https://i.ibb.co/R7xfFm2/450441890-1025728021781977-5809504526320617517-n.jpg" alt="" />
                                                <div className="text-start">
                                                      <h1 className="text-[18px] font-medium  text-gray-300 mt-4">Assim High School</h1>
                                                      <h1 className="text-darkText mt-2">SSC - General Electrical</h1>
                                                      <p className="text-darkText mt-1">Jan 2015 - March 2020</p>
                                                </div>
                                          </div>
                                          <div className="text-start mt-1 text-darkText">
                                                <h1>Grade : 4.68 out of 5</h1>
                                                <p className="mt-1">I completed my class 10 high school education at Assim High School, where I studied technical with Electrical.</p>
                                          </div>
                                    </div>
                              </div>
                        </div>

                  </div>
            </Container>
      );
};

export default Education;