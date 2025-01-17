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
    "Wordpress Development",
    "SEO Optimization & Digital Marketing",
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
    <div className="bg-blue-50 w-full flex h-[770px] rounded-3xl mb-8">
      <section className="flex flex-col gap-1 w-1/2 h-full p-2 ">
        <div className="flex-1 bg-[#000336] rounded-3xl font-semibold relative">
          <div className="absolute inset-10 flex items-center justify-center">
            <div className="aspect-square w-[90%] bg-no-repeat bg-cover bg-center relative  rounded-full bg-[url('./tree-1.png')]"></div>
          </div>
          <h3 className="absolute left-5 top-5 text-white text-2xl tracking-wide p-3 font-Poppins">
            Great web development isn't
            <br /> just about code
          </h3>
          <h3 className="absolute right-5 bottom-5 text-white text-2xl p-3 font-Poppins tracking-wide">
            it's about creating seamless experiences <br />
            where the front-end and back-end <br /> work in perfect harmony.
          </h3>
        </div>
        <div className="h-1/5 bg-white rounded-3xl flex items-center justify-between p-5 mt-2">
          <h2>Project</h2>
          <IoIosArrowDropdownCircle size={60} className="text-dark_primary" />
        </div>
      </section>
      <section className="h-full w-1/2 rounded-3xl p-2">
        <div className="bg-white h-full w-full rounded-3xl">
          <section className="flex justify-between items-center p-5">
            {" "}
            <h2>Capabilities</h2>
            <h3 className="text-xs text-right text-dark_primary">
              Skilled in building sleek React interfaces <br />& fast, efficient
              RESTful APIs with Node and Express.
            </h3>
          </section>
          <div class="bg-blue-100 rounded-3xl p-6 w-full h-fit">
            <div class="flex flex-wrap gap-4 w-full h-[620px]">
              {capabilities.map((capability, index) => (
                <p
                  key={index}
                  className="bg-[#7C93C3] shadow-neumorph-soft text-dark_primary px-4 py-2 rounded-3xl flex items-center justify-center text-base font-medium whitespace-nowrap"
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
