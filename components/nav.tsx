"use client";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import ThemeToggle from "./theme";
import React from "react";

const recipeLinks: { title: string; href: string; description: string }[] = [
  {
    title: "Home",
    href: "/",
    description: "Go back to the homepage.",
  },
  {
    title: "Recipes",
    href: "/recipe-list",
    description: "Explore various recipes.",
  },
  {
    title: "New Recipe",
    href: "/new-recipe",
    description: "Add a new recipe to your collection.",
  },
  {
    title: "Social",
    href: "/social",
    description: "Connect and share with other food lovers.",
  },
];

export default function Nav() {
  return (
    <header className="min-w-full">
      <div className="flex items-center justify-between p-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/RecipeBook.jpeg"
            alt="logo"
            className="rounded-xl"
            width={50}
            height={50}
          />
          <h1 className="ml-2 text-2xl font-bold">RecipeBook</h1>
        </Link>
        <div className="flex gap-2">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Navigate</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {recipeLinks.map((link) => (
                      <ListItem
                        key={link.title}
                        title={link.title}
                        href={link.href}
                      >
                        {link.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={`block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ${className}`}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
