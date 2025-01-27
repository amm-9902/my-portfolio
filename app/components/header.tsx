import { motion } from "motion/react";
import React, { useEffect, useState } from "react";

const HeaderComponent = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      // if scroll down hide the navbar
      setShow(false);
    } else {
      // if scroll up show the navbar
      setShow(true);
    }

    // remember current page location to use in the next move
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);

    // cleanup function
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`fixed  left-0 w-full px-20 py-8 flex justify-between items-center bg-background border-b border-gray-700 shadow-sm ${
        show ? "top-0" : "-top-[20%]"
      } transition-all duration-200 ease-in-out`}
    >
      <p className="text-xl w-full">Logo</p>
      <div className="w-full flex items-center justify-between text-gray-300">
        <motion.a href="#about" className=" cursor-pointer nav px-2">
          About
        </motion.a>
        <motion.a href="#skills" className=" cursor-pointer nav px-2">
          Skills
        </motion.a>
        <motion.a href="#projects" className=" cursor-pointer nav px-2">
          Projects
        </motion.a>
        <motion.a href="#contact" className=" cursor-pointer nav px-2">
          Contact
        </motion.a>
      </div>
    </div>
  );
};

export default HeaderComponent;
