const Hero = () => {
  return (
    <section
      id="home"
      className="overflow-hidden z-10 bg-transparent lg:rounded-3xl rounded-md lg:mb-8 mb-3 lg:h-[770px] h-[240px]"
    >
      <div className=" lg:h-[770px] h-[240px] relative flex flex-col lg:flex-row items-end justify-center bg-white">
        <div className="absolute h-full w-4/12 top-0 -right-1 bg-[url('/darkblue.png')] bg-[length:100%_100%] bottom-0 z-10 overflow-hidden">
          <h1 className="rotate-90 absolute lg:top-[38%] top-[38%] right-[-46%] lg:right-[-45%] text-[#EAF2FA] text-lg lg:text-6xl whitespace-nowrap">
            HITESH <span className="text-[#EAF2FA]">LALWANI</span>
          </h1>
        </div>

        <section className="flex flex-col lg:flex-row relative top-[128%] right-[35%] lg:top-10 lg:right-12 lg:w-8/12 bg-white">
          <div className="lg:pb-16 lg:pt-10">
            <h2 className="relative w-full">
              <p className="text-neutral-300 font-Pinyon tracking-widest lg:text-4xl text-sm lg:ml-3 ml-1 -mb-1 lg:mb-1">
                highly skilled
              </p>
              <div className="flex items-center justify-center whitespace-nowrap">
                <p className="text-neutral-300 lg:text-7xl text-xl font-light">
                  {"{"}
                </p>
                <h2 className="lg:text-7xl text-lg">Full Stack Developer</h2>
                <p className="text-neutral-300 lg:text-7xl text-xl font-light">
                  {"}"}
                </p>
              </div>
              <img
                src="/mern.jpeg"
                alt="mern"
                className="lg:w-60 w-20 absolute"
              />
            </h2>

            <br />
            <div className="flex justify-end">
              <a href="#contact">
                <button className="lg:px-6 lg:py-3 py-1 px-1 lg:rounded-lg shadow-md bg-gray-200 text-dark_primary font-semibold lg:text-base text-[5px] hover:shadow-inner transition duration-300 relative lg:top-0 -top-8 rounded-sm">
                  Connect with me
                </button>
              </a>
            </div>
          </div>

          <div className="h-[37rem] lg:top-0 -top-[100px] z-50 w-full left-[205px] lg:left-20 relative">
            <img
              src="/me.jpg"
              alt="Hitesh"
              className="lg:rounded-3xl rounded-xl lg:h-auto lg:w-auto h-[75px] w-[75px] object-cover"
            />
          </div>
        </section>
      </div>
    </section>
  );
};

export default Hero;
