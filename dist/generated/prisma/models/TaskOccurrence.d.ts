import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model TaskOccurrence
 *
 */
export type TaskOccurrenceModel = runtime.Types.Result.DefaultSelection<Prisma.$TaskOccurrencePayload>;
export type AggregateTaskOccurrence = {
    _count: TaskOccurrenceCountAggregateOutputType | null;
    _min: TaskOccurrenceMinAggregateOutputType | null;
    _max: TaskOccurrenceMaxAggregateOutputType | null;
};
export type TaskOccurrenceMinAggregateOutputType = {
    id: string | null;
    taskId: string | null;
    userId: string | null;
    scheduledAt: Date | null;
    reminderScheduledAt: Date | null;
    status: $Enums.OccurrenceStatus | null;
    completedAt: Date | null;
    isRequired: boolean | null;
    earlyReminderSent: boolean | null;
    earlyReminderSentAt: Date | null;
    scheduledAlertSent: boolean | null;
    scheduledAlertSentAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type TaskOccurrenceMaxAggregateOutputType = {
    id: string | null;
    taskId: string | null;
    userId: string | null;
    scheduledAt: Date | null;
    reminderScheduledAt: Date | null;
    status: $Enums.OccurrenceStatus | null;
    completedAt: Date | null;
    isRequired: boolean | null;
    earlyReminderSent: boolean | null;
    earlyReminderSentAt: Date | null;
    scheduledAlertSent: boolean | null;
    scheduledAlertSentAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type TaskOccurrenceCountAggregateOutputType = {
    id: number;
    taskId: number;
    userId: number;
    scheduledAt: number;
    reminderScheduledAt: number;
    status: number;
    completedAt: number;
    isRequired: number;
    earlyReminderSent: number;
    earlyReminderSentAt: number;
    scheduledAlertSent: number;
    scheduledAlertSentAt: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type TaskOccurrenceMinAggregateInputType = {
    id?: true;
    taskId?: true;
    userId?: true;
    scheduledAt?: true;
    reminderScheduledAt?: true;
    status?: true;
    completedAt?: true;
    isRequired?: true;
    earlyReminderSent?: true;
    earlyReminderSentAt?: true;
    scheduledAlertSent?: true;
    scheduledAlertSentAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type TaskOccurrenceMaxAggregateInputType = {
    id?: true;
    taskId?: true;
    userId?: true;
    scheduledAt?: true;
    reminderScheduledAt?: true;
    status?: true;
    completedAt?: true;
    isRequired?: true;
    earlyReminderSent?: true;
    earlyReminderSentAt?: true;
    scheduledAlertSent?: true;
    scheduledAlertSentAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type TaskOccurrenceCountAggregateInputType = {
    id?: true;
    taskId?: true;
    userId?: true;
    scheduledAt?: true;
    reminderScheduledAt?: true;
    status?: true;
    completedAt?: true;
    isRequired?: true;
    earlyReminderSent?: true;
    earlyReminderSentAt?: true;
    scheduledAlertSent?: true;
    scheduledAlertSentAt?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type TaskOccurrenceAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which TaskOccurrence to aggregate.
     */
    where?: Prisma.TaskOccurrenceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TaskOccurrences to fetch.
     */
    orderBy?: Prisma.TaskOccurrenceOrderByWithRelationInput | Prisma.TaskOccurrenceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.TaskOccurrenceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TaskOccurrences from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TaskOccurrences.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned TaskOccurrences
    **/
    _count?: true | TaskOccurrenceCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: TaskOccurrenceMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: TaskOccurrenceMaxAggregateInputType;
};
export type GetTaskOccurrenceAggregateType<T extends TaskOccurrenceAggregateArgs> = {
    [P in keyof T & keyof AggregateTaskOccurrence]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTaskOccurrence[P]> : Prisma.GetScalarType<T[P], AggregateTaskOccurrence[P]>;
};
export type TaskOccurrenceGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TaskOccurrenceWhereInput;
    orderBy?: Prisma.TaskOccurrenceOrderByWithAggregationInput | Prisma.TaskOccurrenceOrderByWithAggregationInput[];
    by: Prisma.TaskOccurrenceScalarFieldEnum[] | Prisma.TaskOccurrenceScalarFieldEnum;
    having?: Prisma.TaskOccurrenceScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TaskOccurrenceCountAggregateInputType | true;
    _min?: TaskOccurrenceMinAggregateInputType;
    _max?: TaskOccurrenceMaxAggregateInputType;
};
export type TaskOccurrenceGroupByOutputType = {
    id: string;
    taskId: string;
    userId: string;
    scheduledAt: Date;
    reminderScheduledAt: Date | null;
    status: $Enums.OccurrenceStatus;
    completedAt: Date | null;
    isRequired: boolean;
    earlyReminderSent: boolean;
    earlyReminderSentAt: Date | null;
    scheduledAlertSent: boolean;
    scheduledAlertSentAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: TaskOccurrenceCountAggregateOutputType | null;
    _min: TaskOccurrenceMinAggregateOutputType | null;
    _max: TaskOccurrenceMaxAggregateOutputType | null;
};
export type GetTaskOccurrenceGroupByPayload<T extends TaskOccurrenceGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TaskOccurrenceGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TaskOccurrenceGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TaskOccurrenceGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TaskOccurrenceGroupByOutputType[P]>;
}>>;
export type TaskOccurrenceWhereInput = {
    AND?: Prisma.TaskOccurrenceWhereInput | Prisma.TaskOccurrenceWhereInput[];
    OR?: Prisma.TaskOccurrenceWhereInput[];
    NOT?: Prisma.TaskOccurrenceWhereInput | Prisma.TaskOccurrenceWhereInput[];
    id?: Prisma.StringFilter<"TaskOccurrence"> | string;
    taskId?: Prisma.StringFilter<"TaskOccurrence"> | string;
    userId?: Prisma.StringFilter<"TaskOccurrence"> | string;
    scheduledAt?: Prisma.DateTimeFilter<"TaskOccurrence"> | Date | string;
    reminderScheduledAt?: Prisma.DateTimeNullableFilter<"TaskOccurrence"> | Date | string | null;
    status?: Prisma.EnumOccurrenceStatusFilter<"TaskOccurrence"> | $Enums.OccurrenceStatus;
    completedAt?: Prisma.DateTimeNullableFilter<"TaskOccurrence"> | Date | string | null;
    isRequired?: Prisma.BoolFilter<"TaskOccurrence"> | boolean;
    earlyReminderSent?: Prisma.BoolFilter<"TaskOccurrence"> | boolean;
    earlyReminderSentAt?: Prisma.DateTimeNullableFilter<"TaskOccurrence"> | Date | string | null;
    scheduledAlertSent?: Prisma.BoolFilter<"TaskOccurrence"> | boolean;
    scheduledAlertSentAt?: Prisma.DateTimeNullableFilter<"TaskOccurrence"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"TaskOccurrence"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"TaskOccurrence"> | Date | string;
    task?: Prisma.XOR<Prisma.TaskScalarRelationFilter, Prisma.TaskWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type TaskOccurrenceOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    taskId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    scheduledAt?: Prisma.SortOrder;
    reminderScheduledAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    isRequired?: Prisma.SortOrder;
    earlyReminderSent?: Prisma.SortOrder;
    earlyReminderSentAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    scheduledAlertSent?: Prisma.SortOrder;
    scheduledAlertSentAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    task?: Prisma.TaskOrderByWithRelationInput;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type TaskOccurrenceWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.TaskOccurrenceWhereInput | Prisma.TaskOccurrenceWhereInput[];
    OR?: Prisma.TaskOccurrenceWhereInput[];
    NOT?: Prisma.TaskOccurrenceWhereInput | Prisma.TaskOccurrenceWhereInput[];
    taskId?: Prisma.StringFilter<"TaskOccurrence"> | string;
    userId?: Prisma.StringFilter<"TaskOccurrence"> | string;
    scheduledAt?: Prisma.DateTimeFilter<"TaskOccurrence"> | Date | string;
    reminderScheduledAt?: Prisma.DateTimeNullableFilter<"TaskOccurrence"> | Date | string | null;
    status?: Prisma.EnumOccurrenceStatusFilter<"TaskOccurrence"> | $Enums.OccurrenceStatus;
    completedAt?: Prisma.DateTimeNullableFilter<"TaskOccurrence"> | Date | string | null;
    isRequired?: Prisma.BoolFilter<"TaskOccurrence"> | boolean;
    earlyReminderSent?: Prisma.BoolFilter<"TaskOccurrence"> | boolean;
    earlyReminderSentAt?: Prisma.DateTimeNullableFilter<"TaskOccurrence"> | Date | string | null;
    scheduledAlertSent?: Prisma.BoolFilter<"TaskOccurrence"> | boolean;
    scheduledAlertSentAt?: Prisma.DateTimeNullableFilter<"TaskOccurrence"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"TaskOccurrence"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"TaskOccurrence"> | Date | string;
    task?: Prisma.XOR<Prisma.TaskScalarRelationFilter, Prisma.TaskWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id">;
export type TaskOccurrenceOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    taskId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    scheduledAt?: Prisma.SortOrder;
    reminderScheduledAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    isRequired?: Prisma.SortOrder;
    earlyReminderSent?: Prisma.SortOrder;
    earlyReminderSentAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    scheduledAlertSent?: Prisma.SortOrder;
    scheduledAlertSentAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.TaskOccurrenceCountOrderByAggregateInput;
    _max?: Prisma.TaskOccurrenceMaxOrderByAggregateInput;
    _min?: Prisma.TaskOccurrenceMinOrderByAggregateInput;
};
export type TaskOccurrenceScalarWhereWithAggregatesInput = {
    AND?: Prisma.TaskOccurrenceScalarWhereWithAggregatesInput | Prisma.TaskOccurrenceScalarWhereWithAggregatesInput[];
    OR?: Prisma.TaskOccurrenceScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TaskOccurrenceScalarWhereWithAggregatesInput | Prisma.TaskOccurrenceScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"TaskOccurrence"> | string;
    taskId?: Prisma.StringWithAggregatesFilter<"TaskOccurrence"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"TaskOccurrence"> | string;
    scheduledAt?: Prisma.DateTimeWithAggregatesFilter<"TaskOccurrence"> | Date | string;
    reminderScheduledAt?: Prisma.DateTimeNullableWithAggregatesFilter<"TaskOccurrence"> | Date | string | null;
    status?: Prisma.EnumOccurrenceStatusWithAggregatesFilter<"TaskOccurrence"> | $Enums.OccurrenceStatus;
    completedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"TaskOccurrence"> | Date | string | null;
    isRequired?: Prisma.BoolWithAggregatesFilter<"TaskOccurrence"> | boolean;
    earlyReminderSent?: Prisma.BoolWithAggregatesFilter<"TaskOccurrence"> | boolean;
    earlyReminderSentAt?: Prisma.DateTimeNullableWithAggregatesFilter<"TaskOccurrence"> | Date | string | null;
    scheduledAlertSent?: Prisma.BoolWithAggregatesFilter<"TaskOccurrence"> | boolean;
    scheduledAlertSentAt?: Prisma.DateTimeNullableWithAggregatesFilter<"TaskOccurrence"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"TaskOccurrence"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"TaskOccurrence"> | Date | string;
};
export type TaskOccurrenceCreateInput = {
    id?: string;
    scheduledAt: Date | string;
    reminderScheduledAt?: Date | string | null;
    status?: $Enums.OccurrenceStatus;
    completedAt?: Date | string | null;
    isRequired?: boolean;
    earlyReminderSent?: boolean;
    earlyReminderSentAt?: Date | string | null;
    scheduledAlertSent?: boolean;
    scheduledAlertSentAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    task: Prisma.TaskCreateNestedOneWithoutOccurrencesInput;
    user: Prisma.UserCreateNestedOneWithoutTaskOccurrencesInput;
};
export type TaskOccurrenceUncheckedCreateInput = {
    id?: string;
    taskId: string;
    userId: string;
    scheduledAt: Date | string;
    reminderScheduledAt?: Date | string | null;
    status?: $Enums.OccurrenceStatus;
    completedAt?: Date | string | null;
    isRequired?: boolean;
    earlyReminderSent?: boolean;
    earlyReminderSentAt?: Date | string | null;
    scheduledAlertSent?: boolean;
    scheduledAlertSentAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TaskOccurrenceUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    scheduledAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reminderScheduledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumOccurrenceStatusFieldUpdateOperationsInput | $Enums.OccurrenceStatus;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isRequired?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    earlyReminderSent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    earlyReminderSentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    scheduledAlertSent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    scheduledAlertSentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    task?: Prisma.TaskUpdateOneRequiredWithoutOccurrencesNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutTaskOccurrencesNestedInput;
};
export type TaskOccurrenceUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    taskId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    scheduledAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reminderScheduledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumOccurrenceStatusFieldUpdateOperationsInput | $Enums.OccurrenceStatus;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isRequired?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    earlyReminderSent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    earlyReminderSentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    scheduledAlertSent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    scheduledAlertSentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TaskOccurrenceCreateManyInput = {
    id?: string;
    taskId: string;
    userId: string;
    scheduledAt: Date | string;
    reminderScheduledAt?: Date | string | null;
    status?: $Enums.OccurrenceStatus;
    completedAt?: Date | string | null;
    isRequired?: boolean;
    earlyReminderSent?: boolean;
    earlyReminderSentAt?: Date | string | null;
    scheduledAlertSent?: boolean;
    scheduledAlertSentAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TaskOccurrenceUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    scheduledAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reminderScheduledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumOccurrenceStatusFieldUpdateOperationsInput | $Enums.OccurrenceStatus;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isRequired?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    earlyReminderSent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    earlyReminderSentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    scheduledAlertSent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    scheduledAlertSentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TaskOccurrenceUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    taskId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    scheduledAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reminderScheduledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumOccurrenceStatusFieldUpdateOperationsInput | $Enums.OccurrenceStatus;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isRequired?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    earlyReminderSent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    earlyReminderSentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    scheduledAlertSent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    scheduledAlertSentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TaskOccurrenceListRelationFilter = {
    every?: Prisma.TaskOccurrenceWhereInput;
    some?: Prisma.TaskOccurrenceWhereInput;
    none?: Prisma.TaskOccurrenceWhereInput;
};
export type TaskOccurrenceOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type TaskOccurrenceCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    taskId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    scheduledAt?: Prisma.SortOrder;
    reminderScheduledAt?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrder;
    isRequired?: Prisma.SortOrder;
    earlyReminderSent?: Prisma.SortOrder;
    earlyReminderSentAt?: Prisma.SortOrder;
    scheduledAlertSent?: Prisma.SortOrder;
    scheduledAlertSentAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TaskOccurrenceMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    taskId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    scheduledAt?: Prisma.SortOrder;
    reminderScheduledAt?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrder;
    isRequired?: Prisma.SortOrder;
    earlyReminderSent?: Prisma.SortOrder;
    earlyReminderSentAt?: Prisma.SortOrder;
    scheduledAlertSent?: Prisma.SortOrder;
    scheduledAlertSentAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TaskOccurrenceMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    taskId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    scheduledAt?: Prisma.SortOrder;
    reminderScheduledAt?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrder;
    isRequired?: Prisma.SortOrder;
    earlyReminderSent?: Prisma.SortOrder;
    earlyReminderSentAt?: Prisma.SortOrder;
    scheduledAlertSent?: Prisma.SortOrder;
    scheduledAlertSentAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TaskOccurrenceCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.TaskOccurrenceCreateWithoutUserInput, Prisma.TaskOccurrenceUncheckedCreateWithoutUserInput> | Prisma.TaskOccurrenceCreateWithoutUserInput[] | Prisma.TaskOccurrenceUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.TaskOccurrenceCreateOrConnectWithoutUserInput | Prisma.TaskOccurrenceCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.TaskOccurrenceCreateManyUserInputEnvelope;
    connect?: Prisma.TaskOccurrenceWhereUniqueInput | Prisma.TaskOccurrenceWhereUniqueInput[];
};
export type TaskOccurrenceUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.TaskOccurrenceCreateWithoutUserInput, Prisma.TaskOccurrenceUncheckedCreateWithoutUserInput> | Prisma.TaskOccurrenceCreateWithoutUserInput[] | Prisma.TaskOccurrenceUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.TaskOccurrenceCreateOrConnectWithoutUserInput | Prisma.TaskOccurrenceCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.TaskOccurrenceCreateManyUserInputEnvelope;
    connect?: Prisma.TaskOccurrenceWhereUniqueInput | Prisma.TaskOccurrenceWhereUniqueInput[];
};
export type TaskOccurrenceUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.TaskOccurrenceCreateWithoutUserInput, Prisma.TaskOccurrenceUncheckedCreateWithoutUserInput> | Prisma.TaskOccurrenceCreateWithoutUserInput[] | Prisma.TaskOccurrenceUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.TaskOccurrenceCreateOrConnectWithoutUserInput | Prisma.TaskOccurrenceCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.TaskOccurrenceUpsertWithWhereUniqueWithoutUserInput | Prisma.TaskOccurrenceUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.TaskOccurrenceCreateManyUserInputEnvelope;
    set?: Prisma.TaskOccurrenceWhereUniqueInput | Prisma.TaskOccurrenceWhereUniqueInput[];
    disconnect?: Prisma.TaskOccurrenceWhereUniqueInput | Prisma.TaskOccurrenceWhereUniqueInput[];
    delete?: Prisma.TaskOccurrenceWhereUniqueInput | Prisma.TaskOccurrenceWhereUniqueInput[];
    connect?: Prisma.TaskOccurrenceWhereUniqueInput | Prisma.TaskOccurrenceWhereUniqueInput[];
    update?: Prisma.TaskOccurrenceUpdateWithWhereUniqueWithoutUserInput | Prisma.TaskOccurrenceUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.TaskOccurrenceUpdateManyWithWhereWithoutUserInput | Prisma.TaskOccurrenceUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.TaskOccurrenceScalarWhereInput | Prisma.TaskOccurrenceScalarWhereInput[];
};
export type TaskOccurrenceUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.TaskOccurrenceCreateWithoutUserInput, Prisma.TaskOccurrenceUncheckedCreateWithoutUserInput> | Prisma.TaskOccurrenceCreateWithoutUserInput[] | Prisma.TaskOccurrenceUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.TaskOccurrenceCreateOrConnectWithoutUserInput | Prisma.TaskOccurrenceCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.TaskOccurrenceUpsertWithWhereUniqueWithoutUserInput | Prisma.TaskOccurrenceUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.TaskOccurrenceCreateManyUserInputEnvelope;
    set?: Prisma.TaskOccurrenceWhereUniqueInput | Prisma.TaskOccurrenceWhereUniqueInput[];
    disconnect?: Prisma.TaskOccurrenceWhereUniqueInput | Prisma.TaskOccurrenceWhereUniqueInput[];
    delete?: Prisma.TaskOccurrenceWhereUniqueInput | Prisma.TaskOccurrenceWhereUniqueInput[];
    connect?: Prisma.TaskOccurrenceWhereUniqueInput | Prisma.TaskOccurrenceWhereUniqueInput[];
    update?: Prisma.TaskOccurrenceUpdateWithWhereUniqueWithoutUserInput | Prisma.TaskOccurrenceUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.TaskOccurrenceUpdateManyWithWhereWithoutUserInput | Prisma.TaskOccurrenceUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.TaskOccurrenceScalarWhereInput | Prisma.TaskOccurrenceScalarWhereInput[];
};
export type TaskOccurrenceCreateNestedManyWithoutTaskInput = {
    create?: Prisma.XOR<Prisma.TaskOccurrenceCreateWithoutTaskInput, Prisma.TaskOccurrenceUncheckedCreateWithoutTaskInput> | Prisma.TaskOccurrenceCreateWithoutTaskInput[] | Prisma.TaskOccurrenceUncheckedCreateWithoutTaskInput[];
    connectOrCreate?: Prisma.TaskOccurrenceCreateOrConnectWithoutTaskInput | Prisma.TaskOccurrenceCreateOrConnectWithoutTaskInput[];
    createMany?: Prisma.TaskOccurrenceCreateManyTaskInputEnvelope;
    connect?: Prisma.TaskOccurrenceWhereUniqueInput | Prisma.TaskOccurrenceWhereUniqueInput[];
};
export type TaskOccurrenceUncheckedCreateNestedManyWithoutTaskInput = {
    create?: Prisma.XOR<Prisma.TaskOccurrenceCreateWithoutTaskInput, Prisma.TaskOccurrenceUncheckedCreateWithoutTaskInput> | Prisma.TaskOccurrenceCreateWithoutTaskInput[] | Prisma.TaskOccurrenceUncheckedCreateWithoutTaskInput[];
    connectOrCreate?: Prisma.TaskOccurrenceCreateOrConnectWithoutTaskInput | Prisma.TaskOccurrenceCreateOrConnectWithoutTaskInput[];
    createMany?: Prisma.TaskOccurrenceCreateManyTaskInputEnvelope;
    connect?: Prisma.TaskOccurrenceWhereUniqueInput | Prisma.TaskOccurrenceWhereUniqueInput[];
};
export type TaskOccurrenceUpdateManyWithoutTaskNestedInput = {
    create?: Prisma.XOR<Prisma.TaskOccurrenceCreateWithoutTaskInput, Prisma.TaskOccurrenceUncheckedCreateWithoutTaskInput> | Prisma.TaskOccurrenceCreateWithoutTaskInput[] | Prisma.TaskOccurrenceUncheckedCreateWithoutTaskInput[];
    connectOrCreate?: Prisma.TaskOccurrenceCreateOrConnectWithoutTaskInput | Prisma.TaskOccurrenceCreateOrConnectWithoutTaskInput[];
    upsert?: Prisma.TaskOccurrenceUpsertWithWhereUniqueWithoutTaskInput | Prisma.TaskOccurrenceUpsertWithWhereUniqueWithoutTaskInput[];
    createMany?: Prisma.TaskOccurrenceCreateManyTaskInputEnvelope;
    set?: Prisma.TaskOccurrenceWhereUniqueInput | Prisma.TaskOccurrenceWhereUniqueInput[];
    disconnect?: Prisma.TaskOccurrenceWhereUniqueInput | Prisma.TaskOccurrenceWhereUniqueInput[];
    delete?: Prisma.TaskOccurrenceWhereUniqueInput | Prisma.TaskOccurrenceWhereUniqueInput[];
    connect?: Prisma.TaskOccurrenceWhereUniqueInput | Prisma.TaskOccurrenceWhereUniqueInput[];
    update?: Prisma.TaskOccurrenceUpdateWithWhereUniqueWithoutTaskInput | Prisma.TaskOccurrenceUpdateWithWhereUniqueWithoutTaskInput[];
    updateMany?: Prisma.TaskOccurrenceUpdateManyWithWhereWithoutTaskInput | Prisma.TaskOccurrenceUpdateManyWithWhereWithoutTaskInput[];
    deleteMany?: Prisma.TaskOccurrenceScalarWhereInput | Prisma.TaskOccurrenceScalarWhereInput[];
};
export type TaskOccurrenceUncheckedUpdateManyWithoutTaskNestedInput = {
    create?: Prisma.XOR<Prisma.TaskOccurrenceCreateWithoutTaskInput, Prisma.TaskOccurrenceUncheckedCreateWithoutTaskInput> | Prisma.TaskOccurrenceCreateWithoutTaskInput[] | Prisma.TaskOccurrenceUncheckedCreateWithoutTaskInput[];
    connectOrCreate?: Prisma.TaskOccurrenceCreateOrConnectWithoutTaskInput | Prisma.TaskOccurrenceCreateOrConnectWithoutTaskInput[];
    upsert?: Prisma.TaskOccurrenceUpsertWithWhereUniqueWithoutTaskInput | Prisma.TaskOccurrenceUpsertWithWhereUniqueWithoutTaskInput[];
    createMany?: Prisma.TaskOccurrenceCreateManyTaskInputEnvelope;
    set?: Prisma.TaskOccurrenceWhereUniqueInput | Prisma.TaskOccurrenceWhereUniqueInput[];
    disconnect?: Prisma.TaskOccurrenceWhereUniqueInput | Prisma.TaskOccurrenceWhereUniqueInput[];
    delete?: Prisma.TaskOccurrenceWhereUniqueInput | Prisma.TaskOccurrenceWhereUniqueInput[];
    connect?: Prisma.TaskOccurrenceWhereUniqueInput | Prisma.TaskOccurrenceWhereUniqueInput[];
    update?: Prisma.TaskOccurrenceUpdateWithWhereUniqueWithoutTaskInput | Prisma.TaskOccurrenceUpdateWithWhereUniqueWithoutTaskInput[];
    updateMany?: Prisma.TaskOccurrenceUpdateManyWithWhereWithoutTaskInput | Prisma.TaskOccurrenceUpdateManyWithWhereWithoutTaskInput[];
    deleteMany?: Prisma.TaskOccurrenceScalarWhereInput | Prisma.TaskOccurrenceScalarWhereInput[];
};
export type EnumOccurrenceStatusFieldUpdateOperationsInput = {
    set?: $Enums.OccurrenceStatus;
};
export type TaskOccurrenceCreateWithoutUserInput = {
    id?: string;
    scheduledAt: Date | string;
    reminderScheduledAt?: Date | string | null;
    status?: $Enums.OccurrenceStatus;
    completedAt?: Date | string | null;
    isRequired?: boolean;
    earlyReminderSent?: boolean;
    earlyReminderSentAt?: Date | string | null;
    scheduledAlertSent?: boolean;
    scheduledAlertSentAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    task: Prisma.TaskCreateNestedOneWithoutOccurrencesInput;
};
export type TaskOccurrenceUncheckedCreateWithoutUserInput = {
    id?: string;
    taskId: string;
    scheduledAt: Date | string;
    reminderScheduledAt?: Date | string | null;
    status?: $Enums.OccurrenceStatus;
    completedAt?: Date | string | null;
    isRequired?: boolean;
    earlyReminderSent?: boolean;
    earlyReminderSentAt?: Date | string | null;
    scheduledAlertSent?: boolean;
    scheduledAlertSentAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TaskOccurrenceCreateOrConnectWithoutUserInput = {
    where: Prisma.TaskOccurrenceWhereUniqueInput;
    create: Prisma.XOR<Prisma.TaskOccurrenceCreateWithoutUserInput, Prisma.TaskOccurrenceUncheckedCreateWithoutUserInput>;
};
export type TaskOccurrenceCreateManyUserInputEnvelope = {
    data: Prisma.TaskOccurrenceCreateManyUserInput | Prisma.TaskOccurrenceCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type TaskOccurrenceUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.TaskOccurrenceWhereUniqueInput;
    update: Prisma.XOR<Prisma.TaskOccurrenceUpdateWithoutUserInput, Prisma.TaskOccurrenceUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.TaskOccurrenceCreateWithoutUserInput, Prisma.TaskOccurrenceUncheckedCreateWithoutUserInput>;
};
export type TaskOccurrenceUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.TaskOccurrenceWhereUniqueInput;
    data: Prisma.XOR<Prisma.TaskOccurrenceUpdateWithoutUserInput, Prisma.TaskOccurrenceUncheckedUpdateWithoutUserInput>;
};
export type TaskOccurrenceUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.TaskOccurrenceScalarWhereInput;
    data: Prisma.XOR<Prisma.TaskOccurrenceUpdateManyMutationInput, Prisma.TaskOccurrenceUncheckedUpdateManyWithoutUserInput>;
};
export type TaskOccurrenceScalarWhereInput = {
    AND?: Prisma.TaskOccurrenceScalarWhereInput | Prisma.TaskOccurrenceScalarWhereInput[];
    OR?: Prisma.TaskOccurrenceScalarWhereInput[];
    NOT?: Prisma.TaskOccurrenceScalarWhereInput | Prisma.TaskOccurrenceScalarWhereInput[];
    id?: Prisma.StringFilter<"TaskOccurrence"> | string;
    taskId?: Prisma.StringFilter<"TaskOccurrence"> | string;
    userId?: Prisma.StringFilter<"TaskOccurrence"> | string;
    scheduledAt?: Prisma.DateTimeFilter<"TaskOccurrence"> | Date | string;
    reminderScheduledAt?: Prisma.DateTimeNullableFilter<"TaskOccurrence"> | Date | string | null;
    status?: Prisma.EnumOccurrenceStatusFilter<"TaskOccurrence"> | $Enums.OccurrenceStatus;
    completedAt?: Prisma.DateTimeNullableFilter<"TaskOccurrence"> | Date | string | null;
    isRequired?: Prisma.BoolFilter<"TaskOccurrence"> | boolean;
    earlyReminderSent?: Prisma.BoolFilter<"TaskOccurrence"> | boolean;
    earlyReminderSentAt?: Prisma.DateTimeNullableFilter<"TaskOccurrence"> | Date | string | null;
    scheduledAlertSent?: Prisma.BoolFilter<"TaskOccurrence"> | boolean;
    scheduledAlertSentAt?: Prisma.DateTimeNullableFilter<"TaskOccurrence"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"TaskOccurrence"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"TaskOccurrence"> | Date | string;
};
export type TaskOccurrenceCreateWithoutTaskInput = {
    id?: string;
    scheduledAt: Date | string;
    reminderScheduledAt?: Date | string | null;
    status?: $Enums.OccurrenceStatus;
    completedAt?: Date | string | null;
    isRequired?: boolean;
    earlyReminderSent?: boolean;
    earlyReminderSentAt?: Date | string | null;
    scheduledAlertSent?: boolean;
    scheduledAlertSentAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutTaskOccurrencesInput;
};
export type TaskOccurrenceUncheckedCreateWithoutTaskInput = {
    id?: string;
    userId: string;
    scheduledAt: Date | string;
    reminderScheduledAt?: Date | string | null;
    status?: $Enums.OccurrenceStatus;
    completedAt?: Date | string | null;
    isRequired?: boolean;
    earlyReminderSent?: boolean;
    earlyReminderSentAt?: Date | string | null;
    scheduledAlertSent?: boolean;
    scheduledAlertSentAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TaskOccurrenceCreateOrConnectWithoutTaskInput = {
    where: Prisma.TaskOccurrenceWhereUniqueInput;
    create: Prisma.XOR<Prisma.TaskOccurrenceCreateWithoutTaskInput, Prisma.TaskOccurrenceUncheckedCreateWithoutTaskInput>;
};
export type TaskOccurrenceCreateManyTaskInputEnvelope = {
    data: Prisma.TaskOccurrenceCreateManyTaskInput | Prisma.TaskOccurrenceCreateManyTaskInput[];
    skipDuplicates?: boolean;
};
export type TaskOccurrenceUpsertWithWhereUniqueWithoutTaskInput = {
    where: Prisma.TaskOccurrenceWhereUniqueInput;
    update: Prisma.XOR<Prisma.TaskOccurrenceUpdateWithoutTaskInput, Prisma.TaskOccurrenceUncheckedUpdateWithoutTaskInput>;
    create: Prisma.XOR<Prisma.TaskOccurrenceCreateWithoutTaskInput, Prisma.TaskOccurrenceUncheckedCreateWithoutTaskInput>;
};
export type TaskOccurrenceUpdateWithWhereUniqueWithoutTaskInput = {
    where: Prisma.TaskOccurrenceWhereUniqueInput;
    data: Prisma.XOR<Prisma.TaskOccurrenceUpdateWithoutTaskInput, Prisma.TaskOccurrenceUncheckedUpdateWithoutTaskInput>;
};
export type TaskOccurrenceUpdateManyWithWhereWithoutTaskInput = {
    where: Prisma.TaskOccurrenceScalarWhereInput;
    data: Prisma.XOR<Prisma.TaskOccurrenceUpdateManyMutationInput, Prisma.TaskOccurrenceUncheckedUpdateManyWithoutTaskInput>;
};
export type TaskOccurrenceCreateManyUserInput = {
    id?: string;
    taskId: string;
    scheduledAt: Date | string;
    reminderScheduledAt?: Date | string | null;
    status?: $Enums.OccurrenceStatus;
    completedAt?: Date | string | null;
    isRequired?: boolean;
    earlyReminderSent?: boolean;
    earlyReminderSentAt?: Date | string | null;
    scheduledAlertSent?: boolean;
    scheduledAlertSentAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TaskOccurrenceUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    scheduledAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reminderScheduledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumOccurrenceStatusFieldUpdateOperationsInput | $Enums.OccurrenceStatus;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isRequired?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    earlyReminderSent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    earlyReminderSentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    scheduledAlertSent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    scheduledAlertSentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    task?: Prisma.TaskUpdateOneRequiredWithoutOccurrencesNestedInput;
};
export type TaskOccurrenceUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    taskId?: Prisma.StringFieldUpdateOperationsInput | string;
    scheduledAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reminderScheduledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumOccurrenceStatusFieldUpdateOperationsInput | $Enums.OccurrenceStatus;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isRequired?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    earlyReminderSent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    earlyReminderSentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    scheduledAlertSent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    scheduledAlertSentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TaskOccurrenceUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    taskId?: Prisma.StringFieldUpdateOperationsInput | string;
    scheduledAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reminderScheduledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumOccurrenceStatusFieldUpdateOperationsInput | $Enums.OccurrenceStatus;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isRequired?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    earlyReminderSent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    earlyReminderSentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    scheduledAlertSent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    scheduledAlertSentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TaskOccurrenceCreateManyTaskInput = {
    id?: string;
    userId: string;
    scheduledAt: Date | string;
    reminderScheduledAt?: Date | string | null;
    status?: $Enums.OccurrenceStatus;
    completedAt?: Date | string | null;
    isRequired?: boolean;
    earlyReminderSent?: boolean;
    earlyReminderSentAt?: Date | string | null;
    scheduledAlertSent?: boolean;
    scheduledAlertSentAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TaskOccurrenceUpdateWithoutTaskInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    scheduledAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reminderScheduledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumOccurrenceStatusFieldUpdateOperationsInput | $Enums.OccurrenceStatus;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isRequired?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    earlyReminderSent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    earlyReminderSentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    scheduledAlertSent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    scheduledAlertSentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutTaskOccurrencesNestedInput;
};
export type TaskOccurrenceUncheckedUpdateWithoutTaskInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    scheduledAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reminderScheduledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumOccurrenceStatusFieldUpdateOperationsInput | $Enums.OccurrenceStatus;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isRequired?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    earlyReminderSent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    earlyReminderSentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    scheduledAlertSent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    scheduledAlertSentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TaskOccurrenceUncheckedUpdateManyWithoutTaskInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    scheduledAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reminderScheduledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumOccurrenceStatusFieldUpdateOperationsInput | $Enums.OccurrenceStatus;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isRequired?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    earlyReminderSent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    earlyReminderSentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    scheduledAlertSent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    scheduledAlertSentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TaskOccurrenceSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    taskId?: boolean;
    userId?: boolean;
    scheduledAt?: boolean;
    reminderScheduledAt?: boolean;
    status?: boolean;
    completedAt?: boolean;
    isRequired?: boolean;
    earlyReminderSent?: boolean;
    earlyReminderSentAt?: boolean;
    scheduledAlertSent?: boolean;
    scheduledAlertSentAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    task?: boolean | Prisma.TaskDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["taskOccurrence"]>;
export type TaskOccurrenceSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    taskId?: boolean;
    userId?: boolean;
    scheduledAt?: boolean;
    reminderScheduledAt?: boolean;
    status?: boolean;
    completedAt?: boolean;
    isRequired?: boolean;
    earlyReminderSent?: boolean;
    earlyReminderSentAt?: boolean;
    scheduledAlertSent?: boolean;
    scheduledAlertSentAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    task?: boolean | Prisma.TaskDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["taskOccurrence"]>;
export type TaskOccurrenceSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    taskId?: boolean;
    userId?: boolean;
    scheduledAt?: boolean;
    reminderScheduledAt?: boolean;
    status?: boolean;
    completedAt?: boolean;
    isRequired?: boolean;
    earlyReminderSent?: boolean;
    earlyReminderSentAt?: boolean;
    scheduledAlertSent?: boolean;
    scheduledAlertSentAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    task?: boolean | Prisma.TaskDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["taskOccurrence"]>;
export type TaskOccurrenceSelectScalar = {
    id?: boolean;
    taskId?: boolean;
    userId?: boolean;
    scheduledAt?: boolean;
    reminderScheduledAt?: boolean;
    status?: boolean;
    completedAt?: boolean;
    isRequired?: boolean;
    earlyReminderSent?: boolean;
    earlyReminderSentAt?: boolean;
    scheduledAlertSent?: boolean;
    scheduledAlertSentAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type TaskOccurrenceOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "taskId" | "userId" | "scheduledAt" | "reminderScheduledAt" | "status" | "completedAt" | "isRequired" | "earlyReminderSent" | "earlyReminderSentAt" | "scheduledAlertSent" | "scheduledAlertSentAt" | "createdAt" | "updatedAt", ExtArgs["result"]["taskOccurrence"]>;
export type TaskOccurrenceInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    task?: boolean | Prisma.TaskDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type TaskOccurrenceIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    task?: boolean | Prisma.TaskDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type TaskOccurrenceIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    task?: boolean | Prisma.TaskDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $TaskOccurrencePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "TaskOccurrence";
    objects: {
        task: Prisma.$TaskPayload<ExtArgs>;
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        taskId: string;
        userId: string;
        scheduledAt: Date;
        reminderScheduledAt: Date | null;
        status: $Enums.OccurrenceStatus;
        completedAt: Date | null;
        isRequired: boolean;
        earlyReminderSent: boolean;
        earlyReminderSentAt: Date | null;
        scheduledAlertSent: boolean;
        scheduledAlertSentAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["taskOccurrence"]>;
    composites: {};
};
export type TaskOccurrenceGetPayload<S extends boolean | null | undefined | TaskOccurrenceDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TaskOccurrencePayload, S>;
export type TaskOccurrenceCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TaskOccurrenceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TaskOccurrenceCountAggregateInputType | true;
};
export interface TaskOccurrenceDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['TaskOccurrence'];
        meta: {
            name: 'TaskOccurrence';
        };
    };
    /**
     * Find zero or one TaskOccurrence that matches the filter.
     * @param {TaskOccurrenceFindUniqueArgs} args - Arguments to find a TaskOccurrence
     * @example
     * // Get one TaskOccurrence
     * const taskOccurrence = await prisma.taskOccurrence.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskOccurrenceFindUniqueArgs>(args: Prisma.SelectSubset<T, TaskOccurrenceFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TaskOccurrenceClient<runtime.Types.Result.GetResult<Prisma.$TaskOccurrencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one TaskOccurrence that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaskOccurrenceFindUniqueOrThrowArgs} args - Arguments to find a TaskOccurrence
     * @example
     * // Get one TaskOccurrence
     * const taskOccurrence = await prisma.taskOccurrence.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskOccurrenceFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TaskOccurrenceFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TaskOccurrenceClient<runtime.Types.Result.GetResult<Prisma.$TaskOccurrencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first TaskOccurrence that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskOccurrenceFindFirstArgs} args - Arguments to find a TaskOccurrence
     * @example
     * // Get one TaskOccurrence
     * const taskOccurrence = await prisma.taskOccurrence.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskOccurrenceFindFirstArgs>(args?: Prisma.SelectSubset<T, TaskOccurrenceFindFirstArgs<ExtArgs>>): Prisma.Prisma__TaskOccurrenceClient<runtime.Types.Result.GetResult<Prisma.$TaskOccurrencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first TaskOccurrence that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskOccurrenceFindFirstOrThrowArgs} args - Arguments to find a TaskOccurrence
     * @example
     * // Get one TaskOccurrence
     * const taskOccurrence = await prisma.taskOccurrence.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskOccurrenceFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TaskOccurrenceFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TaskOccurrenceClient<runtime.Types.Result.GetResult<Prisma.$TaskOccurrencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more TaskOccurrences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskOccurrenceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TaskOccurrences
     * const taskOccurrences = await prisma.taskOccurrence.findMany()
     *
     * // Get first 10 TaskOccurrences
     * const taskOccurrences = await prisma.taskOccurrence.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const taskOccurrenceWithIdOnly = await prisma.taskOccurrence.findMany({ select: { id: true } })
     *
     */
    findMany<T extends TaskOccurrenceFindManyArgs>(args?: Prisma.SelectSubset<T, TaskOccurrenceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TaskOccurrencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a TaskOccurrence.
     * @param {TaskOccurrenceCreateArgs} args - Arguments to create a TaskOccurrence.
     * @example
     * // Create one TaskOccurrence
     * const TaskOccurrence = await prisma.taskOccurrence.create({
     *   data: {
     *     // ... data to create a TaskOccurrence
     *   }
     * })
     *
     */
    create<T extends TaskOccurrenceCreateArgs>(args: Prisma.SelectSubset<T, TaskOccurrenceCreateArgs<ExtArgs>>): Prisma.Prisma__TaskOccurrenceClient<runtime.Types.Result.GetResult<Prisma.$TaskOccurrencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many TaskOccurrences.
     * @param {TaskOccurrenceCreateManyArgs} args - Arguments to create many TaskOccurrences.
     * @example
     * // Create many TaskOccurrences
     * const taskOccurrence = await prisma.taskOccurrence.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends TaskOccurrenceCreateManyArgs>(args?: Prisma.SelectSubset<T, TaskOccurrenceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many TaskOccurrences and returns the data saved in the database.
     * @param {TaskOccurrenceCreateManyAndReturnArgs} args - Arguments to create many TaskOccurrences.
     * @example
     * // Create many TaskOccurrences
     * const taskOccurrence = await prisma.taskOccurrence.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many TaskOccurrences and only return the `id`
     * const taskOccurrenceWithIdOnly = await prisma.taskOccurrence.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends TaskOccurrenceCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TaskOccurrenceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TaskOccurrencePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a TaskOccurrence.
     * @param {TaskOccurrenceDeleteArgs} args - Arguments to delete one TaskOccurrence.
     * @example
     * // Delete one TaskOccurrence
     * const TaskOccurrence = await prisma.taskOccurrence.delete({
     *   where: {
     *     // ... filter to delete one TaskOccurrence
     *   }
     * })
     *
     */
    delete<T extends TaskOccurrenceDeleteArgs>(args: Prisma.SelectSubset<T, TaskOccurrenceDeleteArgs<ExtArgs>>): Prisma.Prisma__TaskOccurrenceClient<runtime.Types.Result.GetResult<Prisma.$TaskOccurrencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one TaskOccurrence.
     * @param {TaskOccurrenceUpdateArgs} args - Arguments to update one TaskOccurrence.
     * @example
     * // Update one TaskOccurrence
     * const taskOccurrence = await prisma.taskOccurrence.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends TaskOccurrenceUpdateArgs>(args: Prisma.SelectSubset<T, TaskOccurrenceUpdateArgs<ExtArgs>>): Prisma.Prisma__TaskOccurrenceClient<runtime.Types.Result.GetResult<Prisma.$TaskOccurrencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more TaskOccurrences.
     * @param {TaskOccurrenceDeleteManyArgs} args - Arguments to filter TaskOccurrences to delete.
     * @example
     * // Delete a few TaskOccurrences
     * const { count } = await prisma.taskOccurrence.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends TaskOccurrenceDeleteManyArgs>(args?: Prisma.SelectSubset<T, TaskOccurrenceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more TaskOccurrences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskOccurrenceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TaskOccurrences
     * const taskOccurrence = await prisma.taskOccurrence.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends TaskOccurrenceUpdateManyArgs>(args: Prisma.SelectSubset<T, TaskOccurrenceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more TaskOccurrences and returns the data updated in the database.
     * @param {TaskOccurrenceUpdateManyAndReturnArgs} args - Arguments to update many TaskOccurrences.
     * @example
     * // Update many TaskOccurrences
     * const taskOccurrence = await prisma.taskOccurrence.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more TaskOccurrences and only return the `id`
     * const taskOccurrenceWithIdOnly = await prisma.taskOccurrence.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends TaskOccurrenceUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TaskOccurrenceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TaskOccurrencePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one TaskOccurrence.
     * @param {TaskOccurrenceUpsertArgs} args - Arguments to update or create a TaskOccurrence.
     * @example
     * // Update or create a TaskOccurrence
     * const taskOccurrence = await prisma.taskOccurrence.upsert({
     *   create: {
     *     // ... data to create a TaskOccurrence
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TaskOccurrence we want to update
     *   }
     * })
     */
    upsert<T extends TaskOccurrenceUpsertArgs>(args: Prisma.SelectSubset<T, TaskOccurrenceUpsertArgs<ExtArgs>>): Prisma.Prisma__TaskOccurrenceClient<runtime.Types.Result.GetResult<Prisma.$TaskOccurrencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of TaskOccurrences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskOccurrenceCountArgs} args - Arguments to filter TaskOccurrences to count.
     * @example
     * // Count the number of TaskOccurrences
     * const count = await prisma.taskOccurrence.count({
     *   where: {
     *     // ... the filter for the TaskOccurrences we want to count
     *   }
     * })
    **/
    count<T extends TaskOccurrenceCountArgs>(args?: Prisma.Subset<T, TaskOccurrenceCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TaskOccurrenceCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a TaskOccurrence.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskOccurrenceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TaskOccurrenceAggregateArgs>(args: Prisma.Subset<T, TaskOccurrenceAggregateArgs>): Prisma.PrismaPromise<GetTaskOccurrenceAggregateType<T>>;
    /**
     * Group by TaskOccurrence.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskOccurrenceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends TaskOccurrenceGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TaskOccurrenceGroupByArgs['orderBy'];
    } : {
        orderBy?: TaskOccurrenceGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TaskOccurrenceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskOccurrenceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the TaskOccurrence model
     */
    readonly fields: TaskOccurrenceFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for TaskOccurrence.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__TaskOccurrenceClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    task<T extends Prisma.TaskDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TaskDefaultArgs<ExtArgs>>): Prisma.Prisma__TaskClient<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the TaskOccurrence model
 */
export interface TaskOccurrenceFieldRefs {
    readonly id: Prisma.FieldRef<"TaskOccurrence", 'String'>;
    readonly taskId: Prisma.FieldRef<"TaskOccurrence", 'String'>;
    readonly userId: Prisma.FieldRef<"TaskOccurrence", 'String'>;
    readonly scheduledAt: Prisma.FieldRef<"TaskOccurrence", 'DateTime'>;
    readonly reminderScheduledAt: Prisma.FieldRef<"TaskOccurrence", 'DateTime'>;
    readonly status: Prisma.FieldRef<"TaskOccurrence", 'OccurrenceStatus'>;
    readonly completedAt: Prisma.FieldRef<"TaskOccurrence", 'DateTime'>;
    readonly isRequired: Prisma.FieldRef<"TaskOccurrence", 'Boolean'>;
    readonly earlyReminderSent: Prisma.FieldRef<"TaskOccurrence", 'Boolean'>;
    readonly earlyReminderSentAt: Prisma.FieldRef<"TaskOccurrence", 'DateTime'>;
    readonly scheduledAlertSent: Prisma.FieldRef<"TaskOccurrence", 'Boolean'>;
    readonly scheduledAlertSentAt: Prisma.FieldRef<"TaskOccurrence", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"TaskOccurrence", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"TaskOccurrence", 'DateTime'>;
}
/**
 * TaskOccurrence findUnique
 */
export type TaskOccurrenceFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskOccurrence
     */
    select?: Prisma.TaskOccurrenceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TaskOccurrence
     */
    omit?: Prisma.TaskOccurrenceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TaskOccurrenceInclude<ExtArgs> | null;
    /**
     * Filter, which TaskOccurrence to fetch.
     */
    where: Prisma.TaskOccurrenceWhereUniqueInput;
};
/**
 * TaskOccurrence findUniqueOrThrow
 */
export type TaskOccurrenceFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskOccurrence
     */
    select?: Prisma.TaskOccurrenceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TaskOccurrence
     */
    omit?: Prisma.TaskOccurrenceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TaskOccurrenceInclude<ExtArgs> | null;
    /**
     * Filter, which TaskOccurrence to fetch.
     */
    where: Prisma.TaskOccurrenceWhereUniqueInput;
};
/**
 * TaskOccurrence findFirst
 */
export type TaskOccurrenceFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskOccurrence
     */
    select?: Prisma.TaskOccurrenceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TaskOccurrence
     */
    omit?: Prisma.TaskOccurrenceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TaskOccurrenceInclude<ExtArgs> | null;
    /**
     * Filter, which TaskOccurrence to fetch.
     */
    where?: Prisma.TaskOccurrenceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TaskOccurrences to fetch.
     */
    orderBy?: Prisma.TaskOccurrenceOrderByWithRelationInput | Prisma.TaskOccurrenceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for TaskOccurrences.
     */
    cursor?: Prisma.TaskOccurrenceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TaskOccurrences from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TaskOccurrences.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of TaskOccurrences.
     */
    distinct?: Prisma.TaskOccurrenceScalarFieldEnum | Prisma.TaskOccurrenceScalarFieldEnum[];
};
/**
 * TaskOccurrence findFirstOrThrow
 */
