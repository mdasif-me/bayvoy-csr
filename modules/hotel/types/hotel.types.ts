/**
 * Hotel Types
 */

export interface Hotel {
  id: string;
  name: string;
  description: string;
  address: string;
  rating: number;
  price: number;
  image: string;
  amenities: string[];
  rooms: number;
}

export interface HotelFilters {
  priceMin?: number;
  priceMax?: number;
  rating?: number;
  amenities?: string[];
}
