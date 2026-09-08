import type { Response } from "express";

interface PaginationMeta {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
  pagination?: PaginationMeta;
  [key: string]: unknown;
}

export function sendSuccess<T>(
  res: Response,
  message: string,
  data?: T,
  statusCode: number = 200,
  pagination?: PaginationMeta,
  extraMeta?: Record<string, unknown>
): Response {
  const response: ApiResponse<T> = {
    success: true,
    message,
  };

  if (data !== undefined) response.data = data;
  if (pagination) response.pagination = pagination;
  if (extraMeta) Object.assign(response, extraMeta);

  return res.status(statusCode).json(response);
}

export function sendError(
  res: Response,
  message: string,
  statusCode: number = 500,
  errors?: unknown
): Response {
  const response: ApiResponse = {
    success: false,
    message,
  };

  if (errors) response.errors = errors;

  return res.status(statusCode).json(response);
}
