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
      className="flex w-full lg:h-[770px] h-[300px] gap-0 lg:mb-8 mb-2 p-0 lg:rounded-3xl rounded-md"
    >
      <section className="relative flex flex-col w-[15%] h-full bg-white lg:p-4 p-3 items-center lg:rounded-l-3xl rounded-l-md">
        <div className="absolute inset-y-0 right-[-20px] bg-white w-[20px] z-10"></div>
        <div className="flex flex-col justify-between items-center h-full lg:rounded-3xl rounded-md">
          <p className="lg:text-lg text-[6px] -top-1 relative lg:top-0 text-[#1e3a8a]">
            Portfolio
          </p>
          <p className="lg:text-lg text-[5px] font-extrabold font-Pinyon tracking-widest text-neutral-300 lg:top-10 top-4 absolute">
            Hitesh Lalwani
          </p>
          <p className="lg:text-xs -bottom-3 relative lg:bottom-0 text-[4px] text-neutral-300">
            © 2025
          </p>
        </div>
      </section>

      <section className="flex flex-col w-[45%] h-full bg-blue-50 lg:p-4 p-1.5 lg:rounded-l-3xl rounded-l-md z-20 relative">
        <div className="flex flex-col justify-between h-full">
          <p className="lg:text-6xl text-[10px] text-[#1e3a8a]">
            A good coder writes code for the computer.
          </p>
          <p className="lg:text-2xl -bottom-1.5 relative lg:bottom-0 text-[7px] text-[#1e3a8a]">
            a great coder writes code for humans.
          </p>
        </div>
        <div className="absolute inset-y-0 right-[-20px] bg-blue-50 w-[40px] z-10"></div>
      </section>

      <section className="flex flex-col w-[45%] h-full lg:rounded-r-3xl rounded-r-md lg:p-6 p-2 pb-0 z-30 bg-dark_primary lg:rounded-3xl rounded-md relative">
        <div className="flex flex-col w-full lg:gap-4 gap-0.5 text-white">
          <h2 className="lg:text-3xl text-[8px] font-bold text-white">
            Contact Information
          </h2>
          <div className="flex justify-start items-center lg:gap-4 gap-1">
            <div className="flex items-center rounded-full">
              <a
                href="tel:+918827526398"
                className="lg:text-sm text-[4px] whitespace-nowrap shadow-dark text-white p-0.5 lg:p-2"
              >
                +91 8827 526398
              </a>
            </div>
            <div className="flex items-center rounded-full">
              <a
                href="mailto:hitesh989998@gmail.com"
                className="lg:text-sm text-[4px] shadow-dark text-white lg:p-2 p-0.5"
              >
                hitesh989998@gmail.com
              </a>
            </div>
            <a
              href="https://wa.me/918827526398"
              target="_blank"
              className="flex items-center justify-center h-3 w-3 p-0.5 lg:p-0 lg:w-10 lg:h-10 rounded-full shadow-lg text-white shadow-dark transition-all duration-300 shadow-hover2"
            >
              <FaWhatsapp size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/hitesh-lalwani989998/"
              target="_blank"
              className="flex items-center justify-center h-3 w-3 p-0.5 lg:p-0 lg:w-10 lg:h-10 rounded-full shadow-lg text-white shadow-dark transition-all duration-300 shadow-hover2"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://github.com/hitesh989998"
              target="_blank"
              className="flex items-center justify-center h-3 w-3 p-0.5 lg:p-0 lg:w-10 lg:h-10 rounded-full shadow-lg text-white shadow-dark transition-all duration-300 shadow-hover2"
            >
              <FaGithub size={24} />
            </a>
          </div>
        </div>

        <div className="lg:mt-4 mt-1 mb-28">
          <a
            href="/path-to-cv.pdf"
            download
            className="w-full lg:p-6 p-2 text-white rounded-3xl shadow-xl flex items-center justify-center lg:space-x-4 space-x-1 shadow-dark transition-all duration-300 shadow-hover2"
          >
            <FaDownload size={24} className="lg:block hidden" />
            <FaDownload size={8} className="lg:hidden block" />
            <span className="lg:text-xl text-[7px] font-semibold text-white">
              Download My CV
            </span>
          </a>
        </div>
        <h2 className="text-white lg:top-72 top-24 lg:right-1 right-1 p-1 font-Pinyon absolute z-10 whitespace-nowrap lg:text-4xl text-[9px] tracking-widest">
          Let’s build something great together.{" "}
        </h2>

        <div className="flex-grow lg:mt-4 mt-0 relative lg:top-0 -top-12 flex w-full">
          <div className="w-[10%] flex justify-center items-center">
            <h2 className="lg:text-5xl text-xl text-dark_primary transform -rotate-90 origin-center whitespace-nowrap  shadow-dark-text font-Poppins">
              Contact Form
            </h2>
          </div>

          <div className="w-[90%] flex justify-center items-center">
            <div className="w-full h-full lg:p-2 p-1 bg-dark_primary backdrop-blur-sm rounded-3xl flex justify-center items-center">
              <form
                className="w-full lg:space-y-6 space-y-2"
                onSubmit={onSubmitHandler}
              >
                <input
                  type="text"
                  placeholder="Your Name"
                  onChange={onChangeHandler}
                  name="name"
                  className="block w-full lg:p-4  bg-transparent text-white rounded-lg shadow-form-input lg:placeholder:text-base placeholder:text-[7px] pl-2 lg:place-self-auto "
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  name="email"
                  onChange={onChangeHandler}
                  className="block w-full lg:p-4  bg-transparent text-white rounded-lg shadow-form-input lg:placeholder:text-base placeholder:text-[7px] pl-2 lg:place-self-auto"
                />

                <textarea
                  placeholder="Your Message"
                  name="message"
                  onChange={onChangeHandler}
                  className="block w-full lg:p-4 p-2 bg-transparent text-white lg:rounded-lg rounded-sm shadow-form-input lg:h-32 h-16 lg:placeholder:text-base placeholder:text-[7px]"
                />

                <button
                  type="submit"
                  className="w-full lg:py-3 py-1 shadow-dark text-white rounded-full lg:text-lg font-semibold shadow-hover2 transition-all duration-300 text-[8px]"
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
