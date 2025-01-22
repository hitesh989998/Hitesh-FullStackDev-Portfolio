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
  "Toastify",
  "Tailwind CSS",
];

const Projects = () => {
  return (
    <>
      <main
        className="flex flex-col bg-dark_primary w-full lg:h-[770px] h-[300px] lg:rounded-3xl rounded-md mb-3 lg:mb-8 "
        id="projects"
      >
        <section className="flex flex-col w-full lg:p-4 p-1  lg:h-[30%]">
          <div className="flex justify-between items-center">
            <h1 className="tracking-wide text-white lg:text-6xl text-lg font-extrabold">
              Nesture
            </h1>

            <div
              className="flex flex-col items-center justify-center text-white cursor-pointer"
              onClick={() =>
                window.open("https://github.com/hitesh989998/nesture", "_blank")
              }
            >
              <div className="group hover:text-blue-900 flex flex-col items-center justify-center">
                <FaGithubSquare className="lg:text-6xl text-lg group-hover:text-blue-900" />
                <p className="lg:text-sm text-[5px] group-hover:text-blue-900 text-white">
                  Github
                </p>
              </div>
            </div>
          </div>

          <div className="flex space-x-4 lg:my-4 my-2">
            <div className="group" title="Hosted On Firebase">
              <button
                className="flex items-center lg:text-sm text-[5px] underline text-white group-hover:text-blue-900"
                onClick={() => window.open("https://nesture.web.app", "_blank")}
              >
                View Website
                <SiFirebase className="lg:ml-2 ml-0.5 text-white group-hover:text-blue-900" />
              </button>
            </div>
            <div className="group" title="Hosted On Render">
              <button
                className="flex items-center lg:text-sm text-[5px] group-hover:text-blue-900 underline text-white hover:text-blue-900"
                onClick={() =>
                  window.open("https://nesture.onrender.com", "_blank")
                }
              >
                Backend Server
                <SiCoronarenderer className="lg:ml-2 ml-0.5 text-white group-hover:text-blue-900" />
              </button>
            </div>
          </div>

          <p className="lg:text-xs text-[4px] text-white tracking-wide">
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

          <hr className="w-full lg:my-4 my-1 mb-2" />

          <div className="flex flex-wrap lg:gap-2 gap-0.5 lg:-top-2 -top-1 relative">
            {technologies.map((tech, index) => (
              <p
                key={index}
                className="lg:text-xs text-[3px] lg:px-4 lg:py-3 px-1 py-1 rounded-md lg:mx-0.5 shadow-dark lg:rounded-lg   text-white relative"
              >
                {tech}
              </p>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-3 grid-rows-[1fr,1fr] lg:gap-2 gap-1 lg:mt-14 mt-[-1px] h-full w-full  ">
          <div className="col-span-1 row-span-1 group">
            <div className="relative lg:rounded-r-3xl rounded-r-lg overflow-hidden h-full">
              <img
                src="./home.png"
                alt="Project 1"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-90 transition-all duration-300 flex items-end justify-start p-4">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-left">
                  <h3 className="lg:text-base text-[3px] text-blue-500">
                    Beautiful UI, blending Glassmorphism & Minimalism
                  </h3>
                  <p className="lg:text-xs text-[3px] tracking-tight lg:tracking-normal text-white">
                    Nesture combines the elegance of glassmorphism with the
                    simplicity of minimalism to create a visually stunning
                    interface. The platform's glassy elements and
                    distraction-free layout keep users engaged while driving
                    higher conversion rates.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-1 row-span-1 group">
            <div className="relative lg:rounded-3xl rounded-lg overflow-hidden h-full">
              <img
                src="./admin.png"
                alt="Project 2"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-90 transition-all duration-300 flex items-end justify-center p-4">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-left">
                  <h3 className="lg:text-base text-[3px] text-blue-500">
                    Powerful Admin Dashboard with CRUD Operations
                  </h3>
                  <p className="lg:text-xs text-[3px] tracking-tight lg:tracking-normal text-white">
                    Admin dashboard offers seamless CRUD operations, powered by
                    real-time data from backend using Recharts. Admins can
                    easily Add/Manage Products and Users, using Axios for API
                    requests, Multer for file handling, all backed by a secure
                    Express-MongoDB server. Dedicated namespace architecture
                    secures admin functionality.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-1 row-span-1 group">
            <div className="relative lg:rounded-l-3xl rounded-l-lg overflow-hidden h-full">
              <img
                src="./user.png"
                alt="Project 3"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-90 transition-all duration-300 flex items-end justify-center p-4">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-left">
                  <h3 className="lg:text-base text-[3px] text-blue-500">
                    Customer Dashboard with Real-Time Insights
                  </h3>
                  <p className="lg:text-xs text-[3px] tracking-tight lg:tracking-normal text-white">
                    The customer-facing dashboard offers a sleek, modern design,
                    enhanced with Recharts to display user data in an intuitive
                    way. Users can easily navigate through clean visuals while
                    gaining valuable insights with ease.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-1 row-span-1 group lg:h-[213px] h-[87px] overflow-hidden">
            <div className="relative lg:rounded-tr-3xl lg:rounded-b-none rounded-r-lg rounded-br-none rounded-b-none overflow-hidden h-full">
              <img
                src="./stripe.png"
                alt="Project 4"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-90 transition-all duration-300 flex items-end justify-center p-4">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-left">
                  <h3 className="lg:text-base text-[3px] text-blue-500">
                    Advanced Payment Integration with Stripe
                  </h3>
                  <p className="lg:text-xs text-[3px] tracking-tight lg:tracking-normal text-white">
                    Nesture integrates Stripe, the world’s leading payment
                    platform, to provide a seamless and secure payment
                    experience. Whether it's credit card payments or digital
                    wallets, the integration with Stripe guarantees hassle-free
                    and reliable transactions, giving users peace of mind while
                    shopping.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-1 row-span-1 group lg:h-[213px] h-[87px]">
            <div className="relative lg:rounded-t-3xl rounded-lg rounded-b-none overflow-hidden h-full">
              <img
                src="./login.png"
                alt="Project 5"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-90 transition-all duration-300 flex items-end justify-center p-4">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-left">
                  <h3 className="lg:text-base text-[3px] text-blue-500">
                    Secure User Authentication with JWT and Bcrypt
                  </h3>
                  <p className="lg:text-xs text-[3px] tracking-tight lg:tracking-normal text-white">
                    The platform makes use of a multi-step form for smooth user
                    authentication, securely attaching JWT from the backend.
                    Passwords are hashed using Bcrypt and protected with SHA-256
                    (Secure Hash Algorithm 256-bit) encryption, ensuring
                    sensitive data is stored safely.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-1 row-span-1 group lg:h-[213px] h-[87px]">
            <div className="relative lg:rounded-l-3xl lg:rounded-b-none rounded-l-lg rounded-b-none rounded-bl-none overflow-hidden h-full">
              <img
                src="./singlepage.png"
                alt="Project 6"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-90 transition-all duration-300 flex items-end justify-center p-4">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-left">
                  <h3 className="lg:text-base text-[3px] text-blue-500">
                    Scalable State Management with Redux Toolkit
                  </h3>
                  <p className="lg:text-xs text-[3px] tracking-tight lg:tracking-normal text-white">
                    Nesture uses Redux Toolkit for unified state management
                    across the entire e-commerce platform, handling cart,
                    product, and user states in a single, centralized store.
                    This approach guarantees smooth handling of increased data
                    and user traffic as the platform grows.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <section className="flex flex-col bg-dark_primary lg:mt-10 mt-2 w-full h-[220px] lg:h-[770px] lg:rounded-3xl rounded-md lg:mb-8 mb-2 lg:p-4 p-2">
        <div className="grid grid-cols-[2.5fr_2.5fr_1fr_1fr] grid-rows-[2.5fr_2.5fr_1fr_1fr] h-full w-full lg:gap-2 gap-1">
          <div className="col-span-2 row-span-3 group h-full">
            <div className="relative lg:rounded-3xl rounded-md overflow-hidden h-full">
              <img
                src="./megamenu.png"
                alt="Project 4"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-90 transition-all duration-300 flex items-end justify-center p-4">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-left">
                  <h3 className="lg:text-base text-[3px] text-blue-500">
                    Streamlined Design with Tailwind CSS
                  </h3>
                  <p className="lg:text-xs text-[3px] tracking-tight lg:tracking-normal text-white">
                    Nesture uses Tailwind CSS to create stunning layouts from
                    scratch with speed and precision. Its utility-first
                    framework allows for rapid styling, ensuring a polished,
                    modern look across the platform. With Tailwind, I can easily
                    translate ideas into beautiful, pixel-perfect designs with
                    minimal effort. Whether it’s adjusting spacing, picking the
                    right color palette, choosing typography, or managing
                    layout, every tool I need is right at my fingertips. This
                    simplifies the development process, enabling me to deliver
                    clean, consistent designs faster than ever.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-2 row-span-4 group h-full">
            <div className="relative rounded-3xl overflow-hidden h-full">
              <img
                src="./phone.png"
                alt="Project 4"
                className="w-full h-full lg:object-contain"
              />
              <div className="absolute lg:inset-5 inset-0 lg:-my-5 bg-black bg-opacity-0 group-hover:bg-opacity-90 transition-all duration-300 flex items-end justify-center p-4 rounded-3xl">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-left">
                  <h3 className="lg:text-base text-[3px] text-blue-500">
                    Responsive design that looks best everywhere.
                  </h3>
                  <p className="lg:text-xs text-[3px] tracking-tight lg:tracking-normal text-white">
                    Nesture ensures a flawless user experience across all
                    devices, adapting seamlessly to different screen sizes. With
                    a fully responsive design, the platform maintains its
                    consistency and aesthetics, providing a smooth and engaging
                    experience, whether on mobile, tablet, or desktop.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-1 row-span-1 group h-full">
            <div className="relative lg:rounded-3xl rounded-md h-full bg-slate-900 lg:p-8 p-1.5">
              <h3 className="text-white font-Poppins lg:mb-5  lg:text-5xl text-xs">
                Problem
              </h3>
              <p className="text-white font-Poppins text-[3px] tracking-tighter lg:tracking-normal lg:text-xs">
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
            <div className="relative lg:rounded-3xl rounded-md h-full bg-blue-400 lg:p-8 p-1.5">
              <h3 className="text-white font-Poppins lg:mb-5  lg:text-5xl text-xs">
                Solution
              </h3>
              <p className="text-white font-Poppins text-[3px] tracking-tighter lg:tracking-normal lg:text-xs">
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
    </>
  );
};

export default Projects;
