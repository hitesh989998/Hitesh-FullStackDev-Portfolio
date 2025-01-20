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
      <div className="sm:cursor-pointer fixed lg:top-10 top-3 lg:left-10 left-2 z-[999] lg:rounded-lg rounded-sm bg-white/40 lg:p-2 p-0.5">
        <h2 className="lg:text-2xl text-xs font-semibold tracking-wider">
          {"<hitesh/>"}
        </h2>
      </div>
      <div
        className="sm:cursor-pointer fixed lg:top-10 top-3 lg:right-10 right-2 lg:mr-0 mr-0.5 z-[999] lg:rounded-lg rounded-sm bg-white/40 lg:p-2 p-0.5"
        onClick={() => setShowMenu(!showMenu)}
      >
        <HiMenuAlt2 className="lg:block hidden" size={34} />
        <HiMenuAlt2 className="lg:hidden block" size={14} />
      </div>
      <nav
        className={`fixed z-[999] flex items-center lg:gap-5 gap-1 bg-slate-200/60 lg:px-6 px-2 lg:py-3 py-1 backdrop-blur-sm rounded-full text-dark_primary duration-300 ${
          showMenu ? "bottom-10" : "bottom-[-100%]"
        }`}
      >
        {nav.map((item, i) => (
          <a
            href={`#${item.id}`}
            onClick={() => setActive(i)}
            className={`lg:text-lg text-base lg:p-3 p-2 flex items-center flex-col rounded-full sm:cursor-pointer ${
              i === active ? "bg-dark_primary text-white" : ""
            }`}
            key={i}
            style={{
              width: "50px",
              height: "50px",
              maxWidth: "50px",
              overflow: "hidden",
            }} // Ensure fixed size and hide overflow
          >
            <div
              className="flex items-center justify-center"
              style={{ width: "100%", height: "100%" }}
            >
              <item.icon />
            </div>
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
