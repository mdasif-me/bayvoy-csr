/**
 * Role Constants
 */

export const ROLES = {
  ADMIN: "admin",
  VENDOR: "vendor",
  CUSTOMER: "customer",
} as const;

export const ROLE_LABELS = {
  admin: "Administrator",
  vendor: "Vendor",
  customer: "Customer",
} as const;

export const ROLE_PERMISSIONS = {
  admin: ["*"], // Full access
  vendor: [
    "manage_hotels",
    "manage_rooms",
    "manage_bookings",
    "view_earnings",
    "manage_profile",
  ],
  customer: [
    "book_hotels",
    "view_bookings",
    "manage_wishlist",
    "write_reviews",
    "manage_profile",
  ],
} as const;
