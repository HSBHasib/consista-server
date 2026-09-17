// ==========================================
// Helper function to send success responses
// ==========================================
export function sendSuccess(res, message, data, statusCode = 200, pagination, extraMeta) {
    return res.status(statusCode).json({
        success: true,
        message,
        ...(data !== undefined && { data }),
        ...(pagination && { pagination }),
        ...(extraMeta ? extraMeta : {}),
    });
}
// ==========================================
// Helper function to send error responses
// ==========================================
export function sendError(res, message, statusCode = 500, errors) {
    return res.status(statusCode).json({
        success: false,
        message,
        ...(errors !== undefined ? { errors } : {}),
    });
}
//# sourceMappingURL=response.util.js.map