"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 320);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      id="top"
      className={cn(
        "backdrop-blur-sm z-[2] sticky top-0 transition-colors duration-300",
        isScrolled
          ? "bg-red-600"
          : "bg-gradient-to-b from-zinc-950/10 to-zinc-red-600/20"
      )}
    >
      <div className="container flex items-center justify-between h-navbar text-white">
        <Link href="/#top" className="w-[200px] text-lg">
          A3 Matemática
        </Link>

        <ul className="flex items-center justify-center gap-4">
          <li>
            <Link
              href="/#por-que"
              className="hover:underline hover:text-zinc-300 transition-colors underline-offset-8"
            >
              Por que?
            </Link>
          </li>
          <li>
            <Link
              href="/#como"
              className="hover:underline hover:text-zinc-300 transition-colors underline-offset-8"
            >
              Como?
            </Link>
          </li>
          <li>
            <Link
              href="/#nosso-time"
              className="hover:underline hover:text-zinc-300 transition-colors underline-offset-8"
            >
              Nosso Time?
            </Link>
          </li>
        </ul>

        <div className="w-[200px]">
          <Button variant={isScrolled ? "secondary" : "default"}>
            Começar
          </Button>
        </div>
      </div>
    </nav>
  );
}