export type TaskOccurrenceFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskOccurrence
     */
    select?: Prisma.TaskOccurrenceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TaskOccurrence
     */
    omit?: Prisma.TaskOccurrenceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TaskOccurrenceInclude<ExtArgs> | null;
    /**
     * Filter, which TaskOccurrence to fetch.
     */
    where?: Prisma.TaskOccurrenceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TaskOccurrences to fetch.
     */
    orderBy?: Prisma.TaskOccurrenceOrderByWithRelationInput | Prisma.TaskOccurrenceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for TaskOccurrences.
     */
    cursor?: Prisma.TaskOccurrenceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TaskOccurrences from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TaskOccurrences.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of TaskOccurrences.
     */
    distinct?: Prisma.TaskOccurrenceScalarFieldEnum | Prisma.TaskOccurrenceScalarFieldEnum[];
};
/**
 * TaskOccurrence findMany
 */
export type TaskOccurrenceFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskOccurrence
     */
    select?: Prisma.TaskOccurrenceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TaskOccurrence
     */
    omit?: Prisma.TaskOccurrenceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TaskOccurrenceInclude<ExtArgs> | null;
    /**
     * Filter, which TaskOccurrences to fetch.
     */
    where?: Prisma.TaskOccurrenceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TaskOccurrences to fetch.
     */
    orderBy?: Prisma.TaskOccurrenceOrderByWithRelationInput | Prisma.TaskOccurrenceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing TaskOccurrences.
     */
    cursor?: Prisma.TaskOccurrenceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TaskOccurrences from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TaskOccurrences.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of TaskOccurrences.
     */
    distinct?: Prisma.TaskOccurrenceScalarFieldEnum | Prisma.TaskOccurrenceScalarFieldEnum[];
};
/**
 * TaskOccurrence create
 */
