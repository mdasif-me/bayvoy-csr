/**
 * Hotel Validation Schema
 */

export interface HotelValidationRules {
  name: string;
  description: string;
  address: string;
  rating: number;
  price: number;
}

export function validateHotel(data: Partial<HotelValidationRules>): string[] {
  const errors: string[] = [];

  if (!data.name || data.name.trim().length === 0) {
    errors.push("Hotel name is required");
  }

  if (!data.description || data.description.trim().length === 0) {
    errors.push("Description is required");
  }

  if (data.price && data.price < 0) {
    errors.push("Price must be a positive number");
  }

  if (data.rating && (data.rating < 0 || data.rating > 5)) {
    errors.push("Rating must be between 0 and 5");
  }

  return errors;
}
