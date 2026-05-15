/**
 * Payment Status Constants
 */

export const PAYMENT_STATUS = {
  PENDING: "pending",
  COMPLETED: "completed",
  FAILED: "failed",
  REFUNDED: "refunded",
} as const;

export const PAYMENT_STATUS_LABELS = {
  pending: "Pending",
  completed: "Completed",
  failed: "Failed",
  refunded: "Refunded",
} as const;

export const PAYMENT_METHODS = {
  CREDIT_CARD: "credit_card",
  DEBIT_CARD: "debit_card",
  PAYPAL: "paypal",
  BANK_TRANSFER: "bank_transfer",
} as const;
