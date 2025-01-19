export default function Experience() {
  return (
    <main
      id="experience"
      className="flex w-full h-[770px] gap-2 mb-8 p-4 bg-white bg-opacity-10 backdrop-blur-sm shadow-lg rounded-3xl"
    >
      <section className="flex-1 bg-white relative rounded-3xl overflow-hidden]">
        <div className="relative z-10 p-6 rounded-3xl h-full flex flex-col justify-start">
          <h2 className="text-5xl font-Poppins text-white customtext-darkblue mb-4">
            About Me
          </h2>
          <p className="lg:text-xs text-[10px] text-dark_primary text-left">
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

      <section className="flex-1 bg-blue-100 relative rounded-3xl overflow-hidden]">
        <div className="relative z-10  p-6 rounded-3xl h-full flex flex-col justify-start">
          <h2 className="text-5xl font-Poppins customtext-darkblue text-blue-100 mb-4">
            Experience
          </h2>

          <div className="mb-4">
            <div className="flex justify-between items-center text-white">
              <h3 className="lg:text-lg text-[12px] font-semibold">
                MERN Stack Intern
              </h3>
              <span className="lg:text-sm text-[7px]">
                August 2024 - Present
              </span>
            </div>
            <h4 className="lg:text-xs text-[8px]">
              Kangaroo Software Pvt. Ltd.
            </h4>
            <p className="lg:text-xs text-[10px] text-dark_primary mt-2 ">
              During my MERN Stack internship, I worked on real-world projects
              using React, Node.js, and MongoDB. I focused on deploying
              applications and writing production-level code to ensure
              scalability and performance. I collaborated with my team to debug,
              optimize, and deliver reliable solutions for live environments.
            </p>
            <hr className="border-t border-dark_primary my-2" />
          </div>

          <div className="mb-4">
            <div className="flex justify-between items-center text-white">
              <h3 className="lg:text-lg text-[12px] font-semibold">
                Digital Marketing Executive
              </h3>
              <span className="lg:text-sm text-[7px]">
                March 2024 - July 2024
              </span>
            </div>
            <h4 className="lg:text-xs text-[8px]">Rashail Tech Labs</h4>
            <p className="lg:text-xs text-[10px] text-dark_primary mt-2">
              Responsible for growing IG account 4X and Pinterest 10x in 4
              months. Received laurels for reaching 3 lakh plays in 3 days on a
              viral IG post.
            </p>
            <hr className="border-t border-dark_primary my-2" />
          </div>

          <div>
            <div className="flex justify-between items-center text-white">
              <h3 className="lg:text-lg text-[12px] font-semibold">
                Digital Marketing Intern
              </h3>
              <span className="lg:text-sm text-[7px]">
                July 2023 - Jan 2024
              </span>
            </div>
            <h4 className="lg:text-xs text-[8px]">
              DigitalVia Technologies Pvt. Ltd (Formerly SG Gurukul)
            </h4>
            <p className="lg:text-xs text-[10px] text-dark_primary mt-2">
              Focused on SEO, I conducted keyword and competitor research,
              optimized meta tags, and improved content for better ranking.
              Excelled in content creation, social media marketing, and built
              custom WordPress websites using Elementor and Astra.
            </p>
            <hr className="border-t border-dark_primary my-2" />
          </div>
        </div>
        <img
          src="./experience.png"
          alt="Hitesh experience"
          className="absolute right-1 bottom-0 p-2 z-10 w-20 h-20"
        />
      </section>

      <section className="flex-1 bg-dark_primary relative rounded-3xl overflow-hidden ">
        <div className="relative z-10 p-6 rounded-3xl h-full flex flex-col justify-start">
          <h2 className="text-5xl  text-dark_primary font-Poppins shadow-dark-text  mb-4">
            Education
          </h2>

          <div className="mb-2">
            <div className="flex justify-between items-center text-white">
              <h3 className="text-[10px] lg:text-base whitespace-nowrap text-white font-semibold underline">
                Dr. A.P.J Abdul Kalam University
              </h3>
              <span className="lg:text-sm text-[7px]  text-white">
                2021 - 2023
              </span>
            </div>
            <h4 className="lg:text-xs text-[8px] text-white mt-1 lg:mt-0">
              MBA, Marketing + IT{" "}
            </h4>
            <p className="lg:text-xs text-[10px] text-white">
              Master of Business Administration (MBA) with dual specialization
              in Marketing and Information Systems Management (IT).
            </p>
          </div>

          <div>
            <div className="flex justify-between items-center text-white ">
              <h3 className="lg:text-base text-[10px] whitespace-nowrap text-white font-semibold underline mt-5">
                {" "}
                Dr. A.P.J Abdul Kalam University
              </h3>
              <span className="lg:text-sm text-[7px]  text-white mt-5">
                2018-2021
              </span>
            </div>
            <h4 className="lg:text-xs text-[8px] text-white mt-1 lg:mt-0">
              BBA, Marketing
            </h4>
            <p className="lg:text-xs text-[10px] text-white">
              Bachelor of Business Administration (BBA) with a specialization in
              Marketing, focusing on Business Administration and Management.
            </p>
          </div>
        </div>
        <img
          src="./education.png"
          alt="Hitesh education"
          className="absolute right-2 bottom-0 p-2 z-10 w-20 h-20"
        />
      </section>
    </main>
  );
}
