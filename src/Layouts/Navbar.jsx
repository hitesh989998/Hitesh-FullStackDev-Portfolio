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
      <div className="sm:cursor-pointer fixed top-10 left-10 z-[999] rounded-lg bg-white/40 p-2">
        <h2 className="text-2xl font-semibold tracking-wider">{"<hitesh/>"}</h2>
      </div>
      <div
        className="sm:cursor-pointer fixed top-10 right-10 z-[999] rounded-lg bg-white/40 p-2"
        onClick={() => setShowMenu(!showMenu)}
      >
        <HiMenuAlt2 size={34} />
      </div>
      <nav
        className={`fixed  z-[999] flex items-center gap-5 bg-slate-200/60 px-6 py-3 backdrop-blur-sm rounded-full text-dark_primary duration-300 ${
          showMenu ? "bottom-10" : "bottom-[-100%]"
        }`}
      >
        {nav.map((item, i) => (
          <a
            href={`#${item.id}`}
            onClick={() => setActive(i)}
            className={`text-lg p-3 flex items-center flex-col rounded-full sm:cursor-pointer ${
              i === active && "bg-dark_primary text-white"
            }`}
            key={i}
          >
            <div>
              <item.icon />
            </div>{" "}
            <div className="text-xs"> {item.title} </div>
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
