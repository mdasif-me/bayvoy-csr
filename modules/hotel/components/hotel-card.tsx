/**
 * Hotel Card Component
 */

import { Hotel } from "@/modules/hotel/types/hotel.types";
import { formatPrice } from "@/utils/format-price";
import Link from "next/link";

interface HotelCardProps {
  hotel: Hotel;
}

export function HotelCard({ hotel }: HotelCardProps) {
  return (
    <Link href={`/hotels/${hotel.id}`}>
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
        <div className="aspect-video bg-gray-300 relative overflow-hidden">
          {hotel.image && <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover" />}
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">{hotel.name}</h3>
          <p className="text-gray-600 text-sm mb-2">{hotel.address}</p>
          <div className="flex justify-between items-center">
            <span className="text-blue-600 font-bold">{formatPrice(hotel.price)}</span>
            <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">
              ★ {hotel.rating}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
