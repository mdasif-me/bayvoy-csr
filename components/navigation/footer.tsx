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

// --- Constants ---

const SOCIAL_LINKS = [
  { 
    name: "Facebook", 
    href: "#", 
    Icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
    ) 
  },
  { 
    name: "Instagram", 
    href: "#", 
    Icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
    ) 
  },
  { 
    name: "Twitter", 
    href: "#", 
    Icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
    ) 
  },
  { 
    name: "Youtube", 
    href: "#", 
    Icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 2-2 68.4 68.4 0 0 1 15 0 2 2 0 0 1 2 2 24.12 24.12 0 0 1 0 10 2 2 0 0 1-2 2 68.4 68.4 0 0 1-15 0 2 2 0 0 1-2-2Z"/><path d="m10 15 5-3-5-3z"/></svg>
    ) 
  },
];

const QUICK_LINKS = [
  { name: "About Us", href: "/about" },
  { name: "Destinations", href: "/destinations" },
  { name: "Tour Packages", href: "/tours" },
  { name: "Travel Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
  { name: "Become a Partner", href: "/become-partner" },
];

const SERVICES = [
  { name: "Hotel Booking", href: "/hotels" },
  { name: "Car Rental", href: "/cars" },
  { name: "Guided Tours", href: "/tours" },
  { name: "Custom Packages", href: "/packages" },
  { name: "Travel Insurance", href: "/insurance" },
];

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
              <div className="w-20 h-10 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover/logo:scale-105">
                <Image 
                  src="/images/icon/tranfarent_icon.png" 
                  alt="BayVoy" 
                  width={80} 
                  height={40} 
                  className="object-contain" 
                />
              </div>
              <span className="absolute ml-14 text-3xl font-bold tracking-tighter">BayVoy</span>
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

            <div className="flex items-center gap-8 text-sm">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase().replace(/ /g, "-")}`}
                  className="text-primary-foreground/50 hover:text-primary transition-colors flex items-center gap-1 group/link"
                >
                  {item}
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
