export default function Experience() {
  return (
    <main className="flex w-full h-[770px] gap-4 mb-8 p-4 bg-white rounded-3xl">
      {/* Section: About Me */}
      <section
        className="flex-1 bg-cover bg-center relative rounded-3xl overflow-hidden hover:scale-105 transition-transform duration-300"
        style={{ backgroundImage: "url('./starry.png')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30 hover:bg-opacity-50 transition-opacity duration-300"></div>
        <div className="relative z-10 bg-white bg-opacity-20 backdrop-blur-lg p-6 rounded-3xl h-full flex flex-col justify-start">
          <h2 className="text-3xl font-bold text-white mb-4">About Me</h2>
          <p className="text-sm text-white text-left">
            I am a passionate individual with a drive for continuous learning
            and growth. I thrive in environments that encourage innovation and
            collaboration.
          </p>
        </div>
        <img
          src="./aboutme.png"
          alt="Hitesh"
          className="absolute right-0 bottom-0 p-2 z-10 w-20 h-20"
        />
      </section>

      {/* Section: Experience */}
      <section
        className="flex-1 bg-cover bg-center relative rounded-3xl overflow-hidden hover:scale-105 transition-transform duration-300"
        style={{ backgroundImage: "url('./starry.png')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30 hover:bg-opacity-50 transition-opacity duration-300"></div>
        <div className="relative z-10 bg-white bg-opacity-20 backdrop-blur-lg p-6 rounded-3xl h-full flex flex-col justify-start">
          <h2 className="text-3xl font-bold text-white mb-4">Experience</h2>

          {/* Role 1 */}
          <div className="mb-4">
            <div className="flex justify-between items-center text-white">
              <h3 className="text-xl font-semibold">Software Engineer</h3>
              <span className="text-sm italic">Company 1 - Present</span>
            </div>
            <h4 className="text-xs">sample</h4>
            <p className="text-sm text-white">
              Developed scalable web applications using modern frameworks and
              ensured seamless user experiences.
            </p>
            <hr className="border-t border-gray-400 my-2" />
          </div>

          {/* Role 2 */}
          <div className="mb-4">
            <div className="flex justify-between items-center text-white">
              <h3 className="text-xl font-semibold">Frontend Developer</h3>
              <span className="text-sm italic">Company 2 - Present</span>
            </div>
            <h4 className="text-xs">sample</h4>
            <p className="text-sm text-white">
              Designed responsive user interfaces and collaborated with
              cross-functional teams to achieve project goals.
            </p>
            <hr className="border-t border-gray-400 my-2" />
          </div>

          {/* Role 3 */}
          <div>
            <div className="flex justify-between items-center text-white">
              <h3 className="text-xl font-semibold">UI/UX Designer</h3>
              <span className="text-sm italic">Company 3 - Present</span>
            </div>
            <h4 className="text-xs">sample</h4>
            <p className="text-sm text-white">
              Created visually appealing designs that improved user engagement
              and customer satisfaction.
            </p>
            <hr className="border-t border-gray-400 my-2" />
          </div>
        </div>
        <img
          src="./experience.png"
          alt="Hitesh experience"
          className="absolute right-1 bottom-0 p-2 z-10 w-20 h-20"
        />
      </section>

      {/* Section: Education */}
      <section
        className="flex-1 bg-cover bg-center relative rounded-3xl overflow-hidden hover:scale-105 transition-transform duration-300"
        style={{ backgroundImage: "url('./starry.png')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30 hover:bg-opacity-50 transition-opacity duration-300"></div>
        <div className="relative z-10 bg-white bg-opacity-20 backdrop-blur-lg p-6 rounded-3xl h-full flex flex-col justify-start">
          <h2 className="text-3xl font-bold text-white mb-4">Education</h2>

          {/* MBA */}
          <div className="mb-2">
            <div className="flex justify-between items-center text-white">
              <h3 className="text-xl font-semibold">MBA (IT + Marketing)</h3>
              <span className="text-sm italic">
                XYZ Business School - Present
              </span>
            </div>
            <h4 className="text-xs">sample</h4>
            <p className="text-sm text-white">
              Gained insights into IT strategies and marketing principles to
              drive business growth and improve organizational effectiveness.
            </p>
          </div>

          {/* BBA */}
          <div>
            <div className="flex justify-between items-center text-white">
              <h3 className="text-xl font-semibold">BBA (IT + Marketing)</h3>
              <span className="text-sm italic">ABC University - Present</span>
            </div>
            <h4 className="text-xs">sample</h4>
            <p className="text-sm text-white">
              Built foundational knowledge in IT and marketing through hands-on
              projects and coursework that sharpened leadership and teamwork
              skills.
            </p>
          </div>
        </div>
        <img
          src="./education.png"
          alt="Hitesh education"
          className="absolute right-1 bottom-0 p-2 z-10 w-20 h-20"
        />
      </section>
    </main>
  );
}
