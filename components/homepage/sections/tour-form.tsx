"use client";

import React, { useState } from "react";
import { MapPin, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const locations = ["Dhaka", "Chittagong", "Sylhet", "Cox's Bazar", "Rajshahi"];

interface TourFormProps {
  onSubmit: (data: any) => void;
}

const TourForm: React.FC<TourFormProps> = ({ onSubmit }) => {
  const [location, setLocation] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ location });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-[2.5rem] p-8 shadow-2xl shadow-slate-200/50 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500"
    >
      <div className="flex flex-col md:flex-row items-end gap-6">
        <div className="flex-1 space-y-2 w-full">
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">
            Select Destination
          </label>
          <div className="relative">
            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-ocean z-10" />
            <select
              required
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full pl-12 h-14 bg-slate-50 border-0 rounded-2xl focus:ring-2 focus:ring-ocean outline-none appearance-none transition-all cursor-pointer text-sm font-bold text-slate-900"
            >
              <option value="" disabled>Where do you want to go?</option>
              {locations.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="w-full md:w-auto">
          <Button
            type="submit"
            variant="ocean"
            size="xl"
            className="w-full md:w-[220px] shadow-lg shadow-ocean/20 transition-transform active:scale-95"
          >
            <Search className="w-5 h-5 mr-3" />
            Find Tours
          </Button>
        </div>
      </div>
    </form>
  );
};

export default TourForm;
