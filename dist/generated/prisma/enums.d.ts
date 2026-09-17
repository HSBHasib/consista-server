export declare const Role: {
    readonly USER: 'USER';
    readonly ADMIN: 'ADMIN';
};
export type Role = (typeof Role)[keyof typeof Role];
export declare const Urgency: {
    readonly NORMAL: 'NORMAL';
    readonly MEDIUM: 'MEDIUM';
};
export type Urgency = (typeof Urgency)[keyof typeof Urgency];
export declare const RecurrenceUnit: {
    readonly HOUR: 'HOUR';
    readonly DAY: 'DAY';
};
export type RecurrenceUnit = (typeof RecurrenceUnit)[keyof typeof RecurrenceUnit];
export declare const OccurrenceStatus: {
    readonly PENDING: 'PENDING';
    readonly COMPLETED: 'COMPLETED';
    readonly MISSED: 'MISSED';
};
export type OccurrenceStatus = (typeof OccurrenceStatus)[keyof typeof OccurrenceStatus];
export declare const DailyStatus: {
    readonly SUCCESSFUL: 'SUCCESSFUL';
    readonly MISSED: 'MISSED';
    readonly NO_ACTIVITY: 'NO_ACTIVITY';
    readonly OPTIONAL_ONLY: 'OPTIONAL_ONLY';
};
export type DailyStatus = (typeof DailyStatus)[keyof typeof DailyStatus];
//# sourceMappingURL=enums.d.ts.map