export default function Experience() {
  return (
    <main id="experience" className="w-full lg:mb-8 mb-4">
      {/* Mobile & Tablet Layout */}
      <div className="block lg:hidden">
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
          {/* About Me Section */}
          <div className="p-5 sm:p-6 md:p-8">
            <div className="flex items-center gap-3 mb-3">
              <img src="./aboutme.png" alt="About" className="w-8 h-8 sm:w-10 sm:h-10" />
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-dark_primary font-Poppins">
                About Me
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-dark_primary/80 leading-relaxed mb-2">
              I thrive on upskilling and pushing my skills to the next level. With near-perfect mastery of the MERN stack, I build scalable, high-performance web apps.
            </p>
            <p className="text-xs sm:text-sm text-dark_primary/80 leading-relaxed">
              Shifting from Digital Marketing to tech was transformative—embracing coding challenges aligned with my goals.
            </p>
          </div>

          {/* Experience Section */}
          <div className="bg-blue-100 p-5 sm:p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <img src="./experience.png" alt="Experience" className="w-8 h-8 sm:w-10 sm:h-10" />
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-dark_primary font-Poppins">
                Experience
              </h2>
            </div>

            {/* Item 1 */}
            <div className="mb-4 pb-4 border-b border-dark_primary/10">
              <h3 className="text-sm sm:text-base font-semibold text-dark_primary">MERN Stack Intern</h3>
              <p className="text-[10px] sm:text-xs text-dark_primary/60 mb-1">Kangaroo Software • Aug 2024 - Jan 2025</p>
              <p className="text-xs sm:text-sm text-dark_primary/80 leading-relaxed">
                Real-world projects with React, Node.js, MongoDB. Production-level code for scalability.
              </p>
            </div>

            {/* Item 2 */}
            <div className="mb-4 pb-4 border-b border-dark_primary/10">
              <h3 className="text-sm sm:text-base font-semibold text-dark_primary">Digital Marketing Executive</h3>
              <p className="text-[10px] sm:text-xs text-dark_primary/60 mb-1">Rashail Tech Labs • Mar 2024 - Jul 2024</p>
              <p className="text-xs sm:text-sm text-dark_primary/80 leading-relaxed">
                Grew IG 4X and Pinterest 10x in 4 months. 3 lakh plays in 3 days on viral post.
              </p>
            </div>

            {/* Item 3 */}
            <div>
              <h3 className="text-sm sm:text-base font-semibold text-dark_primary">Digital Marketing Intern</h3>
              <p className="text-[10px] sm:text-xs text-dark_primary/60 mb-1">DigitalVia Technologies • Jul 2023 - Jan 2024</p>
              <p className="text-xs sm:text-sm text-dark_primary/80 leading-relaxed">
                SEO, keyword research, meta optimization, WordPress with Elementor.
              </p>
            </div>
          </div>

          {/* Education Section */}
          <div className="bg-dark_primary p-5 sm:p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <img src="./education.png" alt="Education" className="w-8 h-8 sm:w-10 sm:h-10" />
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white font-Poppins">
                Education
              </h2>
            </div>

            {/* Item 1 */}
            <div className="mb-4 pb-4 border-b border-white/10">
              <h3 className="text-sm sm:text-base font-semibold text-white">MBA, Marketing + IT</h3>
              <p className="text-[10px] sm:text-xs text-white/60 mb-1">Dr. A.P.J Abdul Kalam University • 2021 - 2023</p>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                Dual specialization in Marketing and Information Systems Management.
              </p>
            </div>

            {/* Item 2 */}
            <div>
              <h3 className="text-sm sm:text-base font-semibold text-white">BBA, Marketing</h3>
              <p className="text-[10px] sm:text-xs text-white/60 mb-1">Dr. A.P.J Abdul Kalam University • 2018 - 2021</p>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                Business Administration with Marketing focus.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout - Unchanged */}
      <div className="hidden lg:flex w-full h-[770px] gap-2 p-4 bg-white bg-opacity-10 backdrop-blur-sm shadow-lg rounded-3xl">
        <section className="flex-1 bg-white relative rounded-3xl overflow-hidden">
          <div className="relative z-10 p-6 rounded-3xl h-full flex flex-col justify-start">
            <h2 className="text-5xl font-Poppins text-white customtext-darkblue mb-4">About Me</h2>
            <p className="text-xs text-dark_primary text-left">
              I'm someone who thrives on upskilling, constantly learning, and pushing my skills to the next level. With a near-perfect mastery of the MERN stack, I specialize in building scalable, high-performance web apps that deliver a real impact.
              <br /><br />
              Making the shift from Digital Marketing to tech was a transformative step, allowing me to embrace the challenges of coding and continuous learning—a journey perfectly aligned with my strengths and future goals.
            </p>
          </div>
          <img src="./aboutme.png" alt="Hitesh" className="absolute right-0 bottom-0 p-2 z-10 w-20 h-20" />
        </section>

        <section className="flex-1 bg-blue-100 relative rounded-3xl overflow-hidden">
          <div className="relative z-10 p-6 rounded-3xl h-full flex flex-col justify-start">
            <h2 className="text-5xl font-Poppins customtext-darkblue text-blue-100 mb-4">Experience</h2>
            <div className="mb-4">
              <div className="flex justify-between items-center text-white">
                <h3 className="text-lg font-semibold">MERN Stack Intern</h3>
                <span className="text-sm">August 2024 - January 2025</span>
              </div>
              <h4 className="text-xs">Kangaroo Software Pvt. Ltd.</h4>
              <p className="text-xs text-dark_primary mt-2">During my MERN Stack internship, I worked on real-world projects using React, Node.js, and MongoDB. I focused on deploying applications and writing production-level code to ensure scalability and performance.</p>
              <hr className="border-t border-dark_primary my-2" />
            </div>
            <div className="mb-4">
              <div className="flex justify-between items-center text-white">
                <h3 className="text-lg font-semibold">Digital Marketing Executive</h3>
                <span className="text-sm whitespace-nowrap">March 2024 - July 2024</span>
              </div>
              <h4 className="text-xs">Rashail Tech Labs</h4>
              <p className="text-xs text-dark_primary mt-2">Responsible for growing IG account 4X and Pinterest 10x in 4 months. Received laurels for reaching 3 lakh plays in 3 days on a viral IG post.</p>
              <hr className="border-t border-dark_primary my-2" />
            </div>
            <div>
              <div className="flex justify-between items-center text-white">
                <h3 className="text-lg font-semibold">Digital Marketing Intern</h3>
                <span className="text-sm">July 2023 - Jan 2024</span>
              </div>
              <h4 className="text-xs">DigitalVia Technologies Pvt. Ltd (Formerly SG Gurukul)</h4>
              <p className="text-xs text-dark_primary mt-2">Focused on SEO, I conducted keyword and competitor research, optimized meta tags, and improved content for better ranking.</p>
            </div>
          </div>
          <img src="./experience.png" alt="Experience" className="absolute right-1 bottom-0 p-2 z-10 w-20 h-20" />
        </section>

        <section className="flex-1 bg-dark_primary relative rounded-3xl overflow-hidden">
          <div className="relative z-10 p-6 rounded-3xl h-full flex flex-col justify-start">
            <h2 className="text-5xl text-dark_primary font-Poppins shadow-dark-text mb-4">Education</h2>
            <div className="mb-2">
              <div className="flex justify-between items-center text-white">
                <h3 className="text-base whitespace-nowrap text-white font-semibold underline">Dr. A.P.J Abdul Kalam University</h3>
                <span className="text-sm text-white">2021 - 2023</span>
              </div>
              <h4 className="text-xs text-white">MBA, Marketing + IT</h4>
              <p className="text-xs text-white">Master of Business Administration (MBA) with dual specialization in Marketing and Information Systems Management (IT).</p>
            </div>
            <div>
              <div className="flex justify-between items-center text-white">
                <h3 className="text-base whitespace-nowrap text-white font-semibold underline mt-5">Dr. A.P.J Abdul Kalam University</h3>
                <span className="text-sm text-white mt-5">2018-2021</span>
              </div>
              <h4 className="text-xs text-white">BBA, Marketing</h4>
              <p className="text-xs text-white">Bachelor of Business Administration (BBA) with a specialization in Marketing, focusing on Business Administration and Management.</p>
            </div>
          </div>
          <img src="./education.png" alt="Education" className="absolute right-2 bottom-2 p-2 z-10 w-20 h-20" />
        </section>
      </div>
    </main>
  );
}
