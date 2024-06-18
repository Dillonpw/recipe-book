import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "./components/nav";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100 dark:bg-zinc-950 dark:text-gray-100`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
