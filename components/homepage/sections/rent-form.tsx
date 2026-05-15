"use client";

import React, { useState } from "react";
import { MapPin, MapPinned, Calendar, Users, Car } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

const locations = ["Dhaka", "Chittagong", "Sylhet", "Cox's Bazar", "Rajshahi"];
const vehicleTypesOptions = [
  { id: "sedan", label: "Sedan" },
  { id: "suv", label: "SUV" },
  { id: "van", label: "Van" },
  { id: "luxury", label: "Luxury" },
  { id: "bike", label: "Bike" },
];

interface VehicleFormProps {
  onSubmit: (data: any) => void;
}

const RentForm: React.FC<VehicleFormProps> = ({ onSubmit }) => {
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropoffLocation, setDropoffLocation] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [dropoffDate, setDropoffDate] = useState("");
  const [passengers, setPassengers] = useState("");
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  const today = new Date().toISOString().split("T")[0];

  const handleTypeToggle = (typeId: string) => {
    setSelectedTypes((prev) =>
      prev.includes(typeId) ? prev.filter((id) => id !== typeId) : [...prev, typeId]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      pickupLocation,
      dropoffLocation,
      pickupDate,
      dropoffDate,
      passengers,
      vehicleTypes: selectedTypes,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-[2.5rem] p-8 shadow-2xl shadow-slate-200/50 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="space-y-2">
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">
            Pickup Location
          </label>
          <div className="relative">
            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-ocean z-10" />
            <select
              required
              value={pickupLocation}
              onChange={(e) => setPickupLocation(e.target.value)}
              className="w-full pl-12 h-14 bg-slate-50 border-0 rounded-2xl focus:ring-2 focus:ring-ocean outline-none appearance-none transition-all text-sm font-bold text-slate-900"
            >
              <option value="">Select City</option>
              {locations.map((loc) => (
                <option key={loc} value={loc}>{loc}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">
            Drop-off Location
          </label>
          <div className="relative">
            <MapPinned className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-ocean z-10" />
            <select
              required
              value={dropoffLocation}
              onChange={(e) => setDropoffLocation(e.target.value)}
              className="w-full pl-12 h-14 bg-slate-50 border-0 rounded-2xl focus:ring-2 focus:ring-ocean outline-none appearance-none transition-all text-sm font-bold text-slate-900"
            >
              <option value="">Select City</option>
              {locations.map((loc) => (
                <option key={loc} value={loc}>{loc}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">
            Passengers
          </label>
          <div className="relative">
            <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-ocean" />
            <Input
              required
              type="number"
              min="1"
              value={passengers}
              onChange={(e) => setPassengers(e.target.value)}
              placeholder="Number of Guests"
              className="pl-12 h-14 bg-slate-50 border-0 rounded-2xl focus:ring-2 focus:ring-ocean"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">
            Pickup Date
          </label>
          <div className="relative">
            <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-ocean" />
            <Input
              required
              type="date"
              value={pickupDate}
              onChange={(e) => setPickupDate(e.target.value)}
              min={today}
              className="pl-12 h-14 bg-slate-50 border-0 rounded-2xl focus:ring-2 focus:ring-ocean"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">
            Dropoff Date
          </label>
          <div className="relative">
            <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-ocean" />
            <Input
              required
              type="date"
              value={dropoffDate}
              onChange={(e) => setDropoffDate(e.target.value)}
              min={pickupDate || today}
              className="pl-12 h-14 bg-slate-50 border-0 rounded-2xl focus:ring-2 focus:ring-ocean"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-6 py-2">
        <span className="text-xs font-black text-slate-900 uppercase tracking-widest">Vehicle Type:</span>
        <div className="flex flex-wrap gap-4">
          {vehicleTypesOptions.map((type) => (
            <label key={type.id} className="flex items-center gap-2 cursor-pointer group">
              <Checkbox
                checked={selectedTypes.includes(type.id)}
                onCheckedChange={() => handleTypeToggle(type.id)}
              />
              <span className="text-sm font-bold text-slate-500 group-hover:text-slate-900 transition-colors">
                {type.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div className="flex justify-center pt-2">
        <Button type="submit" variant="ocean" size="xl" className="min-w-[280px] shadow-xl shadow-ocean/20">
          <Car className="w-5 h-5 mr-3" />
          Search Vehicles
        </Button>
      </div>
    </form>
  );
};

export default RentForm;
