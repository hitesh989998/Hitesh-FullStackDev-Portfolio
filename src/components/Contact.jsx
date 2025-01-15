export default function Contact() {
  return (
    <main className="flex w-full h-[770px] gap-0 mb-8 p-0 rounded-3xl">
      <section className="flex flex-col w-[10%] h-full bg-white rounded-l-3xl p-4 items-center">
        <div className="flex flex-col justify-between h-full">
          <p className="text-lg text-[#1e3a8a]">Text1</p>
          <p className="text-xs text-[#1e3a8a]">Text2</p>
        </div>
      </section>

      <section className="flex flex-col w-[45%] h-full bg-blue-50 p-4 rounded-3xl">
        <div className="flex flex-col justify-between h-full">
          <p className="text-4xl text-[#1e3a8a]">Text1</p>
          <p className="text-2xl text-[#1e3a8a]">Text2</p>
        </div>
      </section>

      <section className="flex flex-col w-[45%] h-full rounded-r-3xl p-6 bg-transparent backdrop-blur-lg">
        <div className="flex flex-col w-full gap-4">
          <div className="flex justify-start text-white text-xl font-semibold">
            <h3>Contact Me</h3>
          </div>

          <div className="flex justify-start gap-4">
            <div className="flex items-center p-2 rounded-full border border-[#4f9aff] bg-transparent text-[#4f9aff]">
              <span className="text-sm">+91 8827 526398</span>
            </div>

            <div className="flex items-center p-2 rounded-full border border-[#4f9aff] bg-transparent text-[#4f9aff]">
              <span className="text-sm">hitesh989998@gmail.com</span>
            </div>
          </div>

          <div className="flex flex-col gap-4 mt-4 p-6 rounded-3xl bg-white bg-opacity-20 shadow-lg">
            <input
              className="p-2 text-white bg-transparent border-b-2 border-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#4f9aff]"
              type="text"
              placeholder="Name"
            />
            <input
              className="p-2 text-white bg-transparent border-b-2 border-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#4f9aff]"
              type="email"
              placeholder="Email"
            />
            <textarea
              className="p-2 text-white bg-transparent border-b-2 border-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#4f9aff]"
              placeholder="Message"
            />
            <button className="py-2 px-4 bg-[#4f9aff] text-white rounded-3xl focus:outline-none">
              Submit
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
