import type { Request } from "express";
import type { User } from "better-auth";

export interface AuthRequest extends Request {
  user?: User;
}

export interface PaginationQuery {
  page?: string;
  limit?: string;
}

export interface TaskQuery extends PaginationQuery {
  search?: string;
  isRequired?: string;
}
