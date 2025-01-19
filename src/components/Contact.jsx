import { FaGithub } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { useState } from "react";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import { ref, set } from "firebase/database";
import { database } from "../firebase";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const [state, setState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const onChangeHandler = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    // Check for empty fields
    if (!state.name || !state.email || !state.message) {
      toast("Please fill out all the fields!");
      return;
    }

    try {
      // Execute reCAPTCHA v3
      const recaptchaToken = await window.grecaptcha.execute(
        import.meta.env.VITE_RECAPTCHA_SITE_KEY,
        { action: "submit" }
      );

      if (!recaptchaToken) {
        toast("reCAPTCHA verification failed. Please try again.");
        return;
      }

      const templateParamsToOwner = {
        from_name: state.name,
        from_email: state.email,
        message: state.message,
        "g-recaptcha-response": recaptchaToken,
      };

      const templateParamsToUser = {
        to_name: state.name,
        to_email: state.email,
        "g-recaptcha-response": recaptchaToken,
        subject: "Thank you for reaching out!",
        message:
          "Hello, thank you for contacting us! I will get back to you shortly.",
      };

      // Send email to the owner
      const responseToOwner = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParamsToOwner,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      console.log("Email sent to Hitesh Lalwani successfully", responseToOwner);

      // Send thank you email to the user
      const responseToUser = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        "template_f7rpuuf", // Your thank-you template ID
        templateParamsToUser,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      console.log("Thank you email sent to user successfully", responseToUser);

      // Save form data to Firebase
      const dbRef = ref(database, "formResponses/" + new Date().getTime());
      await set(dbRef, state);
      toast("Form submitted successfully!");
      setState({ name: "", email: "", message: "" }); // Reset form
    } catch (error) {
      console.error("Error:", error);
      toast("Something went wrong. Please try again!");
    }
  };

  return (
    <main
      id="contact"
      className="flex w-full h-[770px] gap-0 mb-8 p-0 rounded-3xl"
    >
      <section className="relative flex flex-col w-[15%] h-full bg-white p-4 items-center rounded-l-3xl">
        <div className="absolute inset-y-0 right-[-20px] bg-white w-[20px] z-10"></div>
        <div className="flex flex-col justify-between items-center h-full rounded-3xl">
          <p className="text-lg text-[#1e3a8a]">Portfolio</p>
          <p className="lg:text-lg text-base font-extrabold font-Pinyon tracking-widest text-neutral-300 top-10 absolute">
            Hitesh Lalwani
          </p>
          <p className="text-xs text-neutral-300">© 2025</p>
        </div>
      </section>

      <section className="flex flex-col w-[45%] h-full bg-blue-50 p-4 rounded-l-3xl z-20 relative">
        <div className="flex flex-col justify-between h-full">
          <p className="lg:text-6xl text-4xl text-[#1e3a8a]">
            A good coder writes code for the computer.
          </p>
          <p className="lg:text-2xl text-lg text-[#1e3a8a]">
            a great coder writes code for humans.
          </p>
        </div>
        <div className="absolute inset-y-0 right-[-20px] bg-blue-50 w-[40px] z-10"></div>
      </section>

      <section className="flex flex-col w-[45%] h-full rounded-r-3xl p-6 pb-0 z-30 bg-dark_primary rounded-3xl relative">
        <div className="flex flex-col w-full gap-4 text-white">
          <h2 className="text-3xl font-bold text-white">Contact Information</h2>
          <div className="flex justify-start items-center gap-4">
            <div className="flex items-center rounded-full">
              <a
                href="tel:+918827526398"
                className="lg:text-sm text-[10px] whitespace-nowrap shadow-dark text-white p-2"
              >
                +91 8827 526398
              </a>
            </div>
            <div className="flex items-center rounded-full">
              <a
                href="mailto:hitesh989998@gmail.com"
                className="lg:text-sm text-[10px] shadow-dark text-white p-2"
              >
                hitesh989998@gmail.com
              </a>
            </div>
            <a
              href="https://wa.me/918827526398"
              target="_blank"
              className="flex items-center justify-center h-7 w-7 lg:w-10 lg:h-10 rounded-full shadow-lg text-white shadow-dark transition-all duration-300 shadow-hover2"
            >
              <FaWhatsapp size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/hitesh-lalwani989998/"
              target="_blank"
              className="flex items-center justify-center h-7 w-7 lg:w-10 lg:h-10 rounded-full shadow-lg text-white shadow-dark transition-all duration-300 shadow-hover2"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://github.com/hitesh989998"
              target="_blank"
              className="flex items-center justify-center h-7 w-7 lg:w-10 lg:h-10 rounded-full shadow-lg text-white shadow-dark transition-all duration-300 shadow-hover2"
            >
              <FaGithub size={24} />
            </a>
          </div>
        </div>

        <div className="mt-4 mb-28">
          <a
            href="/path-to-cv.pdf"
            download
            className="w-full p-6 text-white rounded-3xl shadow-xl flex items-center justify-center space-x-4 shadow-dark transition-all duration-300 shadow-hover2"
          >
            <FaDownload size={24} />
            <span className="text-xl font-semibold text-white">
              Download My CV
            </span>
          </a>
        </div>
        <h2 className="text-white top-72 right-1 p-1 font-Pinyon absolute z-10 whitespace-nowrap lg:text-4xl text-2xl tracking-widest">
          Let’s build something great together.{" "}
        </h2>

        <div className="flex-grow mt-4 flex w-full">
          <div className="w-[10%] flex justify-center items-center">
            <h2 className="text-5xl text-dark_primary transform -rotate-90 origin-center whitespace-nowrap  shadow-dark-text font-Poppins">
              Contact Form
            </h2>
          </div>

          <div className="w-[90%] flex justify-center items-center">
            <div className="w-full h-full p-2 bg-dark_primary backdrop-blur-sm rounded-3xl flex justify-center items-center">
              <form className="w-full space-y-6" onSubmit={onSubmitHandler}>
                <input
                  type="text"
                  placeholder="Your Name"
                  onChange={onChangeHandler}
                  name="name"
                  className="block w-full p-4 bg-transparent text-white rounded-lg shadow-form-input"
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  name="email"
                  onChange={onChangeHandler}
                  className="block w-full p-4 bg-transparent text-white rounded-lg shadow-form-input"
                />

                <textarea
                  placeholder="Your Message"
                  name="message"
                  onChange={onChangeHandler}
                  className="block w-full p-4 bg-transparent text-white rounded-lg shadow-form-input h-32"
                />

                <button
                  type="submit"
                  className="w-full py-3 shadow-dark text-white rounded-full text-lg font-semibold shadow-hover2 transition-all duration-300"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
