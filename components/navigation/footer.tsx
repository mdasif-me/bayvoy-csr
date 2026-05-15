"use client";

import {
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  ExternalLink,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  QUICK_LINKS, 
  SERVICES, 
  SOCIAL_LINKS, 
  LEGAL_LINKS 
} from "@/constants/navigation";

// --- Sub-components ---

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link
    href={href}
    className="text-primary-foreground/70 hover:text-primary transition-all duration-300 flex items-center group/link"
  >
    <span className="w-0 group-hover/link:w-3 h-[1.5px] bg-primary mr-0 group-hover/link:mr-2 transition-all duration-300" />
    {children}
  </Link>
);

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="bg-navy text-primary-foreground relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

      {/* Newsletter Section */}
      <div className="border-b border-primary-foreground/10 relative z-10">
        <div className="container mx-auto px-4 lg:px-8 py-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h3 className="text-2xl md:text-4xl font-bold mb-4 tracking-tight">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-primary-foreground/70 mb-8 text-lg">
              Get exclusive deals, travel tips, and destination guides delivered
              to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto" onSubmit={(e) => e.preventDefault()}>
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 h-14 bg-primary-foreground/5 border-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/40 rounded-2xl focus:ring-2 focus:ring-primary/20 transition-all outline-none"
              />
              <Button variant="ocean" size="xl" className="shadow-lg shadow-primary/10 px-10">
                Subscribe
              </Button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          
          {/* Brand Column */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <Link href="/" className="relative flex items-center group/logo w-fit">
              <div className="relative">
                <div className="w-20 h-20 sm:w-28 sm:h-28 relative transition-all duration-500 transform group-hover/logo:scale-110 drop-shadow-[0_0_20px_rgba(14,165,233,0.3)]">
                  <Image 
                    src="/logo/favicon.png" 
                    alt="BayVoy" 
                    fill 
                    className="object-contain" 
                  />
                </div>
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-1 -right-1 w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full p-1.5 shadow-xl border border-slate-100"
                >
                  <Image src="/logo/earth.svg" alt="Earth Icon" fill className="object-contain p-1" />
                </motion.div>
              </div>
              <div className="flex flex-col ml-3">
                <span className="text-4xl font-bold tracking-tighter">BayVoy</span>
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Explore The World</span>
              </div>
            </Link>
            <p className="text-primary-foreground/70 leading-relaxed text-lg">
              Your trusted travel partner for unforgettable adventures around
              the world. Making memories that last a lifetime.
            </p>
            <div className="flex items-center gap-4">
              {SOCIAL_LINKS.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ y: -5 }}
                  className="w-11 h-11 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 group"
                  aria-label={social.name}
                >
                  <social.Icon />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-bold text-xl mb-8 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-primary rounded-full" />
            </h4>
            <ul className="space-y-4">
              {QUICK_LINKS.map((link) => (
                <li key={link.name}>
                  <FooterLink href={link.href}>{link.name}</FooterLink>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-bold text-xl mb-8 relative inline-block">
              Our Services
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-primary rounded-full" />
            </h4>
            <ul className="space-y-4">
              {SERVICES.map((link) => (
                <li key={link.name}>
                  <FooterLink href={link.href}>{link.name}</FooterLink>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Column */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-bold text-xl mb-8 relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-primary rounded-full" />
            </h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 group/contact">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover/contact:bg-primary group-hover/contact:text-primary-foreground transition-all duration-300">
                  <MapPin className="w-6 h-6 text-primary group-hover/contact:text-primary-foreground" />
                </div>
                <div className="pt-1">
                  <p className="text-primary-foreground/40 text-xs font-bold uppercase tracking-widest mb-1">Office Address</p>
                  <span className="text-primary-foreground/70 text-lg">123 Travel Street, Dhaka 1000</span>
                </div>
              </li>
              <li className="flex items-center gap-4 group/contact">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover/contact:bg-primary group-hover/contact:text-primary-foreground transition-all duration-300">
                  <Phone className="w-6 h-6 text-primary group-hover/contact:text-primary-foreground" />
                </div>
                <div className="pt-1">
                  <p className="text-primary-foreground/40 text-xs font-bold uppercase tracking-widest mb-1">Phone Number</p>
                  <span className="text-primary-foreground/70 text-lg">+880 1234 567890</span>
                </div>
              </li>
              <li className="flex items-center gap-4 group/contact">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover/contact:bg-primary group-hover/contact:text-primary-foreground transition-all duration-300">
                  <Mail className="w-6 h-6 text-primary group-hover/contact:text-primary-foreground" />
                </div>
                <div className="pt-1">
                  <p className="text-primary-foreground/40 text-xs font-bold uppercase tracking-widest mb-1">Email Address</p>
                  <span className="text-primary-foreground/70 text-lg">info@bayvoy.com</span>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar Content */}
      <div className="border-t border-primary-foreground/10 bg-black/10 relative z-10">
        <div className="container mx-auto px-4 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-primary-foreground/50 text-sm">
              © {new Date().getFullYear()} <span className="text-primary-foreground/80 font-bold">BayVoy</span>. All rights reserved.
            </div>
            
            {/* Scroll to top button */}
            <button 
              onClick={scrollToTop}
              className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500 hover:-translate-y-2 group"
              aria-label="Back to top"
            >
              <ArrowUp className="w-5 h-5 group-hover:animate-bounce" />
            </button>

            <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-sm">
              {LEGAL_LINKS.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-primary-foreground/50 hover:text-white transition-colors flex items-center gap-1 group/link"
                >
                  {item.name}
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
