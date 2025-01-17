export default function Experience() {
  return (
    <main
      id="experience"
      className="flex w-full h-[770px] gap-2 mb-8 p-4 bg-blue-50 rounded-3xl"
    >
      <section className="flex-1 bg-cover bg-center relative rounded-3xl overflow-hidden bg-[url('/glass4.webp')]">
        <div className="absolute inset-0 bg-black bg-opacity-30 hover:bg-opacity-50"></div>
        <div className="relative z-10 p-6 rounded-3xl h-full flex flex-col justify-start">
          <h2 className="text-3xl font-bold text-white mb-4">About Me</h2>
          <p className="text-sm text-white text-left">
            I’m someone who thrives on upskilling, constantly learning, and
            pushing my skills to the next level. With a near-perfect mastery of
            the MERN stack, I specialize in building scalable, high-performance
            web apps that deliver a real impact.
            <br /> <br />
            Making the shift from Digital Marketing to tech was a transformative
            step, allowing me to embrace the challenges of coding and continuous
            learning—a journey perfectly aligned with my strengths and future
            goals.
          </p>
        </div>
        <img
          src="./aboutme.png"
          alt="Hitesh"
          className="absolute right-0 bottom-0 p-2 z-10 w-20 h-20"
        />
      </section>

      <section className="flex-1 bg-cover bg-center relative rounded-3xl overflow-hidden bg-[url('/glass2.jpg')]">
        <div className="absolute inset-0 bg-black bg-opacity-5 hover:bg-opacity-50"></div>
        <div className="relative z-10 bg-white bg-opacity-30 p-6 rounded-3xl h-full flex flex-col justify-start">
          <h2 className="text-3xl font-bold text-white mb-4">Experience</h2>

          <div className="mb-4">
            <div className="flex justify-between items-center text-white">
              <h3 className="text-lg font-semibold">MERN Stack Intern</h3>
              <span className="text-sm">August 2024 - Present</span>
            </div>
            <h4 className="text-xs">Kangaroo Software Pvt. Ltd.</h4>
            <p className="text-sm text-white">
              During my MERN Stack internship, I worked on real-world projects
              using React, Node.js, and MongoDB. I focused on deploying
              applications and writing production-level code to ensure
              scalability and performance. I collaborated with my team to debug,
              optimize, and deliver reliable solutions for live environments.
            </p>
            <hr className="border-t border-gray-400 my-2" />
          </div>

          <div className="mb-4">
            <div className="flex justify-between items-center text-white">
              <h3 className="text-lg font-semibold">
                Digital Marketing Executive
              </h3>
              <span className="text-sm">March 2024 - July 2024</span>
            </div>
            <h4 className="text-xs">Rashail Tech Labs</h4>
            <p className="text-sm text-white">
              Responsible for growing IG account 4X and Pinterest 10x in 5
              months. Received laurels for reaching 3 lakh video plays in 3 days
              on a viral IG post.
            </p>
            <hr className="border-t border-gray-400 my-2" />
          </div>

          <div>
            <div className="flex justify-between items-center text-white">
              <h3 className="text-xl font-semibold">
                Digital Marketing Intern
              </h3>
              <span className="text-sm">July 2023 - Jan 2024</span>
            </div>
            <h4 className="text-xs">
              DigitalVia Technologies Pvt. Ltd (Formerly SG Gurukul)
            </h4>
            <p className="text-sm text-white">
              Focused on SEO, I conducted keyword and competitor research,
              optimized meta tags, and improved content for better ranking.
              Created and submitted Web 2.0 properties, managed link-building,
              and optimized Google My Business listings. Excelled in content
              creation, social media marketing, and built custom WordPress
              websites using Elementor and Astra.
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

      <section className="flex-1 bg-cover bg-center relative rounded-3xl overflow-hidden bg-[url('/glassk.jpg')]">
        <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-50"></div>
        <div className="relative z-10 bg-transparent bg-opacity-80 p-6 rounded-3xl h-full flex flex-col justify-start">
          <h2 className="text-3xl font-bold text-white mb-4">Education</h2>

          <div className="mb-2">
            <div className="flex justify-between items-center text-white">
              <h3 className=" text-base whitespace-nowrap text-white font-semibold underline">
                Dr. A.P.J Abdul Kalam University
              </h3>
              <span className="text-sm  text-white">2021 - 2023</span>
            </div>
            <h4 className="text-xs text-white">MBA, Marketing + IT </h4>
            <p className="text-sm text-white">
              Master of Business Administration (MBA) with dual specialization
              in Marketing and Information Systems Management (IT).
            </p>
          </div>

          <div>
            <div className="flex justify-between items-center text-white">
              <h3 className="text-base whitespace-nowrap text-white font-semibold underline mt-5">
                {" "}
                Dr. A.P.J Abdul Kalam University
              </h3>
              <span className="text-sm  text-white mt-5">2018-2021</span>
            </div>
            <h4 className="text-xs text-white">BBA, Marketing</h4>
            <p className="text-sm text-white">
              Bachelor of Business Administration (BBA) with a specialization in
              Marketing, focusing on Business Administration and Management.
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
