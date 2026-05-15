"use client";

import { startTransition, useState } from "react";
import SearchTabs from "./tabs";
import HotelForm from "./hotel-form";
import RentForm from "./rent-form";
import { HotelFormData, RentFormData } from "@/types/form.types";
import { useRouter } from "next/navigation";

const SearchForm = () => {
  const [activeTab, setActiveTab] = useState("hotel");
  const router = useRouter();

  const handleHotelSubmit = (data: HotelFormData) => {
    const params = new URLSearchParams();
    params.set("location", data.location);
    params.set("checkIn", data.checkIn);
    params.set("checkOut", data.checkOut);
    params.set("guests", String(data.roomsGuests));
    params.set("travelTypes", data.travelTypes.join(","));

    startTransition(() => {
      router.push(`/results?${params.toString()}`);
    });
  };

  const handleRentSubmit = (data: RentFormData) => {
    const params = new URLSearchParams();
    params.set("location", data.pickupLocation);
    params.set("pickupLocation", data.pickupLocation);
    params.set("dropoffLocation", data.dropoffLocation);
    params.set("pickupDate", data.pickupDate);
    params.set("dropoffDate", data.dropoffDate);
    params.set("passengers", data.passengers);
    params.set("vehicleTypes", data.vehicleTypes.join(","));

    startTransition(() => {
      router.push(`/rent/results?${params.toString()}`);
    });
  };

  return (
    <div className="w-full max-w-5xl mx-auto animate-fade-in-up">
      {/* Tabs */}
      <div className="flex justify-center mb-6">
        <SearchTabs activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
      <div className="mt-2 relative min-h-[300px]">
        {activeTab === "hotel" && <HotelForm onSubmit={handleHotelSubmit} />}
        {activeTab === "rent" && <RentForm onSubmit={handleRentSubmit} />}
        {/* Placeholder for other forms */}
        {(activeTab === "tour" || activeTab === "customize") && (
          <div className="bg-white/80 backdrop-blur-md rounded-3xl p-12 text-center shadow-xl border border-white/20">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Coming Soon</h3>
            <p className="text-slate-500">We are currently working on this feature.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchForm;
