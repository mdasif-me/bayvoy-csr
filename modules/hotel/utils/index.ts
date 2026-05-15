/**
 * Hotel Utils
 */

import { Hotel } from "../types/hotel.types";

export function filterHotelsByAmenities(hotels: Hotel[], amenities: string[]): Hotel[] {
  if (amenities.length === 0) return hotels;

  return hotels.filter((hotel) =>
    amenities.every((amenity) => hotel.amenities.includes(amenity))
  );
}

export function filterHotelsByPrice(
  hotels: Hotel[],
  minPrice: number,
  maxPrice: number
): Hotel[] {
  return hotels.filter((hotel) => hotel.price >= minPrice && hotel.price <= maxPrice);
}

export function sortHotels(
  hotels: Hotel[],
  sortBy: string
): Hotel[] {
  const sorted = [...hotels];

  switch (sortBy) {
    case "price_asc":
      return sorted.sort((a, b) => a.price - b.price);
    case "price_desc":
      return sorted.sort((a, b) => b.price - a.price);
    case "rating_desc":
      return sorted.sort((a, b) => b.rating - a.rating);
    default:
      return sorted;
  }
}
