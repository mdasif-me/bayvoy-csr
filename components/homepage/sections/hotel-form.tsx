"use client";

import React, { useState } from "react";
import { MapPin, Calendar, Users, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

interface HotelFormProps {
    onSubmit: (data: any) => void;
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
        onSubmit({
            location,
            checkIn,
            checkOut,
            roomsGuests,
            travelTypes: selectedTypes,
        });
    };

    const today = new Date().toISOString().split('T')[0];

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white rounded-[2.5rem] p-8 shadow-2xl shadow-slate-200/50 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">
                        City / Hotel / Area
                    </label>
                    <div className="relative">
                        <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-ocean" />
                        <Input
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            placeholder="Where are you going?"
                            required
                            className="pl-12 h-14 bg-slate-50 border-0 rounded-2xl focus:ring-2 focus:ring-ocean"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">
                        Check In
                    </label>
                    <div className="relative">
                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-ocean" />
                        <Input
                            required
                            type="date"
                            value={checkIn}
                            onChange={(e) => setCheckIn(e.target.value)}
                            min={today}
                            className="pl-12 h-14 bg-slate-50 border-0 rounded-2xl focus:ring-2 focus:ring-ocean"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">
                        Check Out
                    </label>
                    <div className="relative">
                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-ocean" />
                        <Input
                            required
                            type="date"
                            value={checkOut}
                            onChange={(e) => setCheckOut(e.target.value)}
                            min={checkIn || today}
                            className="pl-12 h-14 bg-slate-50 border-0 rounded-2xl focus:ring-2 focus:ring-ocean"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">
                        Rooms & Guests
                    </label>
                    <div className="relative">
                        <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-ocean" />
                        <Input
                            required
                            value={roomsGuests}
                            onChange={(e) => setRoomsGuests(e.target.value)}
                            placeholder="1 Room, 2 Guests"
                            className="pl-12 h-14 bg-slate-50 border-0 rounded-2xl focus:ring-2 focus:ring-ocean"
                        />
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 py-2">
                <span className="text-xs font-black text-slate-900 uppercase tracking-widest">Travel Mode:</span>
                <div className="flex flex-wrap gap-4">
                    {travelTypesOptions.map((type) => (
                        <label
                            key={type.id}
                            className="flex items-center gap-2 cursor-pointer group"
                        >
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
                    <Search className="w-5 h-5 mr-3" />
                    Search Properties
                </Button>
            </div>
        </form>
    );
};

export default HotelForm;
