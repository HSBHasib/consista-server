import type { Response } from "express";
export declare function sendSuccess<T>(res: Response, message: string, data?: T, statusCode?: number, pagination?: any, extraMeta?: Record<string, unknown>): Response;
export declare function sendError(res: Response, message: string, statusCode?: number, errors?: unknown): Response;
//# sourceMappingURL=response.util.d.ts.map