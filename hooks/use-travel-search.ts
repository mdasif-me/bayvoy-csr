import { keepPreviousData, useQuery } from "@tanstack/react-query";
import api from "@/lib/axios";

export interface ApiListMeta {
  page?: number;
  limit?: number;
  total?: number;
  totalPage?: number;
}

export interface PublicHotel {
  _id: string;
  name: string;
  category: string;
  description?: string;
  amenities?: string[];
  images: string[];
  rating?: number;
  status?: "active" | "inactive";
  location: {
    city: string;
    address: string;
  };
  availableRooms?: PublicRoom[];
}

export interface PublicRoom {
  _id: string;
  hotel: string;
  roomType: string;
  roomNumber: string;
  pricePerNight: number;
  bedType: string;
  description?: string;
  amenities?: string[];
  images: string[];
  totalRooms: number;
  availableRooms: number;
  isAvailable: boolean;
  capacity: {
    adults: number;
    children: number;
  };
}

export interface RentVehicle {
  _id: string;
  name: string;
  brand: string;
  vehicleType: string;
  modelYear?: string;
  engineCapacity?: string;
  fuelType: string;
  pricePerDay: number;
  location: string;
  features?: string[];
  images?: string[];
  isAvailable: boolean;
  status: "active" | "inactive";
}

export interface HotelSearchParams {
  page?: number;
  limit?: number;
  location?: string;
  category?: string;
}

export interface RentSearchParams {
  location?: string;
  type?: string;
  fuel?: string;
}

interface ApiListResponse<T> {
  data: T[];
  meta?: ApiListMeta;
}

const getHotelList = async (
  params: HotelSearchParams
): Promise<ApiListResponse<PublicHotel>> => {
  const { location, ...rest } = params;
  const endpoint = location ? "/hotel/search" : "/hotel";
  const requestParams = location
    ? { ...rest, city: location, searchTerm: location }
    : rest;

  const { data: response } = await api.get(endpoint, {
    params: requestParams,
  });

  return {
    data: response?.data ?? [],
    meta: response?.meta,
  };
};

const getHotelDetails = async (hotelId: string): Promise<PublicHotel> => {
  const { data: response } = await api.get(`/hotel/${hotelId}/details`);
  return response?.data;
};

const getRentVehicles = async (
  params: RentSearchParams
): Promise<RentVehicle[]> => {
  const { data: response } = await api.get("/rent", {
    params,
  });
  return response?.data ?? [];
};

export const usePublicHotels = (params: HotelSearchParams) =>
  useQuery({
    queryKey: ["public-hotels", params],
    queryFn: () => getHotelList(params),
  });

export const useHotelDetails = (hotelId: string) =>
  useQuery({
    queryKey: ["hotel-details", hotelId],
    queryFn: () => getHotelDetails(hotelId),
    enabled: Boolean(hotelId),
  });

export const useRentVehicles = (params: RentSearchParams) =>
  useQuery({
    queryKey: ["rent-vehicles", params],
    queryFn: () => getRentVehicles(params),
    placeholderData: keepPreviousData,
  });
