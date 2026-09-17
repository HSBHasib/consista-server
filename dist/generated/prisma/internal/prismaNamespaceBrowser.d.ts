import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly User: 'User';
    readonly Session: 'Session';
    readonly Account: 'Account';
    readonly Verification: 'Verification';
    readonly DeviceToken: 'DeviceToken';
    readonly Task: 'Task';
    readonly TaskOccurrence: 'TaskOccurrence';
    readonly DailyActivity: 'DailyActivity';
    readonly YearlyReport: 'YearlyReport';
    readonly LeaderboardSnapshot: 'LeaderboardSnapshot';
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: 'ReadUncommitted';
    readonly ReadCommitted: 'ReadCommitted';
    readonly RepeatableRead: 'RepeatableRead';
    readonly Serializable: 'Serializable';
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly id: 'id';
    readonly name: 'name';
    readonly email: 'email';
    readonly emailVerified: 'emailVerified';
    readonly image: 'image';
    readonly role: 'role';
    readonly createdAt: 'createdAt';
    readonly updatedAt: 'updatedAt';
    readonly timezone: 'timezone';
    readonly currentStreak: 'currentStreak';
    readonly longestStreak: 'longestStreak';
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const SessionScalarFieldEnum: {
    readonly id: 'id';
    readonly userId: 'userId';
    readonly token: 'token';
    readonly expiresAt: 'expiresAt';
    readonly ipAddress: 'ipAddress';
    readonly userAgent: 'userAgent';
    readonly createdAt: 'createdAt';
    readonly updatedAt: 'updatedAt';
};
export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum];
export declare const AccountScalarFieldEnum: {
    readonly id: 'id';
    readonly userId: 'userId';
    readonly accountId: 'accountId';
    readonly providerId: 'providerId';
    readonly accessToken: 'accessToken';
    readonly refreshToken: 'refreshToken';
    readonly accessTokenExpiresAt: 'accessTokenExpiresAt';
    readonly refreshTokenExpiresAt: 'refreshTokenExpiresAt';
    readonly scope: 'scope';
    readonly idToken: 'idToken';
    readonly password: 'password';
    readonly createdAt: 'createdAt';
    readonly updatedAt: 'updatedAt';
};
export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum];
export declare const VerificationScalarFieldEnum: {
    readonly id: 'id';
    readonly identifier: 'identifier';
    readonly value: 'value';
    readonly expiresAt: 'expiresAt';
    readonly createdAt: 'createdAt';
    readonly updatedAt: 'updatedAt';
};
export type VerificationScalarFieldEnum = (typeof VerificationScalarFieldEnum)[keyof typeof VerificationScalarFieldEnum];
export declare const DeviceTokenScalarFieldEnum: {
    readonly id: 'id';
    readonly userId: 'userId';
    readonly fcmToken: 'fcmToken';
    readonly deviceType: 'deviceType';
    readonly isActive: 'isActive';
    readonly lastUsedAt: 'lastUsedAt';
    readonly createdAt: 'createdAt';
    readonly updatedAt: 'updatedAt';
};
export type DeviceTokenScalarFieldEnum = (typeof DeviceTokenScalarFieldEnum)[keyof typeof DeviceTokenScalarFieldEnum];
export declare const TaskScalarFieldEnum: {
    readonly id: 'id';
    readonly userId: 'userId';
    readonly title: 'title';
    readonly description: 'description';
    readonly isRequired: 'isRequired';
    readonly urgency: 'urgency';
    readonly earlyReminderMinutes: 'earlyReminderMinutes';
    readonly intervalValue: 'intervalValue';
    readonly intervalUnit: 'intervalUnit';
    readonly repeatCount: 'repeatCount';
    readonly createdAt: 'createdAt';
    readonly updatedAt: 'updatedAt';
};
export type TaskScalarFieldEnum = (typeof TaskScalarFieldEnum)[keyof typeof TaskScalarFieldEnum];
export declare const TaskOccurrenceScalarFieldEnum: {
    readonly id: 'id';
    readonly taskId: 'taskId';
    readonly userId: 'userId';
    readonly scheduledAt: 'scheduledAt';
    readonly reminderScheduledAt: 'reminderScheduledAt';
    readonly status: 'status';
    readonly completedAt: 'completedAt';
    readonly isRequired: 'isRequired';
    readonly earlyReminderSent: 'earlyReminderSent';
    readonly earlyReminderSentAt: 'earlyReminderSentAt';
    readonly scheduledAlertSent: 'scheduledAlertSent';
    readonly scheduledAlertSentAt: 'scheduledAlertSentAt';
    readonly createdAt: 'createdAt';
    readonly updatedAt: 'updatedAt';
};
export type TaskOccurrenceScalarFieldEnum = (typeof TaskOccurrenceScalarFieldEnum)[keyof typeof TaskOccurrenceScalarFieldEnum];
export declare const DailyActivityScalarFieldEnum: {
    readonly id: 'id';
    readonly userId: 'userId';
    readonly date: 'date';
    readonly status: 'status';
    readonly totalRequiredTasks: 'totalRequiredTasks';
    readonly completedRequiredTasks: 'completedRequiredTasks';
    readonly totalOptionalTasks: 'totalOptionalTasks';
    readonly completedOptionalTasks: 'completedOptionalTasks';
    readonly createdAt: 'createdAt';
    readonly updatedAt: 'updatedAt';
};
export type DailyActivityScalarFieldEnum = (typeof DailyActivityScalarFieldEnum)[keyof typeof DailyActivityScalarFieldEnum];
export declare const YearlyReportScalarFieldEnum: {
    readonly id: 'id';
    readonly userId: 'userId';
    readonly year: 'year';
    readonly yearlyConsistencyPct: 'yearlyConsistencyPct';
    readonly totalTasksCompleted: 'totalTasksCompleted';
    readonly successfulDaysCount: 'successfulDaysCount';
    readonly missedDaysCount: 'missedDaysCount';
    readonly noActivityDaysCount: 'noActivityDaysCount';
    readonly optionalOnlyDaysCount: 'optionalOnlyDaysCount';
    readonly streakBreaksCount: 'streakBreaksCount';
    readonly finalRank: 'finalRank';
    readonly reportData: 'reportData';
    readonly createdAt: 'createdAt';
};
export type YearlyReportScalarFieldEnum = (typeof YearlyReportScalarFieldEnum)[keyof typeof YearlyReportScalarFieldEnum];
export declare const LeaderboardSnapshotScalarFieldEnum: {
    readonly id: 'id';
    readonly userId: 'userId';
    readonly year: 'year';
    readonly rank: 'rank';
    readonly currentStreakAtEnd: 'currentStreakAtEnd';
    readonly longestStreakAtEnd: 'longestStreakAtEnd';
    readonly consistencyPct: 'consistencyPct';
    readonly streakBreaks: 'streakBreaks';
    readonly totalCompletedTasks: 'totalCompletedTasks';
    readonly createdAt: 'createdAt';
};
export type LeaderboardSnapshotScalarFieldEnum = (typeof LeaderboardSnapshotScalarFieldEnum)[keyof typeof LeaderboardSnapshotScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: 'asc';
    readonly desc: 'desc';
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const JsonNullValueInput: {
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
};
export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput];
export declare const QueryMode: {
    readonly default: 'default';
    readonly insensitive: 'insensitive';
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: 'first';
    readonly last: 'last';
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export declare const JsonNullValueFilter: {
    readonly DbNull: import("@prisma/client-runtime-utils").DbNullClass;
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
    readonly AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
//# sourceMappingURL=prismaNamespaceBrowser.d.ts.map