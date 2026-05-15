"use client";

import React from "react";
import Image from "next/image";
import { Star, Clock, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const tours = [
  {
    id: 1,
    title: "Beautiful Japan Cherry Blossom Tour",
    location: "Tokyo, Japan",
    duration: "10 Days",
    rating: 4.9,
    price: 2450,
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2070&auto=format&fit=crop",
    badge: "Top Rated",
    badgeColor: "bg-orange-500",
  },
  {
    id: 2,
    title: "Grand Canyon Adventure Expedition",
    location: "Arizona, USA",
    duration: "5 Days",
    rating: 4.8,
    price: 1200,
    image: "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?q=80&w=2070&auto=format&fit=crop",
    badge: "Best Sale",
    badgeColor: "bg-blue-500",
  },
  {
    id: 3,
    title: "Alpine Wonders: Switzerland Guided Tour",
    location: "Zurich, Switzerland",
    duration: "7 Days",
    rating: 5.0,
    price: 3100,
    image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=2070&auto=format&fit=crop",
    badge: "New Arrival",
    badgeColor: "bg-green-500",
  },
];

const FeaturedTours = () => {
  return (
    <section className="py-24 px-6 md:px-24 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-manrope">
            Our Featured Tours
          </h2>
          <p className="text-gray-500 text-lg">
            Discover the most incredible travel experiences curated just for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {tours.map((tour) => (
            <div key={tour.id} className="bg-white rounded-[32px] overflow-hidden shadow-md group hover:shadow-xl transition-all duration-300">
              {/* Tour Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={tour.image}
                  alt={tour.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute top-6 left-6 ${tour.badgeColor} text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider`}>
                  {tour.badge}
                </div>
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md p-2 rounded-full shadow-lg">
                  <Star className="w-5 h-5 text-[#FFB800] fill-[#FFB800]" />
                </div>
              </div>

              {/* Tour Details */}
              <div className="p-8">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-[#FFB800]" />
                    {tour.duration}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-[#FFB800]" />
                    {tour.location}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-6 line-clamp-2 min-h-[64px] group-hover:text-[#0047BB] transition-colors">
                  {tour.title}
                </h3>

                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-400">From</span>
                    <span className="text-2xl font-bold text-gray-900">${tour.price}</span>
                  </div>
                  <Button className="bg-[#0047BB] hover:bg-[#003580] text-white font-bold rounded-2xl px-6 h-12 flex items-center gap-2 group-hover:px-8 transition-all">
                    Book Now
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedTours;
