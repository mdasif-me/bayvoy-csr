"use client";

import React from "react";
import Image from "next/image";
import { Search, MapPin, Calendar, Users, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Hero = () => {
  return (
    <section 
      className="relative w-full min-h-screen flex flex-col items-center pt-32 px-6 md:px-24 overflow-hidden bg-cover bg-bottom bg-no-repeat bg-[#104a62]"
      style={{ backgroundImage: "url('/Background.svg')" }}
    >
      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center text-center mt-20">
        {/* Explore Pill */}
        <div className="bg-[#FFB800] text-white px-6 py-2 rounded-full flex items-center gap-2 mb-8 shadow-lg backdrop-blur-sm animate-bounce-subtle">
          <Image src="/logo/earth.svg" alt="Earth" width={20} height={20} />
          <span className="text-sm font-bold uppercase tracking-wider">Explore the world</span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1] max-w-4xl drop-shadow-lg tracking-tight font-manrope">
          Your Gateway to Extraordinary Adventures
        </h1>

        {/* Subheading */}
        <p className="text-white/90 text-lg md:text-xl max-w-2xl mb-12 drop-shadow-sm font-medium">
          Pack your bags and let Travila redefine your travel experience. Where every journey is a story waiting to be told
        </p>

        {/* Search Card */}
        <div className="w-full max-w-5xl bg-white rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.15)] p-8 md:p-10 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
            <Tabs defaultValue="tours" className="w-fit">
              <TabsList className="bg-[#F3F4F6] p-1.5 rounded-full">
                <TabsTrigger 
                  value="tours" 
                  className="data-[state=active]:bg-[#FFB800] data-[state=active]:text-white px-10 py-3 rounded-full flex items-center gap-2 font-bold transition-all"
                >
                  <MapPin className="w-4 h-4" />
                  Tours
                </TabsTrigger>
                <TabsTrigger 
                  value="hotels" 
                  className="data-[state=active]:bg-[#FFB800] data-[state=active]:text-white px-10 py-3 rounded-full flex items-center gap-2 font-bold transition-all"
                >
                  <Users className="w-4 h-4" />
                  Hotels
                </TabsTrigger>
              </TabsList>
            </Tabs>
            
            <a href="#" className="text-sm text-gray-400 hover:text-gray-600 transition-colors">
              Need some help?
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
            {/* Location */}
            <div className="flex flex-col gap-2 text-left pl-2">
              <label className="text-sm font-medium text-gray-500">Location</label>
              <div className="flex items-center justify-between group cursor-pointer">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-[#FFB800]" />
                  <span className="font-bold text-gray-900">New York, USA</span>
                </div>
                <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-gray-600" />
              </div>
            </div>

            {/* Vertical Divider */}
            <div className="hidden md:block w-px h-12 bg-gray-100" />

            {/* Check In & Out */}
            <div className="flex flex-col gap-2 text-left">
              <label className="text-sm font-medium text-gray-500">Check In & Check Out</label>
              <div className="flex items-center justify-between group cursor-pointer">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-[#FFB800]" />
                  <span className="font-bold text-gray-900">02 January 2024</span>
                </div>
                <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-gray-600" />
              </div>
            </div>

            {/* Vertical Divider */}
            <div className="hidden md:block w-px h-12 bg-gray-100" />

            {/* Guest */}
            <div className="flex flex-col gap-2 text-left">
              <label className="text-sm font-medium text-gray-500">Guest</label>
              <div className="flex items-center justify-between group cursor-pointer">
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-[#FFB800]" />
                  <span className="font-bold text-gray-900">2 adults, 2 children</span>
                </div>
                <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-gray-600" />
              </div>
            </div>

            {/* Search Button */}
            <Button className="w-full h-[64px] bg-[#0047BB] hover:bg-[#003580] text-white rounded-[20px] flex items-center justify-center gap-3 text-lg font-bold shadow-lg transition-transform hover:scale-[1.02] active:scale-[0.98] md:col-span-1">
              <Search className="w-6 h-6" />
              Search
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
