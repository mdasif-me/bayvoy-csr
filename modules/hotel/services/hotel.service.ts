/**
 * Hotel Service
 */

import { Hotel } from "../types/hotel.types";

class HotelService {
  async fetchHotels(): Promise<Hotel[]> {
    // Implementation here
    return [];
  }

  async fetchHotelById(id: string): Promise<Hotel | null> {
    // Implementation here
    return null;
  }

  async searchHotels(query: string): Promise<Hotel[]> {
    // Implementation here
    return [];
  }

  async filterHotels(filters: any): Promise<Hotel[]> {
    // Implementation here
    return [];
  }
}

export const hotelService = new HotelService();
