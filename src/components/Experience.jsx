export default function Experience() {
  return (
    <main
      id="experience"
      className="flex w-full lg:h-[770px] h-[250px] lg:gap-2 gap-1 mb-3 lg:mb-8 lg:p-4 p-1 bg-white bg-opacity-10 backdrop-blur-sm shadow-lg lg:rounded-3xl rounded-md"
    >
      <section className="flex-1 bg-white relative lg:rounded-3xl rounded-lg overflow-hidden]">
        <div className="relative z-10 lg:p-6 p-1 rounded-3xl h-full flex flex-col justify-start">
          <h2 className="lg:text-5xl text-base font-Poppins text-white customtext-darkblue lg:mb-4 mb-2">
            About Me
          </h2>
          <p className="lg:text-xs text-[3px] text-dark_primary text-left">
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
          className="absolute lg:right-0 lg:bottom-0 -right-1.5 -bottom-1.5 p-2 z-10 lg:w-20 lg:h-20 h-9 w-10"
        />
      </section>

      <section className="flex-1 bg-blue-100 relative lg:rounded-3xl rounded-lg overflow-hidden]">
        <div className="relative z-10  lg:p-6 p-1 rounded-3xl h-full flex flex-col justify-start">
          <h2 className="lg:text-5xl text-base font-Poppins customtext-darkblue text-blue-100 lg:mb-4 mb-2">
            Experience
          </h2>

          <div className="lg:mb-4 mb-1">
            <div className="flex justify-between items-center text-white">
              <h3 className="lg:text-lg text-[4px] font-semibold">
                MERN Stack Intern
              </h3>
              <span className="lg:text-sm text-[3px]">
                August 2024 - Present
              </span>
            </div>
            <h4 className="lg:text-xs text-[3px] mt-0 lg:mt-0">
              Kangaroo Software Pvt. Ltd.
            </h4>
            <p className="lg:text-xs text-[3px] text-dark_primary lg:mt-2 mt-0.5 ">
              During my MERN Stack internship, I worked on real-world projects
              using React, Node.js, and MongoDB. I focused on deploying
              applications and writing production-level code to ensure
              scalability and performance. I collaborated with my team to debug,
              optimize, and deliver reliable solutions for live environments.
            </p>
            <hr className="border-t border-dark_primary lg:my-2 my-0.5" />
          </div>

          <div className="lg:mb-4 mb-1">
            <div className="flex justify-between items-center text-white">
              <h3 className="lg:text-lg text-[4px] font-semibold">
                Digital Marketing Executive
              </h3>
              <span className="lg:text-sm text-[3px] whitespace-nowrap">
                March 2024 - July 2024
              </span>
            </div>
            <h4 className="lg:text-xs text-[3px] mt-0 lg:mt-0">
              Rashail Tech Labs
            </h4>
            <p className="lg:text-xs text-[3px] text-dark_primary lg:mt-2 mt-0.5">
              Responsible for growing IG account 4X and Pinterest 10x in 4
              months. Received laurels for reaching 3 lakh plays in 3 days on a
              viral IG post.
            </p>
            <hr className="border-t border-dark_primary lg:my-2 my-0.5" />
          </div>

          <div>
            <div className="flex justify-between items-center text-white">
              <h3 className="lg:text-lg text-[4px] font-semibold">
                Digital Marketing Intern
              </h3>
              <span className="lg:text-sm text-[3px]">
                July 2023 - Jan 2024
              </span>
            </div>
            <h4 className="lg:text-xs text-[3px] mt-0 lg:mt-0">
              DigitalVia Technologies Pvt. Ltd (Formerly SG Gurukul)
            </h4>
            <p className="lg:text-xs text-[3px] text-dark_primary lg:mt-2 mt-0.5">
              Focused on SEO, I conducted keyword and competitor research,
              optimized meta tags, and improved content for better ranking.
              Excelled in content creation, social media marketing, and built
              custom WordPress websites using Elementor and Astra.
            </p>
            <hr className="border-t border-dark_primary lg:my-2 my-0.5" />
          </div>
        </div>
        <img
          src="./experience.png"
          alt="Hitesh experience"
          className="absolute lg:right-1 lg:bottom-0 -bottom-1.5 -right-1 p-2 z-10 lg:w-20 lg:h-20 h-9 w-9"
        />
      </section>

      <section className="flex-1 bg-dark_primary relative lg:rounded-3xl rounded-lg overflow-hidden ">
        <div className="relative z-10 lg:p-6 p-1 rounded-3xl h-full flex flex-col justify-start">
          <h2 className="lg:text-5xl text-base  text-dark_primary font-Poppins shadow-dark-text mb-2 lg:mb-4">
            Education
          </h2>

          <div className="lg:mb-2 mb-0.5">
            <div className="flex justify-between items-center text-white">
              <h3 className="text-[4px] lg:text-base whitespace-nowrap text-white font-semibold underline">
                Dr. A.P.J Abdul Kalam University
              </h3>
              <span className="lg:text-sm text-[3px]  text-white">
                2021 - 2023
              </span>
            </div>
            <h4 className="lg:text-xs text-[3px] text-white mt-1 lg:mt-0">
              MBA, Marketing + IT{" "}
            </h4>
            <p className="lg:text-xs text-[3px] text-white">
              Master of Business Administration (MBA) with dual specialization
              in Marketing and Information Systems Management (IT).
            </p>
          </div>

          <div>
            <div className="flex justify-between items-center text-white ">
              <h3 className="lg:text-base text-[4px] whitespace-nowrap text-white font-semibold underline lg:mt-5 mt-1.5">
                {" "}
                Dr. A.P.J Abdul Kalam University
              </h3>
              <span className="lg:text-sm text-[3px]  text-white lg:mt-5 mt-1.5">
                2018-2021
              </span>
            </div>
            <h4 className="lg:text-xs text-[3px] text-white mt-1 lg:mt-0">
              BBA, Marketing
            </h4>
            <p className="lg:text-xs text-[3px] text-white">
              Bachelor of Business Administration (BBA) with a specialization in
              Marketing, focusing on Business Administration and Management.
            </p>
          </div>
        </div>
        <img
          src="./education.png"
          alt="Hitesh education"
          className="absolute lg:right-2 -right-1 lg:bottom-2 -bottom-1 p-2 z-10 lg:w-20 lg:h-20 w-9 h-9"
        />
      </section>
    </main>
  );
}
