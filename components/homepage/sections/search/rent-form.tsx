"use client";

import React, { useState } from "react";
import { MapPin, MapPinned, Calendar, Users, Car } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RentFormData } from "@/types/form.types";

const locations = ["Dhaka", "Chittagong", "Sylhet", "Cox's Bazar", "Rajshahi"];
const vehicleTypesOptions = [
  { id: "sedan", label: "Sedan" },
  { id: "suv", label: "SUV" },
  { id: "van", label: "Van" },
  { id: "luxury", label: "Luxury" },
  { id: "bike", label: "Bike" },
];

interface VehicleFormProps {
  onSubmit: (data: RentFormData) => void;
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
    const data: RentFormData = {
      pickupLocation,
      dropoffLocation,
      pickupDate,
      dropoffDate,
      passengers,
      vehicleTypes: selectedTypes,
    };
    onSubmit(data);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/80 backdrop-blur-md rounded-3xl p-6 lg:p-8 space-y-6 shadow-xl border border-white/20"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="space-y-2">
          <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Pickup Location
          </label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#0ea5e9] z-10" />
            <select
              required
              value={pickupLocation}
              onChange={(e) => setPickupLocation(e.target.value)}
              className="w-full pl-10 h-12 bg-slate-50 border-0 rounded-xl focus:ring-2 focus:ring-[#0ea5e9] outline-none appearance-none transition-all text-sm"
            >
              <option value="">Select Pickup City</option>
              {locations.map((loc) => (
                <option key={loc} value={loc}>{loc}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Drop-off Location
          </label>
          <div className="relative">
            <MapPinned className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#0ea5e9] z-10" />
            <select
              required
              value={dropoffLocation}
              onChange={(e) => setDropoffLocation(e.target.value)}
              className="w-full pl-10 h-12 bg-slate-50 border-0 rounded-xl focus:ring-2 focus:ring-[#0ea5e9] outline-none appearance-none transition-all text-sm"
            >
              <option value="">Select Drop-off City</option>
              {locations.map((loc) => (
                <option key={loc} value={loc}>{loc}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Passengers
          </label>
          <div className="relative">
            <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#0ea5e9]" />
            <Input
              required
              type="number"
              min="1"
              value={passengers}
              onChange={(e) => setPassengers(e.target.value)}
              placeholder="Number of Guests"
              className="pl-10 h-12 bg-slate-50 border-0 rounded-xl focus:bg-white transition-colors"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Pickup Date
          </label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#0ea5e9]" />
            <Input
              required
              type="date"
              value={pickupDate}
              onChange={(e) => setPickupDate(e.target.value)}
              min={today}
              className="pl-10 h-12 bg-slate-50 border-0 rounded-xl focus:bg-white transition-colors"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Dropoff Date
          </label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#0ea5e9]" />
            <Input
              required
              type="date"
              value={dropoffDate}
              onChange={(e) => setDropoffDate(e.target.value)}
              min={pickupDate || today}
              className="pl-10 h-12 bg-slate-50 border-0 rounded-xl focus:bg-white transition-colors"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-6 py-4">
        <span className="text-sm font-bold text-slate-700">Vehicle Type:</span>
        {vehicleTypesOptions.map((type) => (
          <label key={type.id} className="flex items-center gap-2 cursor-pointer group">
            <input
              type="checkbox"
              checked={selectedTypes.includes(type.id)}
              onChange={() => handleTypeToggle(type.id)}
              className="w-4 h-4 rounded border-slate-300 text-[#0ea5e9] focus:ring-[#0ea5e9]"
            />
            <span className="text-sm text-slate-500 group-hover:text-slate-900 font-medium transition-colors">
              {type.label}
            </span>
          </label>
        ))}
      </div>

      <div className="flex justify-center">
        <Button type="submit" className="min-w-[240px] h-14 text-lg font-bold shadow-lg bg-[#0ea5e9] hover:bg-[#0284c7] text-white rounded-xl">
          <Car className="w-6 h-6 mr-2" />
          Find Available Vehicles
        </Button>
      </div>
    </form>
  );
};

export default RentForm;
