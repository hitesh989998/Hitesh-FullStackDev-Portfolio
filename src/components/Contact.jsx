import { FaGithub, FaDownload, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import { ref, set } from "firebase/database";
import { database } from "../firebase";

export default function Contact() {
  const [state, setState] = useState({ name: "", email: "", message: "" });

  const onChangeHandler = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (!state.name || !state.email || !state.message) {
      toast("Please fill out all the fields!");
      return;
    }

    try {
      const recaptchaToken = await window.grecaptcha.execute(
        import.meta.env.VITE_RECAPTCHA_SITE_KEY,
        { action: "submit" }
      );

      if (!recaptchaToken) {
        toast("reCAPTCHA verification failed.");
        return;
      }

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { from_name: state.name, from_email: state.email, message: state.message, "g-recaptcha-response": recaptchaToken },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        "template_f7rpuuf",
        { to_name: state.name, to_email: state.email, "g-recaptcha-response": recaptchaToken, subject: "Thank you!", message: "I will get back to you shortly." },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      await set(ref(database, "formResponses/" + Date.now()), state);
      toast("Form submitted successfully!");
      setState({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error:", error);
      toast("Something went wrong!");
    }
  };

  return (
    <main id="contact" className="w-full lg:mb-8 mb-4">
      {/* Mobile & Tablet Layout */}
      <div className="block lg:hidden">
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
          {/* Quote Section */}
          <div className="p-5 sm:p-6 md:p-8 bg-blue-100">
            <p className="text-base sm:text-lg text-dark_primary leading-relaxed mb-2">
              "A good coder writes code for the computer.
            </p>
            <p className="text-sm sm:text-base text-dark_primary/70">
              A great coder writes code for humans."
            </p>
          </div>

          {/* Contact Info */}
          <div className="p-5 sm:p-6 md:p-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-dark_primary font-Poppins mb-4">
              Contact
            </h2>

            {/* Contact Details */}
            <div className="space-y-2 mb-4">
              <a href="tel:+918827526398" className="block text-sm sm:text-base text-dark_primary">
                +91 8827 526398
              </a>
              <a href="mailto:hitesh989998@gmail.com" className="block text-sm sm:text-base text-dark_primary">
                hitesh989998@gmail.com
              </a>
            </div>

            {/* Social Links + Download CV - Same Line, Softer Border */}
            <div className="flex items-center gap-2 sm:gap-3">
              <a href="https://wa.me/918827526398" target="_blank" className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-white border border-neutral-200 flex items-center justify-center text-dark_primary">
                <FaWhatsapp className="text-base sm:text-lg" />
              </a>
              <a href="https://www.linkedin.com/in/hitesh-lalwani989998/" target="_blank" className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-white border border-neutral-200 flex items-center justify-center text-dark_primary">
                <FaLinkedin className="text-base sm:text-lg" />
              </a>
              <a href="https://github.com/hitesh989998" target="_blank" className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-white border border-neutral-200 flex items-center justify-center text-dark_primary">
                <FaGithub className="text-base sm:text-lg" />
              </a>
              <a href="/Hitesh_FullStackDeveloper_MERN.pdf" download className="flex-1 flex items-center justify-center gap-2 h-10 sm:h-11 bg-white border border-neutral-200 text-dark_primary rounded-lg font-medium text-xs sm:text-sm">
                <FaDownload className="text-xs sm:text-sm" />
                <span>Download My CV</span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-5 sm:p-6 md:p-8 bg-dark_primary">
            <h2 className="text-xl sm:text-2xl font-bold text-white font-Poppins mb-4">
              Send a Message
            </h2>

            <form className="space-y-3" onSubmit={onSubmitHandler}>
              <input
                type="text"
                placeholder="Your Name"
                onChange={onChangeHandler}
                name="name"
                value={state.name}
                className="w-full p-3 sm:p-3.5 bg-transparent text-white rounded-xl shadow-form-input placeholder:text-white/50 text-sm sm:text-base"
              />
              <input
                type="email"
                placeholder="Your Email"
                name="email"
                value={state.email}
                onChange={onChangeHandler}
                className="w-full p-3 sm:p-3.5 bg-transparent text-white rounded-xl shadow-form-input placeholder:text-white/50 text-sm sm:text-base"
              />
              <textarea
                placeholder="Your Message"
                name="message"
                value={state.message}
                onChange={onChangeHandler}
                className="w-full p-3 sm:p-3.5 bg-transparent text-white rounded-xl shadow-form-input placeholder:text-white/50 text-sm sm:text-base h-24 sm:h-28 resize-none"
              />
              <button type="submit" className="w-full py-3 shadow-dark text-white rounded-xl font-semibold text-sm sm:text-base">
                Submit
              </button>
            </form>

            <p className="text-white/60 font-Pinyon text-base sm:text-lg text-center mt-4">
              Let's build something great together.
            </p>
          </div>

          {/* Footer */}
          <div className="p-4 sm:p-5 flex justify-between items-center text-xs sm:text-sm text-dark_primary/60">
            <span>Portfolio</span>
            <span className="font-Pinyon">Hitesh Lalwani</span>
            <span>© 2025</span>
          </div>
        </div>
      </div>

      {/* Desktop Layout - Unchanged */}
      <div className="hidden lg:flex w-full h-[770px] gap-0 p-0 rounded-3xl">
        <section className="relative flex flex-col w-[15%] h-full bg-white p-4 items-center rounded-l-3xl">
          <div className="absolute inset-y-0 right-[-20px] bg-white w-[20px] z-10"></div>
          <div className="flex flex-col justify-between items-center h-full rounded-3xl">
            <p className="text-lg text-[#1e3a8a]">Portfolio</p>
            <p className="text-lg font-extrabold font-Pinyon tracking-widest text-neutral-300 top-10 absolute">Hitesh Lalwani</p>
            <p className="text-xs text-neutral-300">© 2025</p>
          </div>
        </section>

        <section className="flex flex-col w-[45%] h-full bg-blue-50 p-4 rounded-l-3xl z-20 relative">
          <div className="flex flex-col justify-between h-full">
            <p className="text-6xl text-[#1e3a8a]">A good coder writes code for the computer.</p>
            <p className="text-2xl text-[#1e3a8a]">a great coder writes code for humans.</p>
          </div>
          <div className="absolute inset-y-0 right-[-20px] bg-blue-50 w-[40px] z-10"></div>
        </section>

        <section className="flex flex-col w-[45%] h-full rounded-r-3xl p-6 pb-0 z-30 bg-dark_primary rounded-3xl relative">
          <div className="flex flex-col w-full gap-4 text-white">
            <h2 className="text-3xl font-bold text-white">Contact Information</h2>
            <div className="flex justify-start items-center gap-4">
              <a href="tel:+918827526398" className="text-sm whitespace-nowrap shadow-dark text-white p-2">+91 8827 526398</a>
              <a href="mailto:hitesh989998@gmail.com" className="text-sm shadow-dark text-white p-2">hitesh989998@gmail.com</a>
              <a href="https://wa.me/918827526398" target="_blank" className="flex items-center justify-center w-10 h-10 rounded-full shadow-dark text-white"><FaWhatsapp size={24} /></a>
              <a href="https://www.linkedin.com/in/hitesh-lalwani989998/" target="_blank" className="flex items-center justify-center w-10 h-10 rounded-full shadow-dark text-white"><FaLinkedin size={24} /></a>
              <a href="https://github.com/hitesh989998" target="_blank" className="flex items-center justify-center w-10 h-10 rounded-full shadow-dark text-white"><FaGithub size={24} /></a>
            </div>
          </div>

          <div className="mt-4 mb-28">
            <a href="/Hitesh_FullStackDeveloper_MERN.pdf" download className="w-full p-6 text-white rounded-3xl shadow-xl flex items-center justify-center space-x-4 shadow-dark">
              <FaDownload size={24} />
              <span className="text-xl font-semibold text-white">Download My CV</span>
            </a>
          </div>
          <h2 className="text-white top-72 right-1 p-1 font-Pinyon absolute z-10 whitespace-nowrap text-4xl tracking-widest">Let's build something great together.</h2>

          <div className="flex-grow mt-4 flex w-full">
            <div className="w-[10%] flex justify-center items-center">
              <h2 className="text-5xl text-dark_primary transform -rotate-90 origin-center whitespace-nowrap shadow-dark-text font-Poppins">Contact Form</h2>
            </div>
            <div className="w-[90%] flex justify-center items-center">
              <div className="w-full h-full p-2 bg-dark_primary backdrop-blur-sm rounded-3xl flex justify-center items-center">
                <form className="w-full space-y-6" onSubmit={onSubmitHandler}>
                  <input type="text" placeholder="Your Name" onChange={onChangeHandler} name="name" value={state.name} className="block w-full p-4 bg-transparent text-white rounded-lg shadow-form-input placeholder:text-base" />
                  <input type="email" placeholder="Your Email" name="email" value={state.email} onChange={onChangeHandler} className="block w-full p-4 bg-transparent text-white rounded-lg shadow-form-input placeholder:text-base" />
                  <textarea placeholder="Your Message" name="message" value={state.message} onChange={onChangeHandler} className="block w-full p-4 bg-transparent text-white rounded-lg shadow-form-input h-32 placeholder:text-base" />
                  <button type="submit" className="w-full py-3 shadow-dark text-white rounded-full text-lg font-semibold">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
