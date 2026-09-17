// ======================================
// Gets the local hour for a given timezone.
// ======================================
export const getLocalHourForTimezone = (date, timeZone) => {
    const hourStr = new Intl.DateTimeFormat("en-US", {
        timeZone: timeZone || "UTC",
        hour: "numeric",
        hour12: false,
    }).format(date);
    return parseInt(hourStr, 10);
};
// ======================================
// Gets the local date string for a given timezone.
// ======================================
export const getLocalDateString = (date, timeZone) => {
    return new Intl.DateTimeFormat("en-CA", {
        timeZone: timeZone || "UTC",
    }).format(date);
};
//# sourceMappingURL=date.util.js.map