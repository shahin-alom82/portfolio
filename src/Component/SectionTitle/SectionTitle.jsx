
const SectionTitle = ({ title, titleNo }) => {
      return (
            <div>

                  <h1 className="lg:text-[20px] text-[14px] md:text-[20px] font-medium flex items-center uppercase mt-16">
                        <span className="text-sm md:text-lg text-designColor mr-3 ">{titleNo}</span> {title}
                  </h1>

            </div>
      );
};

export default SectionTitle;