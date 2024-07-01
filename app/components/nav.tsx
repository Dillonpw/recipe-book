"use client";
import { useState } from "react";
import ThemeToggle from "./theme";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed-nav bg-gray-100 shadow-lg transition-all duration-300 dark:bg-[#121212] dark:text-white">
      {/* Desktop Navigation */}
      <div className="mx-20 hidden py-2 text-2xl md:block">
        <nav className="my-4 flex items-center justify-between">
          <a href="/">
            <h1 className="font-bold">Recipe Book</h1>
          </a>

          <ThemeToggle />
        </nav>
      </div>

      {/* Mobile Navigation */}
      <div className="relative mx-5 py-2 text-4xl md:hidden">
        <nav className="my-4 flex items-center justify-between">
          <a href="/">
            <p className="text-2xl font-bold">Recipe Book</p>
          </a>

          <div className="flex items-center">
            <ThemeToggle />

            <button
              className="px-2 hover:scale-110"
              aria-label="dropdown"
              onClick={toggleMenu}
            >
              ☰
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
