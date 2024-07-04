"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "./theme";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed-nav bg-gray-100 shadow-lg transition-all duration-300 dark:bg-[#242424] dark:text-white">
      {/* Desktop Navigation */}
      <div className="mx-20 hidden py-2 text-2xl md:block">
        <nav className="my-4 flex items-center justify-between">
          <Image
            src={"/RecipeBook.jpeg"}
            alt="logo"
            className="rounded-xl"
            width={50}
            height={50}
          />

          <Link href="/">
            <h1 className="font-bold">Recipe Book</h1>
          </Link>

          <ThemeToggle />
        </nav>
      </div>

      {/* Mobile Navigation */}
      <div className="relative mx-2 py-2 text-4xl md:hidden">
        <nav className="my-4 flex items-center justify-between">
          <Image
            src={"/RecipeBook.jpeg"}
            alt="logo"
            className="rounded-xl"
            width={50}
            height={50}
          />

          <div className="flex items-center">
            <ThemeToggle />
            <button
              className="hover:scale-110"
              aria-label="dropdown"
              onClick={toggleMenu}
            >
              ☰
            </button>
          </div>
        </nav>
        {isOpen && (
          <>
            <div
              className="fixed inset-0 z-40 bg-black opacity-50"
              onClick={closeMenu}
            ></div>
            <div className="absolute z-50 w-full gap-4 bg-gray-100 text-center text-3xl shadow-lg dark:bg-[#121212] dark:text-white">
              <Link
                href="/new-recipe"
                className="block py-8 hover:bg-gray-200 dark:hover:bg-gray-700"
                onClick={closeMenu}
              >
                Add New Recipe
              </Link>
              <Link
                href="/recipelist"
                className="block py-8 hover:bg-gray-200 dark:hover:bg-gray-700"
                onClick={closeMenu}
              >
                My Recipes
              </Link>
              <Link href="/" onClick={closeMenu} className="block py-8 hover:bg-gray-200 dark:hover:bg-gray-700">Home</Link>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Nav;
