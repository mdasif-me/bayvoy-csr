"use client";

import { useParams, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useHotelDetails } from "@/hooks/use-travel-search";
import { formatPrice } from "@/utils/format-price";

const HotelDetailsPage = () => {
  const { id = "" } = useParams() as { id: string };
  const searchParams = useSearchParams();
  const { data: hotel, isLoading, isError } = useHotelDetails(id);
  
  const backToResults = searchParams.toString()
    ? `/hotels?${searchParams.toString()}`
    : "/hotels";

  return (
    <div className="min-h-screen bg-slate-50">
      <main className="max-w-7xl mx-auto px-4 pt-28 pb-12 space-y-8">
        <Link
          href={backToResults}
          className="text-sm font-medium text-[#0ea5e9] hover:underline"
        >
          &larr; Back to hotel results
        </Link>

        {isLoading && (
          <div className="animate-pulse space-y-8">
            <div className="h-[400px] bg-slate-200 rounded-3xl" />
            <div className="h-64 bg-slate-200 rounded-2xl" />
          </div>
        )}

        {isError && (
          <Card className="border-red-100 bg-red-50">
            <CardContent className="p-12 text-center text-red-600">
              Failed to load hotel details. Please try again later.
            </CardContent>
          </Card>
        )}

        {hotel && (
          <>
            <section className="grid gap-8 lg:grid-cols-[1.6fr_1fr]">
              <div className="space-y-4">
                <div className="relative h-[400px] w-full overflow-hidden rounded-3xl shadow-lg">
                    <img
                    src={hotel.images?.[0] || "/images/placeholder.jpg"}
                    alt={hotel.name}
                    className="absolute inset-0 h-full w-full object-cover"
                    />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {(hotel.images ?? []).slice(1, 4).map((image, index) => (
                    <div key={index} className="relative h-32 w-full overflow-hidden rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                        <img
                        src={image}
                        alt={`${hotel.name} ${index + 2}`}
                        className="absolute inset-0 h-full w-full object-cover"
                        />
                    </div>
                  ))}
                </div>
              </div>

              <Card className="h-fit shadow-lg border-slate-100 sticky top-24">
                <CardContent className="p-8 space-y-6">
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-[#0ea5e9] text-white border-transparent">{hotel.category}</Badge>
                      <Badge variant="secondary" className="bg-slate-100 text-slate-600">{hotel.location.city}</Badge>
                    </div>
                    <h1 className="text-4xl font-bold text-slate-900 leading-tight">{hotel.name}</h1>
                    <p className="text-slate-500 flex items-center gap-2">
                      <span>📍</span> {hotel.location.address}, {hotel.location.city}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-slate-100">
                    <h3 className="font-bold text-slate-900 mb-2">Description</h3>
                    <p className="text-slate-600 leading-relaxed">
                        {hotel.description || "Experience the perfect blend of comfort and luxury. Our hotel offers world-class services and a relaxing atmosphere for your perfect getaway."}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-slate-100">
                    <h3 className="font-bold text-slate-900 mb-3">Amenities</h3>
                    <div className="flex flex-wrap gap-2">
                        {(hotel.amenities ?? []).map((amenity) => (
                        <Badge key={amenity} variant="outline" className="border-slate-200 text-slate-500">
                            {amenity}
                        </Badge>
                        ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-100">
                    <div className="rounded-2xl bg-slate-50 p-4 text-center">
                        <p className="text-sm font-medium text-slate-600">
                            {hotel.availableRooms?.length ?? 0} room types available
                        </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            <section className="space-y-6 pt-8">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-bold text-slate-900">Available Rooms</h2>
                  <p className="text-slate-500 mt-1">Select the best room for your stay</p>
                </div>
              </div>

              {hotel.availableRooms?.length ? (
                <div className="grid gap-6">
                  {hotel.availableRooms.map((room) => (
                    <Card key={room._id} className="overflow-hidden shadow-md hover:shadow-lg transition-shadow border-slate-100">
                      <div className="grid gap-0 md:grid-cols-[320px_1fr]">
                        <div className="relative h-64 md:h-auto">
                            <img
                            src={room.images?.[0] || hotel.images?.[0] || "/images/placeholder.jpg"}
                            alt={room.roomType}
                            className="absolute inset-0 h-full w-full object-cover"
                            />
                        </div>

                        <CardContent className="p-8">
                          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                            <div className="space-y-4">
                              <div className="flex flex-wrap gap-2">
                                <Badge className="bg-slate-100 text-slate-600 border-transparent">{room.roomType}</Badge>
                                <Badge variant="secondary" className="bg-slate-50 text-slate-500">{room.bedType} Bed</Badge>
                              </div>
                              <h3 className="text-2xl font-bold text-slate-900">
                                Room {room.roomNumber}
                              </h3>
                              <p className="text-sm font-medium text-slate-500 bg-slate-50 inline-block px-3 py-1 rounded-full">
                                Capacity: {room.capacity.adults} Adults • {room.capacity.children} Children
                              </p>
                              
                              {room.description && (
                                <p className="text-slate-600 leading-relaxed max-w-2xl">
                                {room.description}
                                </p>
                              )}

                              <div className="flex flex-wrap gap-2 pt-2">
                                {(room.amenities ?? []).map((amenity) => (
                                  <Badge key={amenity} variant="outline" className="border-slate-100 text-slate-400 text-[10px] uppercase">
                                    {amenity}
                                  </Badge>
                                ))}
                              </div>
                            </div>

                            <div className="flex flex-col items-start md:items-end gap-1">
                              <p className="text-sm font-medium text-slate-400">Price per night</p>
                              <p className="text-3xl font-bold text-[#0ea5e9]">
                                {formatPrice(room.pricePerNight)}
                              </p>
                              <div className="mt-4 w-full">
                                <Button className="w-full bg-[#0ea5e9] hover:bg-[#0284c7] text-white font-bold py-6 px-8 rounded-xl shadow-lg shadow-blue-100">
                                    Book This Room
                                </Button>
                              </div>
                              <p className="text-xs text-slate-400 mt-3 text-center w-full">
                                {room.availableRooms} rooms left at this price
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </div>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="p-12 text-center bg-white rounded-3xl shadow-sm border border-slate-100">
                  <p className="text-slate-500">No rooms available at the moment. Please contact the hotel directly.</p>
                </div>
              )}
            </section>
          </>
        )}
      </main>
    </div>
  );
};

export default HotelDetailsPage;
