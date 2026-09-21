// import { auth } from "../lib/auth.js";
import { sendError } from "../utils/response.util.js";
import { prisma } from "../lib/prisma.js";
// export const requireAuth = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     const session = await auth.api.getSession({
//       headers: req.headers,
//     });
//     if (!session) {
//       return sendError(res, "Unauthorized access. Please log in.", 401);
//     }
//     // Attach the session and user objects to the request
//     req.user = session.user;
//     req.session = session.session;
//     return next();
//   } catch {
//     return sendError(res, "Authentication failed.", 401);
//   }
// };
export const requireAuth = async (req, res, next) => {
    console.log("🔥 HIT REQUIRE_AUTH MIDDLEWARE");
    const authHeaderVal = req.headers.authorization;
    const token = authHeaderVal && authHeaderVal.split(' ')[1];
    console.log("Token received:", token);
    if (!token)
        return sendError(res, "Unauthorized (no token)", 401);
    const session = await prisma.session.findUnique({
        where: { token },
        include: { user: true }
    });
    console.log("Session found in DB:", session);
    if (!session || new Date(session.expiresAt) < new Date()) {
        return sendError(res, "Unauthorized (expired/invalid)", 401);
    }
    req.user = session.user;
    req.session = session;
    next();
};
//# sourceMappingURL=auth.middleware.js.map