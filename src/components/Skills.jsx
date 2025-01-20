import React from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";

const SkillsSection = () => {
  const capabilities = [
    "React.js",
    "Node.js",
    "MongoDB",
    "Express.js",
    "Tailwind CSS",
    "Redux Toolkit State Management",
    "Version Control (GitHub)",
    "Code Linting(ESLint) & Formatting(Prettier)",
    "Wordpress Development",
    "SEO Optimization & Digital Marketing",
    "MVC Architecture",
    "CI/CD Development",
    "RESTful API Development",
    "JWT Authentication & Security",
    "Responsive Web Design",
    "Agile Development",
    "Firebase Hosting & Real-Time Database",
    "Performance Optimization",
    "Problem Solving & Debugging",
    "Scalable Web Architecture",
    "Code Refactoring & Maintenance",
  ];

  return (
    <div
      id="capabilities"
      className="bg-blue-50 w-full flex lg:h-[770px] h-[240px] lg:rounded-3xl rounded-md lg:mb-8 mb-3"
    >
      <section className="flex flex-col lg:gap-1 gap-0.5 w-1/2 h-full lg:p-2 p-0.5">
        <div className="flex-1 bg-[#000336] lg:rounded-3xl rounded-md font-semibold relative">
          <div className="absolute inset-10 flex items-center justify-center lg:w-auto lg:h-auto w-full h-full">
            <div className="aspect-square w-[90%] right-10 -top-10 lg:top-auto lg:right-auto lg:w-[90%] bg-no-repeat bg-cover bg-center relative  rounded-full bg-[url('/tree-1.png')]"></div>
          </div>
          <h3 className="absolute lg:left-5 left-0 lg:top-5 top-0 text-white text-[7px] lg:text-2xl tracking-wide p-3 font-Poppins">
            Great web development isn't
            <br /> just about code
          </h3>
          <h3 className="absolute lg:right-5 right-0 lg:bottom-5 bottom-0 text-white text-[6.5px] tracking-tighter lg:text-2xl p-3 font-Poppins lg:tracking-wide">
            it's about creating seamless experiences <br />
            where the front-end and back-end <br /> work in perfect harmony.
          </h3>
        </div>
        <div className="h-1/5 bg-white lg:rounded-3xl rounded-md flex items-center justify-between lg:p-5 p-2 lg:mt-2 mt-0.5">
          <h2 className="lg:text-5xl text-xs font-bold">Project</h2>
          <IoIosArrowDropdownCircle
            size={60}
            className="text-dark_primary hidden lg:block"
          />
          <IoIosArrowDropdownCircle
            size={30}
            className="text-dark_primary lg:hidden"
          />
        </div>
      </section>
      <section className="h-full w-1/2 rounded-3xl lg:p-2 p-0.5">
        <div className="bg-white h-full w-full rounded-md lg:rounded-3xl">
          <section className="flex justify-between items-center lg:p-5 p-2">
            {" "}
            <h2 className="lg:text-5xl text-xs font-bold">Capabilities</h2>
            <h3 className="lg:text-xs text-[3px] relative -right-1 lg:right-auto lg:top-auto lg:tracking-normal text-right text-dark_primary whitespace-nowrap">
              Skilled in building sleek React interfaces{" "}
              <h3 className="lg:text-xs text-[3px] lg:tracking-normal mt-0.5 text-right text-dark_primary">
                & fast, efficient RESTful APIs with Node and Express.
              </h3>
            </h3>
          </section>
          <div className="bg-blue-100 lg:rounded-3xl rounded-md lg:p-6 p-1 w-full">
            <div className="flex flex-wrap lg:gap-4 gap-[4px] w-full lg:h-[620px] h-[195px]">
              {capabilities.map((capability, index) => (
                <p
                  key={index}
                  className="bg-[#7C93C3] my-[1px] lg:my-0 shadow-neumorph-soft text-dark_primary lg:px-4 lg:py-2.5 px-1 py-1 rounded-[4px] lg:rounded-2xl flex items-center justify-center text-[4px] lg:text-base font-medium whitespace-nowrap"
                >
                  {capability}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SkillsSection;
