import { transporter } from "../utils/mail.util.js";
export const sendContactEmail = async (data) => {
    const adminEmail = process.env.CONTACT_EMAIL || process.env.SMTP_USER;
    if (!adminEmail) {
        throw new Error("Admin contact email is not configured in environment variables.");
    }
    const htmlContent = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
      <h2 style="color: #2563eb;">New Contact Form Submission</h2>
      <p>You have received a new support/contact request from the Consista platform.</p>
      <hr style="border: 0; border-top: 1px solid #eee;" />
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Subject:</strong> ${data.subject}</p>
      <p><strong>Message:</strong></p>
      <blockquote style="background: #f9f9f9; border-left: 4px solid #2563eb; margin: 10px 0; padding: 10px 15px;">
        ${data.message.replace(/\n/g, "<br>")}
      </blockquote>
      <hr style="border: 0; border-top: 1px solid #eee;" />
      <p style="font-size: 12px; color: #777;">This email was sent via the Consista Contact / Support Form.</p>
    </div>
  `;
    // Admin/Support email
    await transporter.sendMail({
        from: `"Consista" <${process.env.SMTP_USER}>`,
        to: adminEmail,
        subject: `[Consista Contact] ${data.subject}`,
        html: htmlContent,
        replyTo: data.email,
    });
};
//# sourceMappingURL=contact.service.js.map