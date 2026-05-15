"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, Heart, MessageCircle, Share2, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const footerLinks = {
    Company: ["About Us", "Our Team", "Careers", "Blog"],
    Support: ["Contact Us", "FAQ", "Privacy Policy", "Terms & Conditions"],
    Services: ["Tours", "Hotels", "Car Rentals", "Flights"],
  };

  return (
    <footer className="bg-gray-900 text-white pt-24 pb-12 px-6 md:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          {/* Logo and Info */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-8">
              <Image 
                src="/logo/logo.svg" 
                alt="tripbooking.ai" 
                width={200} 
                height={50} 
                className="brightness-0 invert h-10 w-auto"
              />
            </Link>
            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-md">
              We provide the best travel experiences for you and your family. Start your journey with us today and explore the world like never before.
            </p>
            <div className="flex gap-4">
              {[Mail, MessageCircle, Heart, Share2].map((Icon, idx) => (
                <div key={idx} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center cursor-pointer hover:bg-[#FFB800] transition-all hover:-translate-y-1">
                  <Icon className="w-5 h-5 text-white" />
                </div>
              ))}
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 md:grid-cols-3 gap-8">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="text-lg font-bold mb-6 text-white">{title}</h4>
                <ul className="flex flex-col gap-4">
                  {links.map((link) => (
                    <li key={link}>
                      <Link href="#" className="text-gray-400 hover:text-[#FFB800] transition-colors">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-3">
            <h4 className="text-lg font-bold mb-6">Newsletter</h4>
            <p className="text-gray-400 mb-6">
              Subscribe to get latest updates and offers.
            </p>
            <div className="flex flex-col gap-4">
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl h-14 px-6 focus:outline-none focus:border-[#FFB800] transition-colors"
                />
              </div>
              <Button className="bg-[#FFB800] hover:bg-[#fb8500] text-white font-bold rounded-2xl h-14 w-full shadow-lg">
                Subscribe Now
              </Button>
            </div>
          </div>
        </div>

        {/* Contact Info Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10 border-y border-white/5 mb-10">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#0047BB]/20 flex items-center justify-center">
              <Mail className="w-6 h-6 text-[#0047BB]" />
            </div>
            <div>
              <p className="text-gray-400 text-xs uppercase tracking-wider">Email Us</p>
              <p className="text-white font-bold">hello@tripbooking.ai</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#FFB800]/20 flex items-center justify-center">
              <Phone className="w-6 h-6 text-[#FFB800]" />
            </div>
            <div>
              <p className="text-gray-400 text-xs uppercase tracking-wider">Call Us</p>
              <p className="text-white font-bold">+1 (234) 567 890</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
              <MapPin className="w-6 h-6 text-green-500" />
            </div>
            <div>
              <p className="text-gray-400 text-xs uppercase tracking-wider">Our Office</p>
              <p className="text-white font-bold">123 Street, New York, USA</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">
            © 2024 tripbooking.ai. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-gray-500">
            <Link href="#" className="hover:text-white">Privacy Policy</Link>
            <Link href="#" className="hover:text-white">Terms of Service</Link>
            <Link href="#" className="hover:text-white">Cookies Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
