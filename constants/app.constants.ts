/**
 * App Constants
 */

export const APP_CONSTANTS = {
  // Pagination
  DEFAULT_PAGE_SIZE: 10,
  MAX_PAGE_SIZE: 100,

  // Timeouts
  API_TIMEOUT: 30000,
  DEBOUNCE_DELAY: 500,

  // File uploads
  MAX_FILE_SIZE: 5 * 1024 * 1024, // 5MB
  ALLOWED_FILE_TYPES: ["image/jpeg", "image/png", "image/webp"],

  // Validation
  PASSWORD_MIN_LENGTH: 8,
  USERNAME_MIN_LENGTH: 3,
  NAME_MIN_LENGTH: 2,
} as const;
