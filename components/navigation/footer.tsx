import { Mail, Phone, MapPin, Globe, MessageCircle, Send, Camera } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <div className="w-40 h-10 relative">
                <Image src="/images/favicon.png" alt="BayVoy" fill className="object-contain brightness-200" />
              </div>
            </Link>
            <p className="text-slate-400 leading-relaxed">
              Discover your next adventure with BayVoy. We provide the best travel experiences, 
              from tropical escapes to cultural journeys.
            </p>
            <div className="flex gap-4">
              {[MessageCircle, Send, Camera, Globe].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#0ea5e9] transition-colors">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-slate-400">
              {[
                { name: "About Us", href: "/about" },
                { name: "Destinations", href: "/destinations" },
                { name: "Tours", href: "/tours" },
                { name: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-white transition-colors">{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-slate-400">
              {[
                { name: "Hotel Booking", href: "/hotels" },
                { name: "Tour Packages", href: "/tours" },
                { name: "Car Rental", href: "/cars" },
                { name: "Destination Guides", href: "/destinations" },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-white transition-colors">{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#0ea5e9] shrink-0" />
                <span>123 Travel Street, Adventure City, World</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#0ea5e9] shrink-0" />
                <span>+1 234 567 890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#0ea5e9] shrink-0" />
                <span>hello@bayvoy.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} BayVoy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
