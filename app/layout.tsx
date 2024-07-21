import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
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
    <html lang="en" className="min-h-full">
      <body
        className={`${inter.className} flex min-h-full flex-col bg-gray-300/90 dark:bg-zinc-950`}
      >
        <Nav />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
