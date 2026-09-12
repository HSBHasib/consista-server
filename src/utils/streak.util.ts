import { Urgency } from "@/generated/prisma/enums.js";

// ==========================================
// Utility function to calculate streak and score
// ==========================================
export const calculateStreakAndScore = (
  currentStreak: number,
  longestStreak: number,
  lastCompletedDate: Date | null,
  currentScore: number,
  taskUrgency: Urgency
) => {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  let newStreak = currentStreak;
  let newLastCompletedDate = lastCompletedDate;

  if (!lastCompletedDate) {
    newStreak = 1;
    newLastCompletedDate = now;
  } else {
    const lastDate = new Date(
      lastCompletedDate.getFullYear(),
      lastCompletedDate.getMonth(),
      lastCompletedDate.getDate()
    );

    const diffInTime = today.getTime() - lastDate.getTime();
    const diffInDays = Math.floor(diffInTime / (1000 * 3600 * 24));

    if (diffInDays === 1) {
      // If the task was completed yesterday -> Streak + 1
      newStreak += 1;
      newLastCompletedDate = now;
    } else if (diffInDays > 1) {
      // If gap is more than one day -> Streak reset to 1
      newStreak = 1;
      newLastCompletedDate = now;
    }
    // If diffInDays === 0 it means the task was completed today
  }

  const updatedLongestStreak = Math.max(newStreak, longestStreak);

  // Urgency based scoring
  const pointsMap: Record<Urgency, number> = {
    NORMAL: 10,
    MEDIUM: 20,
  };
  
  const earnedPoints = pointsMap[taskUrgency] || 10;
  const newScore = currentScore + earnedPoints;

  return {
    currentStreak: newStreak,
    longestStreak: updatedLongestStreak,
    lastCompletedDate: newLastCompletedDate,
    performanceScore: newScore,
    earnedPoints,
  };
};

