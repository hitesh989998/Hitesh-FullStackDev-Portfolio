const Hero = () => {
  return (
    <section
      id="home"
      className="overflow-hidden z-10 bg-transparent lg:rounded-3xl rounded-2xl lg:mb-8 mb-4 lg:h-[770px]"
    >
      {/* Mobile & Tablet Layout - Shows below 1024px */}
      <div className="block lg:hidden">
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
          {/* Hero Image Banner */}
          <div className="relative h-44 sm:h-52 md:h-64 bg-[url('/darkblue.png')] bg-cover bg-center">
            <div className="absolute inset-0 bg-gradient-to-t from-dark_primary/70 to-transparent" />
            <img
              src="/me.jpg"
              alt="Hitesh"
              className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/3 w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-2xl object-cover shadow-xl"
            />
          </div>

          {/* Content */}
          <div className="pt-14 sm:pt-16 md:pt-20 pb-6 sm:pb-8 px-4 sm:px-6 text-center">
            <p className="text-neutral-400 font-Pinyon text-base sm:text-lg md:text-xl mb-2">
              Frontend. Backend. Systems.
            </p>
            
            <div className="flex items-center justify-center gap-1 mb-3">
              <span className="text-neutral-300 text-xl sm:text-2xl md:text-3xl font-light">{"{"}</span>
              <span className="text-lg sm:text-xl md:text-2xl font-bold text-dark_primary font-Poppins">Full Stack Developer</span>
              <span className="text-neutral-300 text-xl sm:text-2xl md:text-3xl font-light">{"}"}</span>
            </div>

            <p className="text-xl sm:text-2xl md:text-3xl font-bold text-dark_primary mb-4 font-Poppins">
              HITESH LALWANI
            </p>

            <img
              src="/techstack.png"
              alt="mern"
              className="w-40 sm:w-48 md:w-60 mx-auto mb-5"
            />

            <a href="#contact">
              <button className="px-5 sm:px-6 py-2 sm:py-2.5 rounded-lg shadow-md text-dark_primary font-semibold text-sm sm:text-base hover:shadow-inner transition duration-300">
                Connect with me
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Desktop Layout - Shows at 1024px+ */}
      <div className="hidden lg:flex lg:h-[770px] relative flex-row items-end justify-center bg-white rounded-3xl">
        <div className="absolute h-full w-4/12 top-0 -right-1 bg-[url('/darkblue.png')] bg-[length:100%_100%] bottom-0 z-10 overflow-hidden rounded-r-3xl">
          <h1 className="rotate-90 absolute top-[38%] right-[-45%] text-[#EAF2FA] text-6xl whitespace-nowrap">
            HITESH <span className="text-[#EAF2FA]">LALWANI</span>
          </h1>
        </div>

        <section className="flex flex-row relative top-10 right-12 w-8/12 bg-white">
          <div className="pb-16 pt-10">
            <h2 className="relative w-full">
              <p className="text-neutral-300 font-Pinyon text-4xl ml-3 mb-1">
                Frontend. Backend. Systems.
              </p>
              <div className="flex items-center justify-center whitespace-nowrap">
                <p className="text-neutral-300 text-7xl font-light">{"{"}</p>
                <h2 className="text-7xl">Full Stack Developer</h2>
                <p className="text-neutral-300 text-7xl font-light">{"}"}</p>
              </div>
              <img src="/techstack.png" alt="mern" className="w-96 mt-2 absolute" />
            </h2>
            <br />
            <div className="flex justify-end">
              <a href="#contact">
                <button className="px-6 py-3 rounded-lg shadow-md text-dark_primary font-semibold text-base hover:shadow-inner transition duration-300">
                  Connect with me
                </button>
              </a>
            </div>
          </div>

          <div className="h-[37rem] z-50 w-full left-20 relative">
            <img src="/me.jpg" alt="Hitesh" className="rounded-3xl h-auto w-auto object-cover" />
          </div>
        </section>
      </div>
    </section>
  );
};

export default Hero;
