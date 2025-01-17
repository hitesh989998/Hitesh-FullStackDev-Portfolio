const Hero = () => {
  return (
    <section
      id="home"
      className="overflow-hidden z-10 bg-transparent rounded-3xl mb-8 h-[770px]"
    >
      <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center bg-white">
        <div className="absolute h-full md:w-4/12 top-0 -right-1 bg-[url('/darkblue.png')] bg-[length:100%_100%] bottom-0 z-10 w-full">
          {" "}
          <h1 className="rotate-90 absolute top-[38%] right-[-45%] text-[#EAF2FA]">
            HITESH <span className="text-[#EAF2FA]">LALWANI</span>
          </h1>
        </div>
        <section className="flex relative top-10 right-12 md:w-8/12 w-full bg-white">
          <div className="pb-16 pt-5">
            <h2 className="relative w-full ">
              <p className="text-neutral-300 font-Pinyon tracking-widest text-4xl ml-3 mb-1">
                highly skilled
              </p>
              <div className="flex items-center justify-center  whitespace-nowrap">
                <p className="text-neutral-300 text-7xl font-light">{"{"}</p>
                <h2 className="text-7xl">Full Stack Developer</h2>
                <p className="text-neutral-300 text-7xl font-light">{"}"}</p>
              </div>
              <img src="/mern.jpeg" alt="mern" className="w-60 absolute" />
            </h2>

            <br />
            <div className="flex justify-end ">
              <a href="#contact">
                <button className="px-6 py-3 rounded-lg shadow-md bg-gray-200 text-dark_primary font-semibold hover:shadow-inner transition duration-300">
                  Connect with me
                </button>{" "}
              </a>
            </div>
            <div className="flex flex-col gap-10 mt-10"></div>
          </div>

          <div className="md:h-[37rem] z-50 w-full left-20 relative">
            <img src="/me.jpg" alt="Hitesh" className="rounded-3xl " />
          </div>
        </section>
      </div>
    </section>
  );
};

export default Hero;
