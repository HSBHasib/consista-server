import type { Request, Response } from "express";
export declare const handleSendOtp: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const handleVerifyOtp: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const handleLogin: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const handleResetPassword: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=auth.controller.d.ts.map