import { Link } from "react-router-dom";
import { useState } from "react";
import { Transition } from "@headlessui/react";

/* function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
} */

const Navbar = () => {
  /* const [isOpen, setIsOpen] = useState(false); */
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#" className="ml-3 text-xl uppercase">
            Aldi Himawan
          </a>
        </a>
        <nav className="flex flex-wrap items-center text-base justify-center md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700">
          <a href="#projects" className="mr-5 hover:text-white">
            Projects
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Skills
          </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
        >
          Contact Me
        </a>
      </div>
    </header>
  );
};

export default Navbar;
