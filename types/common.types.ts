export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

export interface Pagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export type ID = string | number;

export interface Timestamps {
  createdAt: string;
  updatedAt: string;
}
