import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer id="contact" className="bg-navy text-white">
      {/* Newsletter */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 lg:px-8 py-12">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-white/70 mb-6">
              Get exclusive deals, travel tips, and destination guides delivered
              to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 h-12 bg-white/10 border-white/20 text-white placeholder:text-white/50 rounded-xl"
              />
              <Button className="bg-ocean hover:bg-ocean/90 text-white h-12 px-8 rounded-xl">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="relative flex items-center group">
              <div className="w-14 h-14 relative">
                <Image 
                  src="/images/icon/tranfarent_icon.png" 
                  alt="BayVoy" 
                  fill 
                  className="object-contain" 
                />
              </div>
              <span className="text-2xl font-bold ml-2">BayVoy</span>
            </Link>
            <p className="text-white/70 leading-relaxed">
              Your trusted travel partner for unforgettable adventures around
              the world. Discover your next journey with us.
            </p>
            <div className="flex items-center gap-4">
              {[
                { Icon: Facebook, href: "#" },
                { Icon: Instagram, href: "#" },
                { Icon: Twitter, href: "#" },
                { Icon: Youtube, href: "#" },
              ].map(({ Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-ocean transition-all duration-300 group"
                >
                  <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { name: "About Us", href: "/about" },
                { name: "Destinations", href: "/destinations" },
                { name: "Tour Packages", href: "/tours" },
                { name: "Travel Blog", href: "/blog" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-ocean transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-ocean/50" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-6">Services</h4>
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
                    className="text-white/70 hover:text-ocean transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-ocean/50" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-ocean/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-ocean" />
                </div>
                <span className="text-white/70 pt-1">
                  123 Travel Street, Dhaka 1000, Bangladesh
                </span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-ocean/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-ocean" />
                </div>
                <span className="text-white/70">+880 1234 567890</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-ocean/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-ocean" />
                </div>
                <span className="text-white/70">info@bayvoy.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-black/20">
        <div className="container mx-auto px-4 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-white/50 text-sm">
              © {new Date().getFullYear()} BayVoy. All rights reserved.
            </p>
            <div className="flex items-center gap-8 text-sm">
              <Link href="/privacy" className="text-white/50 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-white/50 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-white/50 hover:text-white transition-colors">
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
