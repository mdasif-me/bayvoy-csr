/**
 * Hotel Store (Zustand)
 */

import { create } from "zustand";
import { Hotel } from "../types/hotel.types";

interface HotelStore {
  hotels: Hotel[];
  selectedHotel: Hotel | null;
  setHotels: (hotels: Hotel[]) => void;
  setSelectedHotel: (hotel: Hotel | null) => void;
  addHotel: (hotel: Hotel) => void;
  removeHotel: (id: string) => void;
}

export const useHotelStore = create<HotelStore>((set) => ({
  hotels: [],
  selectedHotel: null,
  setHotels: (hotels) => set({ hotels }),
  setSelectedHotel: (hotel) => set({ selectedHotel: hotel }),
  addHotel: (hotel) =>
    set((state) => ({
      hotels: [...state.hotels, hotel],
    })),
  removeHotel: (id) =>
    set((state) => ({
      hotels: state.hotels.filter((h) => h.id !== id),
    })),
}));
