import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "./components/nav";
import Footer from "./components/footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Recipe Book",
  description:
    "Store and find recipes you love, without the clutter of ads and blogs",
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
      className="bg-gray-50 dark:bg-[#1c1b1b] dark:text-gray-100 h-full"
      lang="en"
    >
      <body className={`${inter.className} h-full flex flex-col`}>
        <Nav />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
