import { IoIosArrowDropdownCircle } from "react-icons/io";

const SkillsSection = () => {
  const capabilities = [
    "React.js",
    "Node.js",
    "MongoDB",
    "Express.js",
    "Tailwind CSS",
    "Redux Toolkit",
    "GitHub",
    "ESLint & Prettier",
    "Wordpress",
    "SEO & Marketing",
    "MVC Architecture",
    "CI/CD",
    "REST APIs",
    "JWT Auth",
    "Responsive Design",
    "Agile",
    "Firebase",
    "Performance",
    "Debugging",
    "Scalable Architecture",
  ];

  return (
    <div id="capabilities" className="w-full lg:rounded-3xl rounded-2xl lg:mb-8 mb-4">
      {/* Mobile & Tablet Layout */}
      <div className="block lg:hidden">
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
          {/* Quote Section with Background Image */}
          <div 
            className="p-5 sm:p-6 md:p-8 relative overflow-hidden"
            style={{ 
              backgroundImage: "url('/tree-1.png')",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          >
            <div className="absolute inset-0 bg-[#000336]/90" />
            <div className="relative z-10">
              <p className="text-white text-base sm:text-lg md:text-xl leading-relaxed mb-4">
                "Great web development isn't just about code—
              </p>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                it's about creating seamless experiences where the front-end and back-end work in perfect harmony."
              </p>
            </div>
          </div>

          {/* Header */}
          <div className="p-5 sm:p-6 md:p-8">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-dark_primary font-Poppins">
                Capabilities
              </h2>
              <a href="#projects">
                <IoIosArrowDropdownCircle className="text-dark_primary text-2xl sm:text-3xl" />
              </a>
            </div>
            <p className="text-xs sm:text-sm text-dark_primary/60">
              Building React interfaces & RESTful APIs
            </p>
          </div>

          {/* Skills Grid - Neumorphic */}
          <div className="bg-blue-100 p-5 sm:p-6 md:p-8">
            <div className="flex flex-wrap gap-2 sm:gap-2.5">
              {capabilities.map((capability, index) => (
                <span
                  key={index}
                  className="bg-[#7C93C3] shadow-neumorph-soft text-dark_primary px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium"
                >
                  {capability}
                </span>
              ))}
            </div>
          </div>

          {/* Projects Link */}
          <div className="p-5 sm:p-6 md:p-8">
            <a href="#projects" className="flex items-center justify-between">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-dark_primary font-Poppins">
                Projects
              </h2>
              <IoIosArrowDropdownCircle className="text-dark_primary text-2xl sm:text-3xl" />
            </a>
          </div>
        </div>
      </div>

      {/* Desktop Layout - Unchanged */}
      <div className="hidden lg:flex bg-blue-50 w-full h-[770px] rounded-3xl">
        <section className="flex flex-col gap-1 w-1/2 h-full p-2">
          <div className="flex-1 bg-[#000336] rounded-3xl font-semibold relative">
            <div className="absolute inset-10 flex items-center justify-center">
              <div className="aspect-square w-[90%] 2xl:w-[60%] bg-no-repeat bg-cover bg-center rounded-full bg-[url('/tree-1.png')]"></div>
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
            <h2 className="text-5xl font-bold">Project</h2>
            <IoIosArrowDropdownCircle size={60} className="text-dark_primary" />
          </div>
        </section>
        <section className="h-full w-1/2 rounded-3xl p-2">
          <div className="bg-white h-full w-full rounded-3xl">
            <section className="flex justify-between items-center p-5">
              <h2 className="text-5xl font-bold">Capabilities</h2>
              <h3 className="text-xs text-right text-dark_primary whitespace-nowrap">
                Skilled in building sleek React interfaces
                <span className="text-xs tracking-normal mt-0.5 text-right text-dark_primary block">
                  & fast, efficient RESTful APIs with Node and Express.
                </span>
              </h3>
            </section>
            <div className="bg-blue-100 rounded-3xl p-6 w-full">
              <div className="flex flex-wrap lg:gap-3 2xl:gap-4  w-full h-[620px]">
                {[
                  "React.js", "Node.js", "MongoDB", "Express.js", "Tailwind CSS",
                  "Redux Toolkit State Management", "Version Control (GitHub)",
                  "Code Linting(ESLint) & Formatting(Prettier)", "Typescript",
                  "SEO Optimization", "Next.js","Prisma",
                  "CI/CD Development", "Kafka",
                  "JWT Authentication & Security", "Responsive Web Design",
                  "Agile Development", "Firebase Hosting & Real-Time Database",
                  "Performance Optimization", "tRPC", 'Turborepo',
                  "Scalable Web Architecture", "System Design",
                ].map((capability, index) => (
                  <p
                    key={index}
                    className="bg-[#7C93C3] shadow-neumorph-soft text-dark_primary px-4 py-2.5 rounded-2xl flex items-center justify-center text-xs xl:text-base font-medium whitespace-nowrap"
                  >
                    {capability}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SkillsSection;
