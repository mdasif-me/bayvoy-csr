"use client";

import React, { useState } from "react";
import { MapPin, Calendar, Users, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { HotelFormData } from "@/types/form.types";

interface HotelFormProps {
    onSubmit: (data: HotelFormData) => void;
}

const travelTypesOptions = [
    { id: "business", label: "Business" },
    { id: "couples", label: "Couples" },
    { id: "families", label: "Families" },
    { id: "friends", label: "Friends" },
    { id: "solo", label: "Solo" },
];

const HotelForm: React.FC<HotelFormProps> = ({ onSubmit }) => {
    const [location, setLocation] = useState("");
    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");
    const [roomsGuests, setRoomsGuests] = useState("");
    const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

    const handleTypeToggle = (typeId: string) => {
        setSelectedTypes((prev) =>
            prev.includes(typeId)
                ? prev.filter((id) => id !== typeId)
                : [...prev, typeId]
        );
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const data: HotelFormData = {
            location,
            checkIn,
            checkOut,
            roomsGuests,
            travelTypes: selectedTypes,
        };
        onSubmit(data);
    };

    const today = new Date().toISOString().split("T")[0];

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white/80 backdrop-blur-md rounded-3xl p-6 lg:p-8 space-y-6 shadow-xl border border-white/20"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                        City / Hotel / Resort / Area
                    </label>
                    <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#0ea5e9]" />
                        <Input
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            placeholder="Cox's Bazar"
                            required
                            className="pl-10 h-12 bg-slate-50 border-0 rounded-xl focus:bg-white transition-colors"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                        Check In
                    </label>
                    <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#0ea5e9]" />
                        <Input
                            required
                            type="date"
                            value={checkIn}
                            onChange={(e) => setCheckIn(e.target.value)}
                            min={today}
                            className="pl-10 h-12 bg-slate-50 border-0 rounded-xl focus:bg-white transition-colors"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                        Check Out
                    </label>
                    <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#0ea5e9]" />
                        <Input
                            required
                            type="date"
                            value={checkOut}
                            onChange={(e) => setCheckOut(e.target.value)}
                            min={checkIn || today}
                            className="pl-10 h-12 bg-slate-50 border-0 rounded-xl focus:bg-white transition-colors"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                        Rooms & Guests
                    </label>
                    <div className="relative">
                        <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#0ea5e9]" />
                        <Input
                            required
                            value={roomsGuests}
                            onChange={(e) => setRoomsGuests(e.target.value)}
                            placeholder="1 Room, 2 Guests"
                            className="pl-10 h-12 bg-slate-50 border-0 rounded-xl focus:bg-white transition-colors"
                        />
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
                <span className="text-sm font-medium text-slate-700">Search for</span>
                {travelTypesOptions.map((type) => (
                    <label
                        key={type.id}
                        className="flex items-center gap-2 cursor-pointer group"
                    >
                        <input
                            type="checkbox"
                            checked={selectedTypes.includes(type.id)}
                            onChange={() => handleTypeToggle(type.id)}
                            className="w-4 h-4 rounded border-slate-300 text-[#0ea5e9] focus:ring-[#0ea5e9]"
                        />
                        <span className="text-sm text-slate-500 group-hover:text-slate-900 transition-colors">
                            {type.label}
                        </span>
                    </label>
                ))}
            </div>

            <div className="flex justify-center">
                <Button type="submit" className="min-w-[240px] h-14 text-lg font-bold shadow-lg bg-[#0ea5e9] hover:bg-[#0284c7] text-white rounded-xl">
                    <Search className="w-5 h-5 mr-2" />
                    Search Hotels
                </Button>
            </div>
        </form>
    );
};

export default HotelForm;
