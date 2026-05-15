"use client";

import { useEffect, useState } from "react";
import { Menu, X, User, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

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

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Hotels", href: "/hotels" },
    { name: "Tours", href: "/tours" },
    { name: "Cars", href: "/cars" },
    { name: "Destinations", href: "/destinations" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? "backdrop-blur-xl bg-white/90 shadow-lg py-3 border-b border-slate-200/50"
        : "bg-transparent py-6"
        }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-0 group relative z-50">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className={`w-14 h-14 relative transition-all duration-300 ${isScrolled ? "brightness-100" : "brightness-110 shadow-glow"}`}
            >
              <Image 
                src="/images/icon/tranfarent_icon.png" 
                alt="BayVoy Logo" 
                fill 
                className="object-contain" 
                priority
              />
            </motion.div>
            <span className={`text-2xl font-bold tracking-tighter transition-colors duration-300 ${isScrolled ? "text-slate-900" : "text-white"}`}>
              BayVoy
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-2 font-medium text-sm transition-all duration-300 group ${
                    isScrolled 
                      ? (isActive ? "text-primary" : "text-slate-600 hover:text-primary") 
                      : (isActive ? "text-white" : "text-white/80 hover:text-white")
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-4 right-4 h-[2px] rounded-full transition-all duration-300 transform origin-left ${
                    isActive 
                      ? (isScrolled ? "bg-primary scale-x-100" : "bg-white scale-x-100") 
                      : "bg-primary scale-x-0 group-hover:scale-x-100"
                  }`} />
                </Link>
              );
            })}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/auth/login">
              <Button 
                variant="ghost" 
                className={`text-sm font-semibold transition-all duration-300 ${
                  isScrolled ? "text-slate-700 hover:bg-slate-100" : "text-white hover:bg-white/10"
                }`}
              >
                Sign In
              </Button>
            </Link>
            <Link href="/auth/register">
              <Button className="bg-primary text-white hover:bg-primary/90 rounded-full px-7 h-11 text-sm font-bold transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5">
                Register
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className={`md:hidden p-2 rounded-xl transition-colors relative z-50 ${
              isScrolled ? "text-slate-900 bg-slate-100" : "text-white bg-white/10"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </nav>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/60 backdrop-blur-md z-40 md:hidden"
                onClick={() => setIsMenuOpen(false)}
              />
              <motion.div
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: "100%", opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-white z-50 md:hidden shadow-2xl p-8 pt-24"
              >
                <div className="flex flex-col gap-2">
                  <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-4">Navigation</p>
                  {navLinks.map((link, index) => {
                    const isActive = pathname === link.href;
                    return (
                      <motion.div
                        key={link.name}
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          href={link.href}
                          className={`flex items-center justify-between font-bold text-xl py-4 border-b border-slate-50 group ${
                            isActive ? "text-primary" : "text-slate-900"
                          }`}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {link.name}
                          <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${isActive ? "translate-x-0" : "-translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"}`} />
                        </Link>
                      </motion.div>
                    );
                  })}
                  
                  <div className="mt-8 flex flex-col gap-4">
                    <Link href="/auth/login" onClick={() => setIsMenuOpen(false)}>
                      <Button variant="outline" className="w-full rounded-2xl py-7 text-lg border-2">
                        Sign In
                      </Button>
                    </Link>
                    <Link href="/auth/register" onClick={() => setIsMenuOpen(false)}>
                      <Button className="w-full bg-primary text-white rounded-2xl py-7 text-lg shadow-xl shadow-primary/20">
                        Join BayVoy
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;
