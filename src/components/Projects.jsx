import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { SiFirebase } from "react-icons/si";
import { SiCoronarenderer } from "react-icons/si";

const technologies = [
  "MongoDB",
  "Express.js",
  "React",
  "Node.js",
  "Stripe Payment Gateway",
  "React Recharts",
  "Redux Toolkit",
  "REST APIs",
  "React Helmet",
  "JWT Authentication",
  "Bcrypt",
  "Multer",
  "Tailwind CSS",
];

const Projects = () => {
  return (
    <main className="flex flex-col bg-dark_primary w-full h-[770px] rounded-3xl mb-8 p-4">
      <section className="flex flex-col w-full" style={{ height: "30%" }}>
        <div className="flex justify-between items-center">
          <h1 className="tracking-wide text-white">Nesture</h1>

          <div
            className="flex flex-col items-center justify-center text-white cursor-pointer"
            onClick={() => window.open("https://nesture.web.app", "_blank")}
          >
            <div className="group hover:text-blue-900 flex flex-col items-center justify-center">
              <FaGithubSquare className="text-6xl group-hover:text-blue-900" />
              <p className="text-sm group-hover:text-blue-900 text-white">
                Github
              </p>
            </div>
          </div>
        </div>

        <div className="flex space-x-4 my-4">
          <div className="group" title="Hosted On Firebase">
            <button
              className="flex items-center text-sm underline text-white group-hover:text-blue-900"
              onClick={() => window.open("https://nesture.web.app", "_blank")}
            >
              View Website
              <SiFirebase className="ml-2 text-white group-hover:text-blue-900" />
            </button>
          </div>
          <div className="group" title="Hosted On Render">
            <button
              className="flex items-center text-sm group-hover:text-blue-900 underline text-white hover:text-blue-900"
              onClick={() =>
                window.open("https://nesture.onrender.com", "_blank")
              }
            >
              Backend Server
              <SiCoronarenderer className="ml-2 text-white group-hover:text-blue-900" />
            </button>
          </div>
        </div>

        <p className="text-base text-white mb-4">
          This is a sample paragraph describing the project. It can include
          features, technologies used, and any other details about the project.
        </p>

        <hr className="w-full my-4 " />

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <p
              key={index}
              className="text-xs px-4 py-3 mx-0.5 shadow-dark rounded-lg  text-white"
            >
              {tech}
            </p>
          ))}
        </div>
      </section>

      <section className="grid grid-cols-12 grid-rows-2 gap-4 mt-9 h-screen">
        <div className="col-span-4 row-span-2 group">
          <div className="relative rounded-3xl overflow-hidden h-full">
            <img
              src="./starry.png"
              alt="Project 1"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-end justify-center p-4">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center">
                <h3 className="text-xl">Dummy Title 1</h3>
                <p className="text-sm">Dummy Description</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-3 row-span-2 group">
          <div className="relative rounded-3xl overflow-hidden h-full">
            <img
              src="./starry.png"
              alt="Project 2"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-end justify-center p-4">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center">
                <h3 className="text-xl">Dummy Title 1</h3>
                <p className="text-sm">Dummy Description</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-3 group">
          <div className="relative rounded-3xl overflow-hidden h-full">
            <img
              src="./starry.png"
              alt="Project 3"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-end justify-center p-4">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center">
                <h3 className="text-xl">Dummy Title 1</h3>
                <p className="text-sm">Dummy Description</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-2 group">
          <div className="relative rounded-3xl overflow-hidden h-full">
            <img
              src="./starry.png"
              alt="Project 4"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-end justify-center p-4">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center">
                <h3 className="text-xl">Dummy Title 1</h3>
                <p className="text-sm">Dummy Description</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-2 group">
          <div className="relative rounded-3xl overflow-hidden h-full">
            <img
              src="./starry.png"
              alt="Project 5"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-end justify-center p-4">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center">
                <h3 className="text-xl">Dummy Title 1</h3>
                <p className="text-sm">Dummy Description</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-3 group">
          <div className="relative rounded-3xl overflow-hidden h-full">
            <img
              src="./starry.png"
              alt="Project 6"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-end justify-center p-4">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center">
                <h3 className="text-xl">Dummy Title 1</h3>
                <p className="text-sm">Dummy Description</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Projects;
