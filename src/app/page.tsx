"use client";

import About from "@/components/about";
import Contact from "@/components/contact";
import Header from "@/components/header";
import Home from "@/components/home";
import Portfolio from "@/components/portfolio";
import Image from "next/image";
import { use, useEffect, useRef } from "react";

export default function Start() {
  const home = useRef<HTMLDivElement>(null);
  const portfolio = useRef<HTMLDivElement>(null);
  const about = useRef<HTMLDivElement>(null);
  const contact = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    window.scrollTo({
      top: ref.current?.offsetTop || 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollToSection(home);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header
        onHome={() => scrollToSection(home)}
        onPortfolio={() => scrollToSection(portfolio)}
        onAbout={() => scrollToSection(about)}
        onContact={() => scrollToSection(contact)}
      />
      <Home homeRef={home} />
      <Portfolio portfolioRef={portfolio} />
      <About aboutRef={about} />
      <Contact contactRef={contact} />

      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>
    </main>
  );
}
