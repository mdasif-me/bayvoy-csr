export type FormType = "hotel" | "rent" | "tour" | "customize";

export interface HotelFormData {
    location: string;
    checkIn: string;
    checkOut: string;
    roomsGuests: string;
    travelTypes: string[];
}

export interface RentFormData {
    pickupLocation: string;
    dropoffLocation: string;
    pickupDate: string;
    dropoffDate: string;
    passengers: string;
    vehicleTypes: string[];
}

export interface TourFormData {
    destination: string;
    date: string;
}

export interface CustomizeFormData {
    details: string;
}

export type FormData =
    | HotelFormData
    | RentFormData
    | TourFormData
    | CustomizeFormData;

export interface SearchResult {
    id: number;
    name: string;
    description: string;
}

export interface SearchParams {
    location?: string;
    checkIn?: string;
    checkOut?: string;
    rooms?: string;
    roomsGuests?: string;
    travelTypes?: string[];
    // Rent
    rentLocation?: string;
    rentStart?: string;
    rentEnd?: string;
    rentGuests?: number;

    // Tour
    tourDestination?: string;
    tourStart?: string;
    tourEnd?: string;
    tourTravelers?: number;

    // Customize
    customizeType?: string;
    customizeDetails?: string[];
}
