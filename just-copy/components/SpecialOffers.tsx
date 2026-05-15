"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const offers = [
  {
    id: 1,
    title: "Summer Beach Getaway",
    discount: "30% OFF",
    bg: "bg-blue-600",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Mountain Hiking Adventure",
    discount: "20% OFF",
    bg: "bg-green-600",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "European City Explorer",
    discount: "BUY 1 GET 1",
    bg: "bg-orange-600",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=2070&auto=format&fit=crop",
  },
];

const SpecialOffers = () => {
  return (
    <section className="py-24 px-6 md:px-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 font-manrope">Special Offers</h2>
            <p className="text-gray-500 text-lg">Limited time deals just for you.</p>
          </div>
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors">
              <ArrowRight className="w-6 h-6 text-gray-400 rotate-180" />
            </div>
            <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors">
              <ArrowRight className="w-6 h-6 text-gray-400" />
            </div>
          </div>
        </div>

        <div className="flex gap-8 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory">
          {offers.map((offer) => (
            <div key={offer.id} className="min-w-[85vw] md:min-w-[600px] aspect-[21/9] relative rounded-[40px] overflow-hidden snap-center group shadow-xl">
              <Image
                src={offer.image}
                alt={offer.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
              <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-center max-w-lg">
                <div className="flex items-center gap-2 text-[#FFB800] mb-4">
                  <Sparkles className="w-5 h-5 fill-[#FFB800]" />
                  <span className="font-bold uppercase tracking-widest text-sm">Limited Offer</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                  {offer.title}
                </h3>
                <p className="text-white/80 text-xl font-bold mb-8">
                  Get <span className="text-[#FFB800] text-3xl md:text-4xl px-2">{offer.discount}</span> for your next trip
                </p>
                <Button className="bg-white hover:bg-[#FFB800] text-[#0047BB] hover:text-white font-bold rounded-full px-10 h-14 w-fit shadow-xl transition-all hover:scale-105 active:scale-95">
                  View More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
