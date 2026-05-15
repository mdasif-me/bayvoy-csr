"use client";

import { useEffect, useState } from "react";
import { Menu, X, User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { NAV_LINKS } from "@/constants/navigation";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    if (!isHomePage) {
      setIsScrolled(true);
      return;
    }
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  const navLinks = NAV_LINKS;

  const navTextClass = isScrolled
    ? "text-slate-900 hover:text-[#0ea5e9]"
    : "text-white/90 hover:text-white";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "backdrop-blur-xl bg-white/80 shadow-md py-4"
        : "bg-transparent py-6"
        }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group relative z-50">
            <div className="relative">
              <div className={`w-16 h-16 sm:w-24 sm:h-24 relative transition-all duration-500 transform group-hover:scale-110 ${
                isScrolled ? "brightness-100 drop-shadow-md" : "brightness-110 drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]"
              }`}>
                <Image 
                  src="/logo/favicon.png" 
                  alt="BayVoy" 
                  fill 
                  className="object-contain" 
                  priority
                />
              </div>
              {/* Floating Icon Logo */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-1 -right-1 w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full p-1 shadow-lg hidden sm:block border border-slate-100"
              >
                <Image src="/logo/earth.svg" alt="Earth" fill className="object-contain p-1" />
              </motion.div>
            </div>
            <div className="flex flex-col -gap-1">
              <span className={`text-3xl font-bold tracking-tighter transition-colors duration-300 ${isScrolled ? "text-slate-900" : "text-white"}`}>
                BayVoy
              </span>
              <span className={`text-[10px] font-bold uppercase tracking-[0.2em] opacity-60 transition-colors ${isScrolled ? "text-slate-500" : "text-white/60"}`}>
                Travel & Tours
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`font-medium transition-colors ${navTextClass} ${pathname === link.href ? "text-[#0ea5e9]" : ""
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/auth/login">
              <Button variant="ghost" className="text-sm font-medium hover:text-primary transition-colors">
                Sign In
              </Button>
            </Link>
            <Link href="/auth/register">
              <Button className="bg-primary text-white hover:opacity-90 rounded-full px-6 transition-all shadow-md shadow-primary/20">
                Register
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 transition-colors ${isScrolled ? "text-slate-900" : "text-white"}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-4 right-4 bg-white rounded-2xl shadow-2xl p-6 mt-4 animate-fade-in-up border border-slate-100">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`font-medium py-2 border-b border-slate-50 last:border-0 ${pathname === link.href ? "text-[#0ea5e9]" : "text-slate-900"
                    }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <Link href="/auth/login" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="outline" className="w-full rounded-xl py-6">
                    Sign In
                  </Button>
                </Link>
                <Link href="/auth/register" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-primary text-white rounded-xl py-6 shadow-lg shadow-primary/20">
                    Register Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