export type TaskOccurrenceCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskOccurrence
     */
    select?: Prisma.TaskOccurrenceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TaskOccurrence
     */
    omit?: Prisma.TaskOccurrenceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TaskOccurrenceInclude<ExtArgs> | null;
    /**
     * The data needed to create a TaskOccurrence.
     */
    data: Prisma.XOR<Prisma.TaskOccurrenceCreateInput, Prisma.TaskOccurrenceUncheckedCreateInput>;
};
/**
 * TaskOccurrence createMany
 */
export type TaskOccurrenceCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many TaskOccurrences.
     */
    data: Prisma.TaskOccurrenceCreateManyInput | Prisma.TaskOccurrenceCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * TaskOccurrence createManyAndReturn
 */
export type TaskOccurrenceCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskOccurrence
     */
    select?: Prisma.TaskOccurrenceSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the TaskOccurrence
     */
    omit?: Prisma.TaskOccurrenceOmit<ExtArgs> | null;
    /**
     * The data used to create many TaskOccurrences.
     */
    data: Prisma.TaskOccurrenceCreateManyInput | Prisma.TaskOccurrenceCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TaskOccurrenceIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * TaskOccurrence update
 */
export type TaskOccurrenceUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskOccurrence
     */
    select?: Prisma.TaskOccurrenceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TaskOccurrence
     */
    omit?: Prisma.TaskOccurrenceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TaskOccurrenceInclude<ExtArgs> | null;
    /**
     * The data needed to update a TaskOccurrence.
     */
    data: Prisma.XOR<Prisma.TaskOccurrenceUpdateInput, Prisma.TaskOccurrenceUncheckedUpdateInput>;
    /**
     * Choose, which TaskOccurrence to update.
     */
    where: Prisma.TaskOccurrenceWhereUniqueInput;
};
/**
 * TaskOccurrence updateMany
 */
