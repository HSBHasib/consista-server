import { contactSchema } from "../validations/contact.validation.js";
import { sendContactEmail } from "../services/contact.service.js";
export const handleContactSubmission = async (req, res, next) => {
    try {
        const validatedData = contactSchema.parse(req.body);
        await sendContactEmail(validatedData);
        res.status(200).json({
            success: true,
            message: "Your message has been sent successfully.",
        });
    }
    catch (error) {
        next(error);
    }
};
//# sourceMappingURL=contact.controller.js.map