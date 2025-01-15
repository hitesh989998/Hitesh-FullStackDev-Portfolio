// import components
import Hero from "./components/Hero";
import Navbar from "./Layouts/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import { useEffect } from "react";
// Animation package
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
      disable: "mobile",
    });
  }, []);
  return (
    <div className="bg-[url('/magicpattern-starry-night-1736853171922.png')]">
      <div className="p-8">
        <Navbar />
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </div>
  );
};

export default App;
