const Hero = () => {
  return (
    <section
      id="home"
      className="overflow-hidden z-10 bg-transparent rounded-3xl mb-8 h-[770px]"
    >
      <div className="min-h-screen relative flex flex-col lg:flex-row items-end justify-center bg-white">
        <div className="absolute h-full w-4/12 top-0 -right-1 bg-[url('/darkblue.png')] bg-[length:100%_100%] bottom-0 z-10 overflow-hidden">
          <h1 className="rotate-90 absolute lg:top-[38%] top-[13%] right-[-42%] lg:right-[-45%] text-[#EAF2FA] text-5xl lg:text-6xl whitespace-nowrap">
            HITESH <span className="text-[#EAF2FA]">LALWANI</span>
          </h1>
        </div>

        <section className="flex flex-col lg:flex-row relative -top-96 right-[450px] lg:top-10 lg:right-12 lg:w-8/12 bg-white">
          <div className="lg:pb-16 lg:pt-5">
            <h2 className="relative w-full">
              <p className="text-neutral-300 font-Pinyon tracking-widest text-4xl ml-3 mb-1">
                highly skilled
              </p>
              <div className="flex items-center justify-center whitespace-nowrap">
                <p className="text-neutral-300 text-7xl font-light">{"{"}</p>
                <h2 className="lg:text-7xl text-5xl">Full Stack Developer</h2>
                <p className="text-neutral-300 text-7xl font-light">{"}"}</p>
              </div>
              <img src="/mern.jpeg" alt="mern" className="w-60 absolute" />
            </h2>

            <br />
            <div className="flex justify-end">
              <a href="#contact">
                <button className="px-6 py-3 rounded-lg shadow-md bg-gray-200 text-dark_primary font-semibold hover:shadow-inner transition duration-300">
                  Connect with me
                </button>
              </a>
            </div>
          </div>

          <div className="h-[37rem] lg:top-0 top-[-200px] z-50 w-full left-[600px] lg:left-20 relative">
            <img
              src="/me.jpg"
              alt="Hitesh"
              className="rounded-3xl lg:h-auto lg:w-auto h-[200px] w-[200px] object-cover"
            />
          </div>
        </section>
      </div>
    </section>
  );
};

export default Hero;
