import { useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { BiHomeSmile } from "react-icons/bi";
import { BsCodeSlash } from "react-icons/bs";
import { FaBriefcase } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";
import { FaLaptopCode } from "react-icons/fa";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [active, setActive] = useState(0);

  const nav = [
    { id: "home", title: "Home", icon: BiHomeSmile },
    { id: "capabilities", title: "Capabilities", icon: FaLaptopCode },
    { id: "projects", title: "Projects", icon: BsCodeSlash },
    { id: "experience", title: "Experience", icon: FaBriefcase },
    { id: "contact", title: "Contact", icon: AiOutlineMessage },
  ];

  return (
    <div className="w-full flex justify-center">
      {/* Logo */}
      <div className="cursor-pointer fixed top-3 left-3 lg:top-10 lg:left-10 z-[999] rounded-lg bg-white/70 backdrop-blur-sm p-2">
        <h2 className="text-sm sm:text-base lg:text-2xl font-semibold tracking-wider text-dark_primary">
          {"<hitesh/>"}
        </h2>
      </div>

      {/* Menu Toggle */}
      <div
        className="cursor-pointer fixed top-3 right-3 lg:top-10 lg:right-10 z-[999] rounded-lg bg-white/70 backdrop-blur-sm p-2"
        onClick={() => setShowMenu(!showMenu)}
      >
        <HiMenuAlt2 className="text-xl sm:text-2xl lg:text-[34px] text-dark_primary" />
      </div>

      {/* Navigation */}
      <nav
        className={`fixed z-[999] flex items-center gap-2 sm:gap-3 lg:gap-5 bg-slate-200/80 backdrop-blur-md px-3 sm:px-4 lg:px-6 py-2 lg:py-3 rounded-full text-dark_primary duration-300 ${
          showMenu ? "bottom-5 sm:bottom-6 lg:bottom-10" : "bottom-[-100%]"
        }`}
      >
        {nav.map((item, i) => (
          <a
            href={`#${item.id}`}
            onClick={() => setActive(i)}
            className={`flex items-center justify-center rounded-full cursor-pointer transition-all duration-200
              w-10 h-10 sm:w-11 sm:h-11 lg:w-[50px] lg:h-[50px]
              ${i === active ? "bg-dark_primary text-white" : "hover:bg-dark_primary/10"}`}
            key={i}
          >
            <item.icon className="text-lg sm:text-xl" />
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
