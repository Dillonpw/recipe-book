import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "./components/nav";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Recipe Book",
  description: "Store and find recipes you love, without the clutter of ads and blogs",
  icons: {
    icon: "/RecipeBook.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className="bg-gray-100 dark:bg-[#1c1b1b] dark:text-gray-100"
      lang="en"
    >
      <body className={`${inter.className}`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
