// import components
import Hero from "./components/Hero";
import Navbar from "./Layouts/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div className="bg-[url('/magicpattern-starry-night-1736853171922.png')]">
      <div className="p-8">
        <Navbar />
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <ToastContainer position="bottom-right" />
      </div>
    </div>
  );
};

export default App;
