import { FaGithub } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <main
      id="contact"
      className="flex w-full h-[770px] gap-0 mb-8 p-0 rounded-3xl"
    >
      <section className="relative flex flex-col w-[15%] h-full bg-white p-4 items-center rounded-l-3xl">
        <div className="absolute inset-y-0 right-[-20px] bg-white w-[20px] z-10"></div>
        <div className="flex flex-col justify-between items-center h-full rounded-3xl">
          <p className="text-lg text-[#1e3a8a]">Portfolio</p>
          <p className="text-lg font-extrabold font-Pinyon tracking-widest text-neutral-300 top-10 absolute">
            Hitesh Lalwani
          </p>
          <p className="text-xs text-neutral-300">© 2025</p>
        </div>
      </section>

      <section className="flex flex-col w-[45%] h-full bg-blue-50 p-4 rounded-l-3xl z-20 relative">
        <div className="flex flex-col justify-between h-full">
          <p className="text-6xl text-[#1e3a8a]">
            A good coder writes code for the computer.
          </p>
          <p className="text-2xl text-[#1e3a8a]">
            a great coder writes code for humans.
          </p>
        </div>
        <div className="absolute inset-y-0 right-[-20px] bg-blue-50 w-[40px] z-10"></div>
      </section>

      <section className="flex flex-col w-[45%] h-full rounded-r-3xl p-6 pb-0 z-30 bg-dark_primary rounded-3xl relative">
        <div className="flex flex-col w-full gap-4 text-white">
          <h2 className="text-3xl font-bold text-white">Contact Information</h2>
          <div className="flex justify-start gap-4">
            <div className="flex items-center rounded-full">
              <span className="text-sm shadow-dark text-white p-2">
                +91 8827 526398
              </span>
            </div>
            <div className="flex items-center rounded-full">
              <span className="text-sm shadow-dark text-white p-2">
                hitesh989998@gmail.com
              </span>
            </div>
            <a
              href="https://www.linkedin.com/in/hitesh-lalwani989998/"
              target="_blank"
              className="flex items-center justify-center w-10 h-10 rounded-full shadow-lg text-white shadow-dark transition-all duration-300 shadow-hover2"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://github.com/hitesh989998"
              target="_blank"
              className="flex items-center justify-center w-10 h-10 rounded-full shadow-lg text-white shadow-dark transition-all duration-300 shadow-hover2"
            >
              <FaGithub size={24} />
            </a>
          </div>
        </div>

        <div className="mt-4 mb-28">
          <a
            href="/path-to-cv.pdf"
            download
            className="w-full p-6 text-white rounded-3xl shadow-xl flex items-center justify-center space-x-4 shadow-dark transition-all duration-300 shadow-hover2"
          >
            <FaDownload size={24} />
            <span className="text-xl font-semibold text-white">
              Download My CV
            </span>
          </a>
        </div>
        <h2 className="text-white top-72 right-1 p-1 font-Pinyon absolute z-10 whitespace-nowrap text-4xl tracking-widest">
          Let’s build something great together.{" "}
        </h2>

        <div className="flex-grow mt-4 flex w-full">
          <div className="w-[10%] flex justify-center items-center">
            <h2 className="text-5xl text-dark_primary transform -rotate-90 origin-center whitespace-nowrap  shadow-dark-text font-Poppins">
              Contact Form
            </h2>
          </div>

          <div className="w-[90%] flex justify-center items-center">
            <div className="w-full h-full p-2 bg-dark_primary backdrop-blur-sm rounded-3xl flex justify-center items-center">
              <form className="w-full space-y-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="block w-full p-4 bg-transparent text-white rounded-lg shadow-form-input"
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  className="block w-full p-4 bg-transparent text-white rounded-lg shadow-form-input"
                />

                <textarea
                  placeholder="Your Message"
                  className="block w-full p-4 bg-transparent text-white rounded-lg shadow-form-input h-32"
                />

                <button
                  type="submit"
                  className="w-full py-3 shadow-dark text-white rounded-full text-lg font-semibold shadow-hover2 transition-all duration-300"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
