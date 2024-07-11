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
      className="h-full bg-gray-100 dark:bg-zinc-950 dark:text-gray-100"
      lang="en"
    >
      <body
        className={`${inter.className} flex min-h-screen flex-col bg-gray-100 dark:bg-zinc-950 md:mx-40`}
      >
        <Nav />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
