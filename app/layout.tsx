import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
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
        className={`${inter.className} flex min-h-full flex-col bg-blue-200/30 dark:bg-zinc-950`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Nav />
          <main className="flex-grow">{children}</main>
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  );
}
