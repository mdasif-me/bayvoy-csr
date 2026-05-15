"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col font-roboto">
      {/* Top Announcement Bar */}
      <div className="bg-[#0D2167] text-white py-2 px-4 text-center text-[11px] md:text-[13px] font-normal tracking-wide font-manrope">
        Autodesigner 2.0 is here. The most popular UI generator just got even better!
      </div>

      {/* Navbar */}
      <nav
        className={cn(
          "transition-all duration-300 px-6 py-5 md:px-24",
          isScrolled || isMobileMenuOpen
            ? "bg-black/30 backdrop-blur-md"
            : "bg-transparent"
        )}
      >
        <div className="w-full flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image 
                src="/logo/logo.svg" 
                alt="tripbooking.ai" 
                width={160} 
                height={40} 
                className="h-8 md:h-10 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            {[
              { name: "Home", active: true },
              { name: "Tours", active: false },
              { name: "Hotels", active: false },
              { name: "Blog", active: false },
              { name: "About", active: false },
              { name: "Contact", active: false }
            ].map((item) => (
              <Link
                key={item.name}
                href={`#${item.name.toLowerCase()}`}
                className={cn(
                  "text-[15px] font-medium transition-colors",
                  item.active
                    ? "text-[#FFB800]"
                    : "text-white hover:text-[#FFB800]"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-6 lg:gap-10">
            <button className="hidden lg:flex items-center gap-2 text-white hover:text-[#FFB800] transition-colors font-medium text-[15px]">
              <Search className="w-4 h-4" />
              Search
            </button>
            <Button
              className="bg-[#FFB800] hover:bg-[#fb8500] text-base text-white font-bold rounded-[40px] px-6 h-8 border-none shadow-md"
            >
              Sign In
            </Button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#1a1a1a] border-t border-white/10 p-6 flex flex-col gap-4 shadow-xl animate-in slide-in-from-top-4 duration-300">
            {["Home", "Tours", "Hotels", "Blog", "About", "Contact"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "text-lg font-medium py-2 border-b border-white/5 transition-colors",
                  item === "Home" ? "text-[#FFB800]" : "text-white active:text-[#FFB800]"
                )}
              >
                {item}
              </Link>
            ))}
            <button className="flex items-center gap-3 text-white font-medium py-4">
              <Search className="w-5 h-5" />
              Search
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
