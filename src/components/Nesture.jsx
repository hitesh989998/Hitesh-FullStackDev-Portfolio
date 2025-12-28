import { FaGithubSquare } from "react-icons/fa";
import { SiFirebase } from "react-icons/si";
import { SiCoronarenderer } from "react-icons/si";

const technologies = [
  "React.js",
  "Node.js",
  "MongoDB",
  "Express.js",
  "Stripe",
  "React Recharts",
  "Redux",
  "REST APIs",
  "React Helmet",
  "JWT Authentication",
  "Bcrypt",
  "Multer",
  "Tailwind CSS",
];

const mobileImages = [
  { src: "./home.png", alt: "Homepage", title: "Beautiful UI" },
  { src: "./admin.png", alt: "Admin Dashboard", title: "Admin Panel" },
  { src: "./user.png", alt: "User Dashboard", title: "User Portal" },
  { src: "./stripe.png", alt: "Stripe Integration", title: "Payments" },
  { src: "./login.png", alt: "Login Page", title: "JWT Auth" },
  { src: "./singlepage.png", alt: "Single Page", title: "Redux State" },
];

const Nesture = () => {
  return (
    <>
      {/* DESKTOP VIEW - Unchanged */}
      <main
        className="hidden lg:flex flex-col bg-dark_primary w-full lg:h-[825px] lg:rounded-3xl lg:mb-8"
        id="projects"
      >
        <section className="flex flex-col w-full lg:p-4">
          <div className="flex justify-between items-center">
            <h1 className="tracking-wide text-white lg:text-6xl font-extrabold">
              Nesture
            </h1>

            <div
              className="flex flex-col items-center justify-center text-white cursor-pointer"
              onClick={() =>
                window.open("https://github.com/hitesh989998/nesture", "_blank")
              }
            >
              <div className="group hover:text-blue-900 flex flex-col items-center justify-center">
                <FaGithubSquare className="lg:text-6xl group-hover:text-blue-900" />
                <p className="lg:text-sm group-hover:text-blue-900 text-white">
                  Github
                </p>
              </div>
            </div>
          </div>

          <div className="flex space-x-4 lg:my-4">
            <div className="group" title="Hosted On Firebase">
              <button
                className="flex items-center lg:text-sm underline text-white group-hover:text-blue-900"
                onClick={() => window.open("https://nesture.web.app", "_blank")}
              >
                View Website
                <SiFirebase className="lg:ml-2 text-white group-hover:text-blue-900" />
              </button>
            </div>
            <div className="group" title="Hosted On Render">
              <button
                className="flex items-center lg:text-sm group-hover:text-blue-900 underline text-white hover:text-blue-900"
                onClick={() =>
                  window.open("https://nesture.onrender.com", "_blank")
                }
              >
                Backend Server
                <SiCoronarenderer className="lg:ml-2 text-white group-hover:text-blue-900" />
              </button>
            </div>
          </div>

          <p className="lg:text-xs text-white tracking-wide">
            Nesture is a full-featured e-commerce platform built with the MERN
            stack for speed, scalability, and security. Featuring user and admin
            dashboards, it utilizes Redux Toolkit for state management and REST
            APIs for smooth data flow. Key integrations include Stripe for
            secure payments, JWT for authentication, and Bcrypt for data
            protection. Advanced tools like React Recharts enhance data
            visualization, while Multer ensures efficient file handling. <br />{" "}
            <br /> Developed by Hitesh Lalwani, Nesture combines technologies
            like React.js, Node.js, MongoDB, and Express.js to deliver a fast,
            secure, and reliable e-commerce experience where every component
            works like clockwork.
          </p>

          <hr className="w-full lg:my-4" />

          <div className="flex flex-wrap lg:gap-2 lg:-top-2 relative">
            {technologies.map((tech, index) => (
              <p
                key={index}
                className="lg:text-xs lg:px-4 lg:py-3 rounded-md lg:mx-0.5 shadow-dark lg:rounded-lg text-white relative"
              >
                {tech}
              </p>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-3 grid-rows-[1fr,1fr] lg:gap-2 h-full w-full">
          <div className="col-span-1 row-span-1 group cursor-pointer">
            <div className="relative lg:rounded-r-3xl h-full isolate">
              <img
                src="./home.png"
                alt="Project 1"
                className="w-full h-full object-cover lg:rounded-r-3xl"
              />
              <div className="absolute -inset-0.5 bg-black bg-opacity-0 group-hover:bg-opacity-90 transition-all duration-300 flex items-end justify-start p-4 lg:rounded-r-3xl">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-left">
                  <h3 className="lg:text-base text-blue-500">
                    Beautiful UI, blending Glassmorphism & Minimalism
                  </h3>
                  <p className="lg:text-xs lg:tracking-normal text-white">
                    Nesture combines the elegance of glassmorphism with the
                    simplicity of minimalism to create a visually stunning
                    interface.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-1 row-span-1 group cursor-pointer">
            <div className="relative lg:rounded-3xl h-full isolate">
              <img
                src="./admin.png"
                alt="Project 2"
                className="w-full h-full object-cover lg:rounded-3xl"
              />
              <div className="absolute -inset-0.5 bg-black bg-opacity-0 group-hover:bg-opacity-90 transition-all duration-300 flex items-end justify-center p-4 lg:rounded-3xl">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-left">
                  <h3 className="lg:text-base text-blue-500">
                    Powerful Admin Dashboard with CRUD Operations
                  </h3>
                  <p className="lg:text-xs lg:tracking-normal text-white">
                    Admin dashboard offers seamless CRUD operations, powered by
                    real-time data from backend using Recharts.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-1 row-span-1 group cursor-pointer">
            <div className="relative lg:rounded-l-3xl h-full isolate">
              <img
                src="./user.png"
                alt="Project 3"
                className="w-full h-full object-cover lg:rounded-l-3xl"
              />
              <div className="absolute -inset-0.5 bg-black bg-opacity-0 group-hover:bg-opacity-90 transition-all duration-300 flex items-end justify-center p-4 lg:rounded-l-3xl">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-left">
                  <h3 className="lg:text-base text-blue-500">
                    Customer Dashboard with Real-Time Insights
                  </h3>
                  <p className="lg:text-xs lg:tracking-normal text-white">
                    The customer-facing dashboard offers a sleek, modern design,
                    enhanced with Recharts to display user data.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-1 row-span-1 group lg:h-[213px] cursor-pointer">
            <div className="relative lg:rounded-tr-3xl lg:rounded-b-none h-full isolate">
              <img
                src="./stripe.png"
                alt="Project 4"
                className="w-full h-full object-cover lg:rounded-tr-3xl lg:rounded-b-none"
              />
              <div className="absolute -inset-0.5 bg-black bg-opacity-0 group-hover:bg-opacity-90 transition-all duration-300 flex items-end justify-center p-4 lg:rounded-tr-3xl lg:rounded-b-none">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-left">
                  <h3 className="lg:text-base text-blue-500">
                    Advanced Payment Integration with Stripe
                  </h3>
                  <p className="lg:text-xs lg:tracking-normal text-white">
                    Nesture integrates Stripe to provide a seamless and secure
                    payment experience.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-1 row-span-1 group lg:h-[213px] cursor-pointer">
            <div className="relative lg:rounded-t-3xl h-full isolate">
              <img
                src="./login.png"
                alt="Project 5"
                className="w-full h-full object-cover lg:rounded-t-3xl"
              />
              <div className="absolute -inset-0.5 bg-black bg-opacity-0 group-hover:bg-opacity-90 transition-all duration-300 flex items-end justify-center p-4 lg:rounded-t-3xl">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-left">
                  <h3 className="lg:text-base text-blue-500">
                    Secure User Authentication with JWT and Bcrypt
                  </h3>
                  <p className="lg:text-xs lg:tracking-normal text-white">
                    Multi-step form for smooth user authentication with JWT and
                    Bcrypt password hashing.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-1 row-span-1 group lg:h-[213px] cursor-pointer">
            <div className="relative lg:rounded-l-3xl lg:rounded-b-none h-full isolate">
              <img
                src="./singlepage.png"
                alt="Project 6"
                className="w-full h-full object-cover lg:rounded-l-3xl lg:rounded-b-none"
              />
              <div className="absolute -inset-0.5 bg-black bg-opacity-0 group-hover:bg-opacity-90 transition-all duration-300 flex items-end justify-center p-4 lg:rounded-l-3xl lg:rounded-b-none">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-left">
                  <h3 className="lg:text-base text-blue-500">
                    Scalable State Management with Redux Toolkit
                  </h3>
                  <p className="lg:text-xs lg:tracking-normal text-white">
                    Redux Toolkit for unified state management across the entire
                    platform.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* DESKTOP Secondary Section - Unchanged */}
      <section className="hidden lg:flex flex-col bg-dark_primary lg:mt-10 w-full lg:h-[825px] lg:rounded-3xl lg:mb-8 lg:p-4">
        <div className="grid grid-cols-[2.5fr_2.5fr_1fr_1fr] grid-rows-[2.5fr_2.5fr_1fr_1fr] h-full w-full lg:gap-2">
          <div className="col-span-2 row-span-3 group h-full cursor-pointer">
            <div className="relative lg:rounded-3xl h-full isolate">
              <img
                src="./megamenu.png"
                alt="Mega Menu"
                className="w-full h-full object-cover lg:rounded-3xl"
              />
              <div className="absolute -inset-0.5 bg-black bg-opacity-0 group-hover:bg-opacity-90 transition-all duration-300 flex items-end justify-center p-4 lg:rounded-3xl">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-left">
                  <h3 className="lg:text-base text-blue-500">
                    Streamlined Design with Tailwind CSS
                  </h3>
                  <p className="lg:text-xs lg:tracking-normal text-white">
                    Nesture uses Tailwind CSS to create stunning layouts from
                    scratch with speed and precision.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-2 row-span-4 group h-full cursor-pointer">
            <div className="relative lg:rounded-3xl h-full isolate">
              <img
                src="./phone.png"
                alt="Mobile View"
                className="w-full h-full lg:object-contain lg:rounded-3xl"
              />
              <div className="absolute lg:inset-5 lg:-my-5 bg-black bg-opacity-0 group-hover:bg-opacity-90 transition-all duration-300 flex items-end justify-center p-4 rounded-3xl">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-left">
                  <h3 className="lg:text-base text-blue-500">
                    Responsive design that looks best everywhere.
                  </h3>
                  <p className="lg:text-xs lg:tracking-normal text-white">
                    Nesture ensures a flawless user experience across all
                    devices, adapting seamlessly to different screen sizes.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-1 row-span-1 group h-full">
            <div className="relative lg:rounded-3xl h-full bg-slate-900 lg:p-8">
              <h3 className="text-white font-Poppins lg:mb-5 lg:text-5xl">
                Problem
              </h3>
              <p className="text-white font-Poppins lg:tracking-normal lg:text-xs">
                In a crowded job market, many developers showcase generic
                e-commerce projects on their resumes, often focusing on basic
                CRUD functionalities or simple templates. These projects lack
                the complexity and advanced features that demonstrate real-world
                expertise, making it hard to stand out to potential employers or
                clients. This results in a generic portfolio that doesn't
                highlight the full range of a developer's skills.
              </p>
            </div>
          </div>

          <div className="col-span-1 row-span-1 group h-full">
            <div className="relative lg:rounded-3xl h-full bg-blue-400 lg:p-8">
              <h3 className="text-white font-Poppins lg:mb-5 lg:text-5xl">
                Solution
              </h3>
              <p className="text-white font-Poppins lg:tracking-normal lg:text-xs">
                To set myself apart in this competitive market, I developed
                Nesture, a full-featured e-commerce platform built with the MERN
                stack. By incorporating advanced functionalities such as JWT
                authentication, Stripe payment integration, Redux state
                management, and a fully responsive design, I created a project
                that not only showcases my technical skills but also
                demonstrates my ability to tackle real-world challenges. This
                project highlights my expertise in building scalable, secure,
                and high-performance applications, ensuring I stand out as a
                developer ready for complex, production-level projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MOBILE/TABLET VIEW - Neumorphism Card Design */}
      <div className="lg:hidden" id="projects-mobile">
        <div className="bg-dark_primary rounded-3xl overflow-hidden mb-4 p-4 sm:p-5 md:p-6 shadow-[8px_8px_16px_#031525,-8px_-8px_16px_#093159]">
          {/* Hero Image */}
          <div className="relative h-40 sm:h-52 md:h-64 rounded-2xl overflow-hidden mb-4 sm:mb-5 shadow-[inset_4px_4px_8px_#031525,inset_-4px_-4px_8px_#093159]">
            <img
              src="./home.png"
              alt="Nesture Homepage"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#06223F] via-transparent to-transparent" />


          </div>

          {/* Title Section */}
          <div className="mb-4 sm:mb-5">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1">
              Nesture
            </h2>
            <p className="text-blue-400 text-[10px] sm:text-xs font-medium">
              Full-Stack E-Commerce Platform
            </p>
          </div>

          {/* Neumorphic Action Buttons */}
          <div className="flex gap-3 sm:gap-4 mb-4 sm:mb-5">
            <button
              onClick={() => window.open("https://nesture.web.app", "_blank")}
              className="flex-1 px-4 py-2.5 sm:px-5 sm:py-3 bg-dark_primary text-blue-400 text-xs sm:text-sm font-semibold rounded-xl shadow-[4px_4px_8px_#031525,-4px_-4px_8px_#093159] hover:shadow-[inset_4px_4px_8px_#031525,inset_-4px_-4px_8px_#093159] transition-all duration-300"
            >
              Live Demo
            </button>
            <button
              onClick={() => window.open("https://github.com/hitesh989998/nesture", "_blank")}
              className="flex-1 px-4 py-2.5 sm:px-5 sm:py-3 bg-dark_primary text-slate-300 text-xs sm:text-sm font-semibold rounded-xl shadow-[4px_4px_8px_#031525,-4px_-4px_8px_#093159] hover:shadow-[inset_4px_4px_8px_#031525,inset_-4px_-4px_8px_#093159] transition-all duration-300"
            >
              GitHub
            </button>
          </div>

          {/* Description Card */}
          <div className="p-3 sm:p-4 rounded-2xl bg-dark_primary mb-4 sm:mb-5">
            <p className="text-slate-300 text-[11px] sm:text-xs leading-relaxed">
              A full-featured e-commerce platform built with the MERN stack. Features include user & admin dashboards, Stripe payments, JWT auth, and real-time data visualization with Recharts.
            </p>
          </div>

          {/* Tech Stack - Neumorphic Pills */}
          <div className="mb-4 sm:mb-5">
            <h4 className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider mb-3 font-semibold">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2 sm:gap-2.5">
              {technologies.slice(0, 8).map((tech, index) => (
                <span
                  key={index}
                  className="px-2.5 py-1.5 sm:px-3 sm:py-2 bg-dark_primary text-slate-300 text-[9px] sm:text-[10px] rounded-lg shadow-[3px_3px_6px_#031525,-3px_-3px_6px_#093159]"
                >
                  {tech}
                </span>
              ))}
              {technologies.length > 8 && (
                <span className="px-2.5 py-1.5 sm:px-3 sm:py-2 bg-dark_primary text-blue-400 text-[9px] sm:text-[10px] rounded-lg shadow-[3px_3px_6px_#031525,-3px_-3px_6px_#093159]">
                  +{technologies.length - 8} more
                </span>
              )}
            </div>
          </div>

          {/* Image Gallery - Neumorphic Grid */}
          <div className="grid grid-cols-3 gap-2.5 sm:gap-3 mb-4 sm:mb-5">
            {mobileImages.map((img, index) => (
              <div
                key={index}
                className="relative rounded-xl overflow-hidden aspect-square cursor-pointer active:scale-95 transition-transform shadow-[4px_4px_8px_#031525,-4px_-4px_8px_#093159]"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-[#06223F] to-transparent">
                  <span className="text-white text-[9px] sm:text-[10px] font-medium tracking-wide">
                    {img.title}
                  </span>
                </div>
              </div>
            ))}
          </div>


        </div>
      </div>
    </>
  );
};

export default Nesture;
