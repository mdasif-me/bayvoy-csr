"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import SearchTabs from "./search-tabs";
import HotelForm from "./hotel-form";
import RentForm from "./rent-form";
import TourForm from "./tour-form";
import CustomizeForm from "./customize-form";

const SearchForm = () => {
  const [activeTab, setActiveTab] = useState("hotel");
  const router = useRouter();

  const handleHotelSubmit = (data: any) => {
    const params = new URLSearchParams();
    params.set("location", data.location);
    params.set("checkIn", data.checkIn);
    params.set("checkOut", data.checkOut);
    params.set("guests", data.roomsGuests);
    if (data.travelTypes) params.set("travelTypes", data.travelTypes.join(","));
    
    router.push(`/hotels?${params.toString()}`);
  };

  const handleRentSubmit = (data: any) => {
    const params = new URLSearchParams();
    params.set("location", data.pickupLocation);
    params.set("pickupDate", data.pickupDate);
    params.set("dropoffDate", data.dropoffDate);
    params.set("passengers", data.passengers);
    if (data.vehicleTypes) params.set("vehicleTypes", data.vehicleTypes.join(","));
    
    router.push(`/cars?${params.toString()}`);
  };

  return (
    <div className="w-full max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300">
      {/* Tabs */}
      <div className="flex justify-center mb-6">
        <SearchTabs activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
      
      {/* Forms Container */}
      <div className="relative min-h-[300px]">
        {activeTab === "hotel" && <HotelForm onSubmit={handleHotelSubmit} />}
        {activeTab === "rent" && <RentForm onSubmit={handleRentSubmit} />}
        {activeTab === "tour" && <TourForm onSubmit={(data) => console.log("Tour Search:", data)} />}
        {activeTab === "customize" && <CustomizeForm />}
      </div>
    </div>
  );
};

export default SearchForm;
