"use client";

import React, { useMemo, useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { usePublicHotels } from "@/hooks/use-travel-search";
import { formatPrice } from "@/utils/format-price";

const HotelListingPage = () => {
  const searchParams = useSearchParams();
  const [sortBy, setSortBy] = useState("newest");

  const location = searchParams.get("location") || "";
  const checkIn = searchParams.get("checkIn") || "";
  const checkOut = searchParams.get("checkOut") || "";
  const guests = searchParams.get("guests") || "";

  const { data: hotelResponse, isLoading, isError } = usePublicHotels({
    location,
    page: Number(searchParams.get("page") || 1),
    limit: 20,
  });

  const hotels = useMemo(() => {
    const hotelData = [...(hotelResponse?.data ?? [])];
    if (sortBy === "name") {
      return hotelData.sort((a, b) => a.name.localeCompare(b.name));
    }
    return hotelData;
  }, [hotelResponse?.data, sortBy]);

  const resultCount = hotelResponse?.meta?.total ?? hotels.length;

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 pt-28 pb-12">
        <div className="mb-8 flex flex-col gap-3">
          <Link href="/" className="text-sm font-medium text-[#0ea5e9] hover:underline">
            Back to home
          </Link>
          <h1 className="text-3xl font-bold text-slate-900">
            {location
              ? `Hotels in ${location}`
              : "Explore All Hotels"}
          </h1>
          <p className="text-slate-500">
            {checkIn && checkOut
              ? `${checkIn} to ${checkOut}`
              : "Discover the best stays for your next trip"}
            {guests ? ` • ${guests}` : ""}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters - Sidebar */}
          <aside className="hidden lg:block space-y-6">
            <Card className="p-6">
              <h3 className="font-bold mb-4">Filters</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold mb-2">Category</p>
                  <div className="space-y-2">
                    {["Luxury", "Resort", "Budget", "Boutique"].map((cat) => (
                      <label key={cat} className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer hover:text-slate-900">
                        <input type="checkbox" className="rounded border-slate-300 text-[#0ea5e9]" />
                        {cat}
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </aside>

          {/* Hotel List */}
          <div className="lg:col-span-3 space-y-6">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-slate-700">
                    {isLoading ? "Finding hotels..." : `${resultCount} properties found`}
                </h2>
                <select 
                    value={sortBy} 
                    onChange={(e) => setSortBy(e.target.value)}
                    className="bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#0ea5e9] outline-none"
                >
                    <option value="newest">Sort by: Newest</option>
                    <option value="name">Sort by: Name</option>
                    <option value="price">Sort by: Price</option>
                </select>
            </div>

            {isLoading && (
              <div className="space-y-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-64 bg-slate-200 animate-pulse rounded-2xl" />
                ))}
              </div>
            )}

            {isError && (
              <div className="p-12 text-center bg-red-50 rounded-2xl border border-red-100">
                <p className="text-red-600">Failed to load hotels. Please try again later.</p>
              </div>
            )}

            {!isLoading && !isError && hotels.length === 0 && (
              <div className="p-12 text-center bg-white rounded-2xl shadow-sm border border-slate-100">
                <p className="text-slate-500">No hotels found matching your search.</p>
              </div>
            )}

            {hotels.map((hotel, index) => (
              <Card
                key={hotel._id}
                className="overflow-hidden hover:shadow-xl transition-shadow border-slate-100"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="relative w-full md:w-80 h-64 md:h-auto">
                    <img
                      src={hotel.images?.[0] || "/images/placeholder.jpg"}
                      alt={hotel.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary" className="bg-slate-100 text-slate-600">
                          {hotel.category}
                        </Badge>
                        <div className="flex items-center gap-1">
                            <span className="bg-[#0ea5e9] text-white text-xs font-bold px-2 py-1 rounded">
                                {hotel.rating || 4.5}
                            </span>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-1">{hotel.name}</h3>
                      <p className="text-sm text-slate-500 flex items-center gap-1">
                        <span className="shrink-0">📍</span> {hotel.location.address}, {hotel.location.city}
                      </p>
                      
                      <p className="text-sm text-slate-600 mt-4 line-clamp-2">
                        {hotel.description || "Enjoy a luxurious stay at our premium hotel with world-class amenities."}
                      </p>

                      <div className="flex flex-wrap gap-2 mt-4">
                        {(hotel.amenities ?? []).slice(0, 4).map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] uppercase tracking-wider font-bold bg-slate-50 text-slate-500 px-2 py-1 rounded border border-slate-100"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 pt-6 border-t border-slate-100 flex items-center justify-between">
                      <div>
                        <p className="text-xs text-slate-400">Starting from</p>
                        <p className="text-2xl font-bold text-[#0ea5e9]">
                            {hotel.availableRooms?.[0]?.pricePerNight ? formatPrice(hotel.availableRooms[0].pricePerNight) : "$120"}
                            <span className="text-sm text-slate-500 font-normal">/night</span>
                        </p>
                      </div>
                      <Link href={`/hotels/${hotel._id}`}>
                        <Button className="bg-[#0ea5e9] hover:bg-[#0284c7] text-white font-bold px-8">
                            View Details
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelListingPage;
