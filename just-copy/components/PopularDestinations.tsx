"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const destinations = [
  {
    city: "London",
    tours: 45,
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070&auto=format&fit=crop",
  },
  {
    city: "New York",
    tours: 52,
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=2070&auto=format&fit=crop",
  },
  {
    city: "Paris",
    tours: 38,
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop",
  },
];

const PopularDestinations = () => {
  return (
    <section className="py-24 px-6 md:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight font-manrope">
              Explore Popular Destinations
            </h2>
            <p className="text-gray-500 text-lg">
              Check out our most visited destinations and start planning your next dream trip today.
            </p>
          </div>
          <Button variant="outline" className="rounded-full px-8 h-12 border-gray-200 font-bold hover:bg-gray-50 hover:text-gray-900 transition-all">
            See All Destinations
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((dest) => (
            <div key={dest.city} className="group cursor-pointer relative overflow-hidden rounded-[32px] aspect-[4/5] shadow-lg transition-transform hover:-translate-y-2 duration-500">
              <Image
                src={dest.image}
                alt={dest.city}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-white/80 text-sm font-medium mb-1">{dest.tours} Tours</p>
                <div className="flex items-center justify-between">
                  <h3 className="text-white text-2xl font-bold">{dest.city}</h3>
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* CTA Card */}
          <div className="bg-[#0047BB] rounded-[32px] p-8 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center -rotate-45 group-hover:rotate-0 transition-transform duration-500">
                <ArrowRight className="w-8 h-8 text-white" />
              </div>
            </div>
            <div className="relative z-10 mt-auto">
              <p className="text-white/60 text-lg mb-2">Want to see more?</p>
              <h3 className="text-white text-3xl font-bold mb-8 leading-tight">
                Discover All Our Amazing Spots
              </h3>
              <Button className="bg-[#FFB800] hover:bg-[#fb8500] text-white font-bold rounded-full px-8 h-12 shadow-md transition-all active:scale-95">
                Go Now
              </Button>
            </div>
            {/* Abstract Background Circle */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;