export type TaskOccurrenceUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update TaskOccurrences.
     */
    data: Prisma.XOR<Prisma.TaskOccurrenceUpdateManyMutationInput, Prisma.TaskOccurrenceUncheckedUpdateManyInput>;
    /**
     * Filter which TaskOccurrences to update
     */
    where?: Prisma.TaskOccurrenceWhereInput;
    /**
     * Limit how many TaskOccurrences to update.
     */
    limit?: number;
};
/**
 * TaskOccurrence updateManyAndReturn
 */
export type TaskOccurrenceUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskOccurrence
     */
    select?: Prisma.TaskOccurrenceSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the TaskOccurrence
     */
    omit?: Prisma.TaskOccurrenceOmit<ExtArgs> | null;
    /**
     * The data used to update TaskOccurrences.
     */
    data: Prisma.XOR<Prisma.TaskOccurrenceUpdateManyMutationInput, Prisma.TaskOccurrenceUncheckedUpdateManyInput>;
    /**
     * Filter which TaskOccurrences to update
     */
    where?: Prisma.TaskOccurrenceWhereInput;
    /**
     * Limit how many TaskOccurrences to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TaskOccurrenceIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * TaskOccurrence upsert
 */
export type TaskOccurrenceUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskOccurrence
     */
    select?: Prisma.TaskOccurrenceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TaskOccurrence
     */
    omit?: Prisma.TaskOccurrenceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TaskOccurrenceInclude<ExtArgs> | null;
    /**
     * The filter to search for the TaskOccurrence to update in case it exists.
     */
    where: Prisma.TaskOccurrenceWhereUniqueInput;
    /**
     * In case the TaskOccurrence found by the `where` argument doesn't exist, create a new TaskOccurrence with this data.
     */
    create: Prisma.XOR<Prisma.TaskOccurrenceCreateInput, Prisma.TaskOccurrenceUncheckedCreateInput>;
    /**
     * In case the TaskOccurrence was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.TaskOccurrenceUpdateInput, Prisma.TaskOccurrenceUncheckedUpdateInput>;
};
/**
 * TaskOccurrence delete
 */
export type TaskOccurrenceDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskOccurrence
     */
    select?: Prisma.TaskOccurrenceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TaskOccurrence
     */
    omit?: Prisma.TaskOccurrenceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TaskOccurrenceInclude<ExtArgs> | null;
    /**
     * Filter which TaskOccurrence to delete.
     */
    where: Prisma.TaskOccurrenceWhereUniqueInput;
};
/**
 * TaskOccurrence deleteMany
 */
export type TaskOccurrenceDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which TaskOccurrences to delete
     */
    where?: Prisma.TaskOccurrenceWhereInput;
    /**
     * Limit how many TaskOccurrences to delete.
     */
    limit?: number;
};
/**
 * TaskOccurrence without action
 */
export type TaskOccurrenceDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskOccurrence
     */
    select?: Prisma.TaskOccurrenceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TaskOccurrence
     */
    omit?: Prisma.TaskOccurrenceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TaskOccurrenceInclude<ExtArgs> | null;
};
//# sourceMappingURL=TaskOccurrence.d.ts.map