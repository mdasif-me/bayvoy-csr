"use client";

import {
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// Custom SVG Social Icons to avoid lucide-react version issues
const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);

const YoutubeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 2-2 68.4 68.4 0 0 1 15 0 2 2 0 0 1 2 2 24.12 24.12 0 0 1 0 10 2 2 0 0 1-2 2 68.4 68.4 0 0 1-15 0 2 2 0 0 1-2-2Z"/><path d="m10 15 5-3-5-3z"/></svg>
);

const Footer = () => {
  return (
    <footer id="contact" className="bg-navy text-white overflow-hidden">
      {/* Newsletter Section */}
      <div className="relative border-b border-white/5">
        <div className="absolute inset-0 bg-ocean/5 pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 py-16 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ocean/10 text-ocean text-sm font-medium mb-6 animate-fade-in">
              <Send className="w-4 h-4" />
              <span>Newsletter</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-white/60 mb-8 text-lg max-w-2xl mx-auto">
              Get exclusive deals, travel tips, and destination guides delivered
              to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto" onSubmit={(e) => e.preventDefault()}>
              <Input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 h-14 bg-white/5 border-white/10 text-white placeholder:text-white/40 rounded-2xl focus:border-ocean/50 focus:ring-ocean/20 transition-all"
              />
              <Button variant="ocean" size="xl" className="shadow-lg shadow-ocean/20">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand Column */}
          <div className="space-y-8">
            <Link href="/" className="flex items-center gap-0 group">
              <div className="w-14 h-14 relative transition-transform group-hover:scale-105 duration-300">
                <Image 
                  src="/images/icon/tranfarent_icon.png" 
                  alt="BayVoy Logo" 
                  fill 
                  className="object-contain"
                />
              </div>
              <span className="text-3xl font-bold tracking-tighter">BayVoy</span>
            </Link>
            <p className="text-white/60 leading-relaxed text-lg">
              Your trusted travel partner for unforgettable adventures around
              the world. We make your dream journeys come true.
            </p>
            <div className="flex items-center gap-4">
              {[
                { Icon: FacebookIcon, href: "https://facebook.com" },
                { Icon: InstagramIcon, href: "https://instagram.com" },
                { Icon: TwitterIcon, href: "https://twitter.com" },
                { Icon: YoutubeIcon, href: "https://youtube.com" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center hover:bg-ocean hover:text-white transition-all duration-300 border border-white/5 hover:border-ocean/30 group"
                >
                  <social.Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-xl mb-8 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-ocean rounded-full" />
            </h4>
            <ul className="space-y-4">
              {[
                { name: "About Us", href: "/about" },
                { name: "Destinations", href: "/destinations" },
                { name: "Tour Packages", href: "/tours" },
                { name: "Travel Blog", href: "/blog" },
                { name: "Contact", href: "/contact" },
                { name: "Become a Partner", href: "/become-partner" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-ocean transition-all duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-4 h-0.5 bg-ocean mr-0 group-hover:mr-2 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Content */}
          <div>
            <h4 className="font-bold text-xl mb-8 relative inline-block">
              Our Services
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-ocean rounded-full" />
            </h4>
            <ul className="space-y-4">
              {[
                { name: "Hotel Booking", href: "/hotels" },
                { name: "Car Rental", href: "/cars" },
                { name: "Guided Tours", href: "/tours" },
                { name: "Custom Packages", href: "/packages" },
                { name: "Travel Insurance", href: "/insurance" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-ocean transition-all duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-4 h-0.5 bg-ocean mr-0 group-hover:mr-2 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-xl mb-8 relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-ocean rounded-full" />
            </h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-ocean/10 group-hover:border-ocean/20 transition-all duration-300">
                  <MapPin className="w-6 h-6 text-ocean" />
                </div>
                <div className="pt-1">
                  <p className="text-white/40 text-xs uppercase tracking-widest font-bold mb-1">Address</p>
                  <span className="text-white/70">123 Travel Street, Dhaka 1000, Bangladesh</span>
                </div>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-ocean/10 group-hover:border-ocean/20 transition-all duration-300">
                  <Phone className="w-6 h-6 text-ocean" />
                </div>
                <div className="pt-1">
                  <p className="text-white/40 text-xs uppercase tracking-widest font-bold mb-1">Phone</p>
                  <span className="text-white/70">+880 1234 567890</span>
                </div>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-ocean/10 group-hover:border-ocean/20 transition-all duration-300">
                  <Mail className="w-6 h-6 text-ocean" />
                </div>
                <div className="pt-1">
                  <p className="text-white/40 text-xs uppercase tracking-widest font-bold mb-1">Email</p>
                  <span className="text-white/70">info@bayvoy.com</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer Bar */}
      <div className="border-t border-white/5 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-white/40 text-sm">
              © {new Date().getFullYear()} <span className="text-white/60 font-bold">BayVoy</span>. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-sm">
              {[
                { name: "Privacy Policy", href: "/privacy" },
                { name: "Terms of Service", href: "/terms" },
                { name: "Cookie Policy", href: "/cookies" },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white/40 hover:text-white transition-colors"
                >
                  {item.name}
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
