/**
 * Get Hotels API
 */

import { Hotel, HotelFilters } from "../types/hotel.types";

export async function getHotels(filters?: HotelFilters): Promise<Hotel[]> {
  try {
    const queryParams = new URLSearchParams();
    if (filters?.priceMin) queryParams.append("priceMin", filters.priceMin.toString());
    if (filters?.priceMax) queryParams.append("priceMax", filters.priceMax.toString());
    if (filters?.rating) queryParams.append("rating", filters.rating.toString());

    const response = await fetch(`/api/hotels?${queryParams.toString()}`);
    if (!response.ok) throw new Error("Failed to fetch hotels");
    return response.json();
  } catch (error) {
    console.error("Error fetching hotels:", error);
    return [];
  }
}

export async function getHotelDetails(id: string): Promise<Hotel | null> {
  try {
    const response = await fetch(`/api/hotels/${id}`);
    if (!response.ok) throw new Error("Failed to fetch hotel details");
    return response.json();
  } catch (error) {
    console.error("Error fetching hotel details:", error);
    return null;
  }
}

export async function createHotel(data: Partial<Hotel>): Promise<Hotel | null> {
  try {
    const response = await fetch("/api/hotels", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error("Failed to create hotel");
    return response.json();
  } catch (error) {
    console.error("Error creating hotel:", error);
    return null;
  }
}
