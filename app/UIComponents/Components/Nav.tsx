"use client";


import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from "react";

type NavLink = {
  label: string;
  href: string;
};

const navLinks: NavLink[] = [
  { label: "Por que UICrypto?", href: "#why-uicrypto" },
  { label: "Beneficios", href: "#benefits" },
  { label: "Serviços", href: "#services" },
  { label: "Features", href: "#features" },
  { label: "FaQs", href: "#faqs" },
];

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const [menuHeight, setMenuHeight] = useState("0px");

  useEffect(() => {
    if (menuRef.current) {
      setMenuHeight(isOpen ? `${menuRef.current.scrollHeight}px` : "0px");
    }
  }, [isOpen]);

  const handScroll = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      const yOffset = -80;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <nav className="w-full shadow-md fixed top-0 left-0  bg-[#0000003f] backdrop-blur-lg">
      <div className="px-[8px] lg:px-[16%] py-8 flex items-center justify-between">
        <motion.div
          initial={{x: -100, opacity: 0}}
          animate={{x: 0, opacity: 1}}
          transition={{duration: 0.5}}
         className="flex-shrink-0">
          <a href="#" className="text-3xl font-bold Unbounded">
            <span className="text-[var(--prime-color)]">Ui</span>cryp
            <span className="text-[var(--prime-color)]">to</span>
          </a>
        </motion.div>
        <motion.div
           initial={{y: -100, opacity: 0}}
           animate={{y: 0, opacity: 1}}
           transition={{duration: 0.5}}
        className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handScroll(link.href)}
              className="nav-links text-white hover:text-[var(--prime-color)] p-2 rounded-2xl transition font-medium cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </motion.div>
        <motion.div
          initial={{x: 100, opacity: 0}}
          animate={{x: 0, opacity: 1}}
          transition={{duration: 0.5}}
         className="hidden md:block">
          <a href="https://calendly.com/">
            <button
              onClick={() => handScroll("#book")}
              className="pb-2 border border-white text-white hover:border-transparent hover:text-white hover:bg-[var(--prime-color)] font-semibold px-5 py-2 rounded-md transition-all duration-300 cursor-pointer"
            >
              Book Now
            </button>
          </a>
        </motion.div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white text-2xl focus:outline-none"
        >
          ☰
        </button>
      </div>
      <div
        ref={menuRef}
        style={{ maxHeight: menuHeight }}
        className="md:hidden overflow-hidden transition-max-height duration-500 ease-in-out"
      >
        <nav className="flex px-[8%] py-5 flex-col space-y-4 bg-[#0000003f] backdrop-blur-lg">
          {navLinks.map((link => (
            <button
              key={link.href}
              onClick={() => handScroll(link.href)}
              className="nav-links text-white hover:text-[var(--prime-color)] p-2 rounded-2xl transition font-medium cursor-pointer"
            >
              {link.label}
            </button>
          )))}
          <motion.div
            initial={{x: 100, opacity: 0}}
            animate={{x: 0, opacity: 1}}
            transition={{duration: 0.5}}
          className="mt-2">
            <a href="https://calendly.com/">
              <button
                onClick={() => handScroll("#book")}
                className="pb-2 border border-white w-full bg-[var(--prime-color)] text-white hover:border-transparent hover:text-white hover:bg-[var(--prime-color)] font-semibold px-5 py-2 rounded-md transition-all duration-300 cursor-pointer"
              >
                Book Now
              </button>
            </a>
          </motion.div>
        </nav>
      </div>
    </nav>
  );
};
