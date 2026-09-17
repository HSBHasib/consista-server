import PDFDocument from "pdfkit";
// ========================
// Generate Yearly Report PDF — Using pdfkit
// ========================
export const generateYearlyReportPDF = async (reportData, userName) => {
    return new Promise((resolve, reject) => {
        const doc = new PDFDocument({ margin: 50 });
        const buffers = [];
        doc.on("data", (chunk) => buffers.push(chunk));
        doc.on("end", () => resolve(Buffer.concat(buffers)));
        doc.on("error", (err) => reject(err));
        // Header
        doc.fontSize(22).text("CONSISTA", { align: "center" });
        doc.fontSize(14).text("Yearly Performance Report", { align: "center" });
        doc.moveDown(2);
        // User & Overview Meta
        doc.fontSize(12).text(`User: ${userName}`);
        doc.text(`Report Year: ${reportData.year}`);
        doc.text(`Final Leaderboard Rank: ${reportData.finalRank ?? "N/A"}`);
        doc.moveDown();
        // Key Stats
        doc.fontSize(14).text("Performance Summary:", { underline: true });
        doc.moveDown(0.5);
        doc.fontSize(12);
        doc.text(`Consistency Rate: ${reportData.yearlyConsistencyPct}%`);
        doc.text(`Total Tasks Completed: ${reportData.totalTasksCompleted}`);
        doc.text(`Successful Days: ${reportData.successfulDaysCount}`);
        doc.text(`Missed Days: ${reportData.missedDaysCount}`);
        doc.text(`No Activity Days: ${reportData.noActivityDaysCount}`);
        doc.text(`Optional-Only Days: ${reportData.optionalOnlyDaysCount}`);
        doc.text(`Streak Breaks: ${reportData.streakBreaksCount}`);
        doc.end();
    });
};
//# sourceMappingURL=pdfReport.service.js.map