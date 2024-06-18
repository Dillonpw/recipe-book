"use client";
import { useState, useEffect } from "react";
import type { FC } from "react";
import ThemeToggle from "./theme";
import Link from "next/link";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isActive: boolean;
}

const Nav: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activePath, setActivePath] = useState<string>("");

  useEffect(() => {
    setActivePath(window.location.pathname);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed-nav bg-gray-100 shadow-lg transition-all duration-300 dark:bg-zinc-950 dark:text-white">
      {/* Desktop Navigation */}
      <div className="mx-20 hidden py-2 text-2xl md:block">
        <nav className="my-4 flex items-center justify-between">
          <a href="/">
            <h1 className="font-bold">LOGO</h1>
          </a>
          <ul className="mr-4 flex items-center gap-8">
            <Link href={"/recipes"}>Your Recipes</Link>
            <Link href={"/add"}>New Recipe</Link>
          </ul>

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
        {isOpen && (
          <ul className="absolute right-0 z-10 flex w-[60%] flex-col items-end gap-4 rounded-md bg-gray-100 p-4 pb-6 text-black shadow-lg transition-all duration-300 dark:bg-stone-800 dark:text-white">
            <Link href={"/recipes"}>Your Recipes</Link>
            <Link href={"/add"}>New Recipe</Link>
          </ul>
        )}
      </div>
    </header>
  );
};

export default Nav;
