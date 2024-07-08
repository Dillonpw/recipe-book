"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "./theme";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  const links = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Recipes",
      href: "/recipe-list",
    },
    {
      label: "New Recipe",
      href: "/new-recipe",
    },
  ];

  return (
    <header className="fixed-nav bg-gray-100 shadow-lg transition-all duration-300 dark:bg-zinc-950 dark:text-white">
      {/* Desktop Navigation */}
      <div className="mx-10 hidden py-2 text-2xl md:block">
        <nav className="my-4 flex items-center justify-between">
          <Link href="/" className="flex gap-2 items-center">
            <Image
              src={"/RecipeBook.jpeg"}
              alt="logo"
              className="rounded-xl"
              width={50}
              height={50}
            />
            <h1 className="font-bold">RecipeBook</h1>
          </Link>


          <Link href="/">
          </Link>

          <ThemeToggle />
        </nav>
      </div>

      {/* Mobile Navigation */}
      <div className="relative mx-2 py-2 text-4xl md:hidden">
        <nav className="my-4 flex items-center justify-between">
          <Link href="/">
            <Image
              src={"/RecipeBook.jpeg"}
              alt="logo"
              className="rounded-xl"
              width={50}
              height={50}
            />
          </Link>

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
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={closeMenu}
                  className="block py-8 hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Nav;
