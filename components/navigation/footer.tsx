"use client";

import {
  Mail,
  Phone,
  MapPin,
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
    <footer id="contact" className="bg-navy text-primary-foreground">
      {/* Newsletter */}
      <div className="border-b border-primary-foreground/10">
        <div className="container mx-auto px-4 lg:px-8 py-12">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-primary-foreground/70 mb-6">
              Get exclusive deals, travel tips, and destination guides delivered
              to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 h-12 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 rounded-xl"
              />
              <Button variant="ocean" size="lg">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="relative flex items-center mb-4">
              <div className="w-20 h-10 rounded-xl flex items-center justify-center">
                <Image src="/images/icon/tranfarent_icon.png" alt="bayvoy" width={80} height={40} className="object-contain" />
              </div>
              <span className="absolute ml-14 text-2xl font-bold">BayVoy</span>
            </Link>
            <p className="text-primary-foreground/70 mb-6">
              Your trusted travel partner for unforgettable adventures around
              the world.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <FacebookIcon />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <InstagramIcon />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <TwitterIcon />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <YoutubeIcon />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-primary-foreground/70 hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/destinations"
                  className="text-primary-foreground/70 hover:text-primary transition-colors"
                >
                  Destinations
                </Link>
              </li>
              <li>
                <Link
                  href="/tours"
                  className="text-primary-foreground/70 hover:text-primary transition-colors"
                >
                  Tour Packages
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-primary-foreground/70 hover:text-primary transition-colors"
                >
                  Travel Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-primary-foreground/70 hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/become-partner"
                  className="text-primary-foreground/70 hover:text-primary transition-colors"
                >
                  Become a Partner
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/hotels"
                  className="text-primary-foreground/70 hover:text-primary transition-colors"
                >
                  Hotel Booking
                </Link>
              </li>
              <li>
                <Link
                  href="/cars"
                  className="text-primary-foreground/70 hover:text-primary transition-colors"
                >
                  Car Rental
                </Link>
              </li>
              <li>
                <Link
                  href="/tours"
                  className="text-primary-foreground/70 hover:text-primary transition-colors"
                >
                  Guided Tours
                </Link>
              </li>
              <li>
                <Link
                  href="/packages"
                  className="text-primary-foreground/70 hover:text-primary transition-colors"
                >
                  Custom Packages
                </Link>
              </li>
              <li>
                <Link
                  href="/insurance"
                  className="text-primary-foreground/70 hover:text-primary transition-colors"
                >
                  Travel Insurance
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-primary-foreground/70">
                  123 Travel Street, Dhaka 1000, Bangladesh
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-primary-foreground/70">
                  +880 1234 567890
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-primary-foreground/70">
                  info@bayvoy.com
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © {new Date().getFullYear()} BayVoy. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <Link
                href="/privacy"
                className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookies"
                className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
