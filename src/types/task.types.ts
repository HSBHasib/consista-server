import type { OccurrenceStatus, Urgency } from "@/generated/prisma/enums.js";

// ==========================================
// Data Transfer Object for querying tasks
// ==========================================
export interface TaskQueryDTO {
  page?: string;
  limit?: string;
  status?: OccurrenceStatus;
  urgency?: Urgency; 
  search?: string;
  startDate?: string;
  endDate?: string;
}

