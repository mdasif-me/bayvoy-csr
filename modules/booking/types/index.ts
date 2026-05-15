/**
 * Booking Types
 */

export interface Booking {
  id: string;
  userId: string;
  hotelId: string;
  roomId: string;
  checkInDate: string;
  checkOutDate: string;
  guestCount: number;
  totalPrice: number;
  status: "pending" | "confirmed" | "cancelled" | "completed";
  createdAt: string;
}

export interface BookingRequest {
  hotelId: string;
  roomId: string;
  checkInDate: string;
  checkOutDate: string;
  guestCount: number;
}
