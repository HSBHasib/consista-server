import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model YearlyReport
 *
 */
export type YearlyReportModel = runtime.Types.Result.DefaultSelection<Prisma.$YearlyReportPayload>;
export type AggregateYearlyReport = {
    _count: YearlyReportCountAggregateOutputType | null;
    _avg: YearlyReportAvgAggregateOutputType | null;
    _sum: YearlyReportSumAggregateOutputType | null;
    _min: YearlyReportMinAggregateOutputType | null;
    _max: YearlyReportMaxAggregateOutputType | null;
};
export type YearlyReportAvgAggregateOutputType = {
    year: number | null;
    yearlyConsistencyPct: number | null;
    totalTasksCompleted: number | null;
    successfulDaysCount: number | null;
    missedDaysCount: number | null;
    noActivityDaysCount: number | null;
    optionalOnlyDaysCount: number | null;
    streakBreaksCount: number | null;
    finalRank: number | null;
};
export type YearlyReportSumAggregateOutputType = {
    year: number | null;
    yearlyConsistencyPct: number | null;
    totalTasksCompleted: number | null;
    successfulDaysCount: number | null;
    missedDaysCount: number | null;
    noActivityDaysCount: number | null;
    optionalOnlyDaysCount: number | null;
    streakBreaksCount: number | null;
    finalRank: number | null;
};
export type YearlyReportMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    year: number | null;
    yearlyConsistencyPct: number | null;
    totalTasksCompleted: number | null;
    successfulDaysCount: number | null;
    missedDaysCount: number | null;
    noActivityDaysCount: number | null;
    optionalOnlyDaysCount: number | null;
    streakBreaksCount: number | null;
    finalRank: number | null;
    createdAt: Date | null;
};
export type YearlyReportMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    year: number | null;
    yearlyConsistencyPct: number | null;
    totalTasksCompleted: number | null;
    successfulDaysCount: number | null;
    missedDaysCount: number | null;
    noActivityDaysCount: number | null;
    optionalOnlyDaysCount: number | null;
    streakBreaksCount: number | null;
    finalRank: number | null;
    createdAt: Date | null;
};
export type YearlyReportCountAggregateOutputType = {
    id: number;
    userId: number;
    year: number;
    yearlyConsistencyPct: number;
    totalTasksCompleted: number;
    successfulDaysCount: number;
    missedDaysCount: number;
    noActivityDaysCount: number;
    optionalOnlyDaysCount: number;
    streakBreaksCount: number;
    finalRank: number;
    reportData: number;
    createdAt: number;
    _all: number;
};
export type YearlyReportAvgAggregateInputType = {
    year?: true;
    yearlyConsistencyPct?: true;
    totalTasksCompleted?: true;
    successfulDaysCount?: true;
    missedDaysCount?: true;
    noActivityDaysCount?: true;
    optionalOnlyDaysCount?: true;
    streakBreaksCount?: true;
    finalRank?: true;
};
export type YearlyReportSumAggregateInputType = {
    year?: true;
    yearlyConsistencyPct?: true;
    totalTasksCompleted?: true;
    successfulDaysCount?: true;
    missedDaysCount?: true;
    noActivityDaysCount?: true;
    optionalOnlyDaysCount?: true;
    streakBreaksCount?: true;
    finalRank?: true;
};
export type YearlyReportMinAggregateInputType = {
    id?: true;
    userId?: true;
    year?: true;
    yearlyConsistencyPct?: true;
    totalTasksCompleted?: true;
    successfulDaysCount?: true;
    missedDaysCount?: true;
    noActivityDaysCount?: true;
    optionalOnlyDaysCount?: true;
    streakBreaksCount?: true;
    finalRank?: true;
    createdAt?: true;
};
export type YearlyReportMaxAggregateInputType = {
    id?: true;
    userId?: true;
    year?: true;
    yearlyConsistencyPct?: true;
    totalTasksCompleted?: true;
    successfulDaysCount?: true;
    missedDaysCount?: true;
    noActivityDaysCount?: true;
    optionalOnlyDaysCount?: true;
    streakBreaksCount?: true;
    finalRank?: true;
    createdAt?: true;
};
export type YearlyReportCountAggregateInputType = {
    id?: true;
    userId?: true;
    year?: true;
    yearlyConsistencyPct?: true;
    totalTasksCompleted?: true;
    successfulDaysCount?: true;
    missedDaysCount?: true;
    noActivityDaysCount?: true;
    optionalOnlyDaysCount?: true;
    streakBreaksCount?: true;
    finalRank?: true;
    reportData?: true;
    createdAt?: true;
    _all?: true;
};
export type YearlyReportAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which YearlyReport to aggregate.
     */
    where?: Prisma.YearlyReportWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of YearlyReports to fetch.
     */
    orderBy?: Prisma.YearlyReportOrderByWithRelationInput | Prisma.YearlyReportOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.YearlyReportWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` YearlyReports from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` YearlyReports.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned YearlyReports
    **/
    _count?: true | YearlyReportCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: YearlyReportAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: YearlyReportSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: YearlyReportMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: YearlyReportMaxAggregateInputType;
};
export type GetYearlyReportAggregateType<T extends YearlyReportAggregateArgs> = {
    [P in keyof T & keyof AggregateYearlyReport]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateYearlyReport[P]> : Prisma.GetScalarType<T[P], AggregateYearlyReport[P]>;
};
export type YearlyReportGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.YearlyReportWhereInput;
    orderBy?: Prisma.YearlyReportOrderByWithAggregationInput | Prisma.YearlyReportOrderByWithAggregationInput[];
    by: Prisma.YearlyReportScalarFieldEnum[] | Prisma.YearlyReportScalarFieldEnum;
    having?: Prisma.YearlyReportScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: YearlyReportCountAggregateInputType | true;
    _avg?: YearlyReportAvgAggregateInputType;
    _sum?: YearlyReportSumAggregateInputType;
    _min?: YearlyReportMinAggregateInputType;
    _max?: YearlyReportMaxAggregateInputType;
};
export type YearlyReportGroupByOutputType = {
    id: string;
    userId: string;
    year: number;
    yearlyConsistencyPct: number;
    totalTasksCompleted: number;
    successfulDaysCount: number;
    missedDaysCount: number;
    noActivityDaysCount: number;
    optionalOnlyDaysCount: number;
    streakBreaksCount: number;
    finalRank: number | null;
    reportData: runtime.JsonValue;
    createdAt: Date;
    _count: YearlyReportCountAggregateOutputType | null;
    _avg: YearlyReportAvgAggregateOutputType | null;
    _sum: YearlyReportSumAggregateOutputType | null;
    _min: YearlyReportMinAggregateOutputType | null;
    _max: YearlyReportMaxAggregateOutputType | null;
};
export type GetYearlyReportGroupByPayload<T extends YearlyReportGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<YearlyReportGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof YearlyReportGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], YearlyReportGroupByOutputType[P]> : Prisma.GetScalarType<T[P], YearlyReportGroupByOutputType[P]>;
}>>;
export type YearlyReportWhereInput = {
    AND?: Prisma.YearlyReportWhereInput | Prisma.YearlyReportWhereInput[];
    OR?: Prisma.YearlyReportWhereInput[];
    NOT?: Prisma.YearlyReportWhereInput | Prisma.YearlyReportWhereInput[];
    id?: Prisma.StringFilter<"YearlyReport"> | string;
    userId?: Prisma.StringFilter<"YearlyReport"> | string;
    year?: Prisma.IntFilter<"YearlyReport"> | number;
    yearlyConsistencyPct?: Prisma.FloatFilter<"YearlyReport"> | number;
    totalTasksCompleted?: Prisma.IntFilter<"YearlyReport"> | number;
    successfulDaysCount?: Prisma.IntFilter<"YearlyReport"> | number;
    missedDaysCount?: Prisma.IntFilter<"YearlyReport"> | number;
    noActivityDaysCount?: Prisma.IntFilter<"YearlyReport"> | number;
    optionalOnlyDaysCount?: Prisma.IntFilter<"YearlyReport"> | number;
    streakBreaksCount?: Prisma.IntFilter<"YearlyReport"> | number;
    finalRank?: Prisma.IntNullableFilter<"YearlyReport"> | number | null;
    reportData?: Prisma.JsonFilter<"YearlyReport">;
    createdAt?: Prisma.DateTimeFilter<"YearlyReport"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type YearlyReportOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    year?: Prisma.SortOrder;
    yearlyConsistencyPct?: Prisma.SortOrder;
    totalTasksCompleted?: Prisma.SortOrder;
    successfulDaysCount?: Prisma.SortOrder;
    missedDaysCount?: Prisma.SortOrder;
    noActivityDaysCount?: Prisma.SortOrder;
    optionalOnlyDaysCount?: Prisma.SortOrder;
    streakBreaksCount?: Prisma.SortOrder;
    finalRank?: Prisma.SortOrderInput | Prisma.SortOrder;
    reportData?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type YearlyReportWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    userId_year?: Prisma.YearlyReportUserIdYearCompoundUniqueInput;
    AND?: Prisma.YearlyReportWhereInput | Prisma.YearlyReportWhereInput[];
    OR?: Prisma.YearlyReportWhereInput[];
    NOT?: Prisma.YearlyReportWhereInput | Prisma.YearlyReportWhereInput[];
    userId?: Prisma.StringFilter<"YearlyReport"> | string;
    year?: Prisma.IntFilter<"YearlyReport"> | number;
    yearlyConsistencyPct?: Prisma.FloatFilter<"YearlyReport"> | number;
    totalTasksCompleted?: Prisma.IntFilter<"YearlyReport"> | number;
    successfulDaysCount?: Prisma.IntFilter<"YearlyReport"> | number;
    missedDaysCount?: Prisma.IntFilter<"YearlyReport"> | number;
    noActivityDaysCount?: Prisma.IntFilter<"YearlyReport"> | number;
    optionalOnlyDaysCount?: Prisma.IntFilter<"YearlyReport"> | number;
    streakBreaksCount?: Prisma.IntFilter<"YearlyReport"> | number;
    finalRank?: Prisma.IntNullableFilter<"YearlyReport"> | number | null;
    reportData?: Prisma.JsonFilter<"YearlyReport">;
    createdAt?: Prisma.DateTimeFilter<"YearlyReport"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id" | "userId_year">;
export type YearlyReportOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    year?: Prisma.SortOrder;
    yearlyConsistencyPct?: Prisma.SortOrder;
    totalTasksCompleted?: Prisma.SortOrder;
    successfulDaysCount?: Prisma.SortOrder;
    missedDaysCount?: Prisma.SortOrder;
    noActivityDaysCount?: Prisma.SortOrder;
    optionalOnlyDaysCount?: Prisma.SortOrder;
    streakBreaksCount?: Prisma.SortOrder;
    finalRank?: Prisma.SortOrderInput | Prisma.SortOrder;
    reportData?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.YearlyReportCountOrderByAggregateInput;
    _avg?: Prisma.YearlyReportAvgOrderByAggregateInput;
    _max?: Prisma.YearlyReportMaxOrderByAggregateInput;
    _min?: Prisma.YearlyReportMinOrderByAggregateInput;
    _sum?: Prisma.YearlyReportSumOrderByAggregateInput;
};
export type YearlyReportScalarWhereWithAggregatesInput = {
    AND?: Prisma.YearlyReportScalarWhereWithAggregatesInput | Prisma.YearlyReportScalarWhereWithAggregatesInput[];
    OR?: Prisma.YearlyReportScalarWhereWithAggregatesInput[];
    NOT?: Prisma.YearlyReportScalarWhereWithAggregatesInput | Prisma.YearlyReportScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"YearlyReport"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"YearlyReport"> | string;
    year?: Prisma.IntWithAggregatesFilter<"YearlyReport"> | number;
    yearlyConsistencyPct?: Prisma.FloatWithAggregatesFilter<"YearlyReport"> | number;
    totalTasksCompleted?: Prisma.IntWithAggregatesFilter<"YearlyReport"> | number;
    successfulDaysCount?: Prisma.IntWithAggregatesFilter<"YearlyReport"> | number;
    missedDaysCount?: Prisma.IntWithAggregatesFilter<"YearlyReport"> | number;
    noActivityDaysCount?: Prisma.IntWithAggregatesFilter<"YearlyReport"> | number;
    optionalOnlyDaysCount?: Prisma.IntWithAggregatesFilter<"YearlyReport"> | number;
    streakBreaksCount?: Prisma.IntWithAggregatesFilter<"YearlyReport"> | number;
    finalRank?: Prisma.IntNullableWithAggregatesFilter<"YearlyReport"> | number | null;
    reportData?: Prisma.JsonWithAggregatesFilter<"YearlyReport">;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"YearlyReport"> | Date | string;
};
export type YearlyReportCreateInput = {
    id?: string;
    year: number;
    yearlyConsistencyPct: number;
    totalTasksCompleted?: number;
    successfulDaysCount?: number;
    missedDaysCount?: number;
    noActivityDaysCount?: number;
    optionalOnlyDaysCount?: number;
    streakBreaksCount?: number;
    finalRank?: number | null;
    reportData: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutYearlyReportsInput;
};
export type YearlyReportUncheckedCreateInput = {
    id?: string;
    userId: string;
    year: number;
    yearlyConsistencyPct: number;
    totalTasksCompleted?: number;
    successfulDaysCount?: number;
    missedDaysCount?: number;
    noActivityDaysCount?: number;
    optionalOnlyDaysCount?: number;
    streakBreaksCount?: number;
    finalRank?: number | null;
    reportData: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type YearlyReportUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    year?: Prisma.IntFieldUpdateOperationsInput | number;
    yearlyConsistencyPct?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalTasksCompleted?: Prisma.IntFieldUpdateOperationsInput | number;
    successfulDaysCount?: Prisma.IntFieldUpdateOperationsInput | number;
    missedDaysCount?: Prisma.IntFieldUpdateOperationsInput | number;
    noActivityDaysCount?: Prisma.IntFieldUpdateOperationsInput | number;
    optionalOnlyDaysCount?: Prisma.IntFieldUpdateOperationsInput | number;
    streakBreaksCount?: Prisma.IntFieldUpdateOperationsInput | number;
    finalRank?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    reportData?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutYearlyReportsNestedInput;
};
export type YearlyReportUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    year?: Prisma.IntFieldUpdateOperationsInput | number;
    yearlyConsistencyPct?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalTasksCompleted?: Prisma.IntFieldUpdateOperationsInput | number;
    successfulDaysCount?: Prisma.IntFieldUpdateOperationsInput | number;
    missedDaysCount?: Prisma.IntFieldUpdateOperationsInput | number;
    noActivityDaysCount?: Prisma.IntFieldUpdateOperationsInput | number;
    optionalOnlyDaysCount?: Prisma.IntFieldUpdateOperationsInput | number;
    streakBreaksCount?: Prisma.IntFieldUpdateOperationsInput | number;
    finalRank?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    reportData?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type YearlyReportCreateManyInput = {
    id?: string;
    userId: string;
    year: number;
    yearlyConsistencyPct: number;
    totalTasksCompleted?: number;
    successfulDaysCount?: number;
    missedDaysCount?: number;
    noActivityDaysCount?: number;
    optionalOnlyDaysCount?: number;
    streakBreaksCount?: number;
    finalRank?: number | null;
    reportData: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type YearlyReportUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    year?: Prisma.IntFieldUpdateOperationsInput | number;
    yearlyConsistencyPct?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalTasksCompleted?: Prisma.IntFieldUpdateOperationsInput | number;
    successfulDaysCount?: Prisma.IntFieldUpdateOperationsInput | number;
    missedDaysCount?: Prisma.IntFieldUpdateOperationsInput | number;
    noActivityDaysCount?: Prisma.IntFieldUpdateOperationsInput | number;
    optionalOnlyDaysCount?: Prisma.IntFieldUpdateOperationsInput | number;
    streakBreaksCount?: Prisma.IntFieldUpdateOperationsInput | number;
    finalRank?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    reportData?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type YearlyReportUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    year?: Prisma.IntFieldUpdateOperationsInput | number;
    yearlyConsistencyPct?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalTasksCompleted?: Prisma.IntFieldUpdateOperationsInput | number;
    successfulDaysCount?: Prisma.IntFieldUpdateOperationsInput | number;
    missedDaysCount?: Prisma.IntFieldUpdateOperationsInput | number;
    noActivityDaysCount?: Prisma.IntFieldUpdateOperationsInput | number;
    optionalOnlyDaysCount?: Prisma.IntFieldUpdateOperationsInput | number;
    streakBreaksCount?: Prisma.IntFieldUpdateOperationsInput | number;
    finalRank?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    reportData?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type YearlyReportListRelationFilter = {
    every?: Prisma.YearlyReportWhereInput;
    some?: Prisma.YearlyReportWhereInput;
    none?: Prisma.YearlyReportWhereInput;
};
export type YearlyReportOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type YearlyReportUserIdYearCompoundUniqueInput = {
    userId: string;
    year: number;
};
export type YearlyReportCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    year?: Prisma.SortOrder;
    yearlyConsistencyPct?: Prisma.SortOrder;
    totalTasksCompleted?: Prisma.SortOrder;
    successfulDaysCount?: Prisma.SortOrder;
    missedDaysCount?: Prisma.SortOrder;
    noActivityDaysCount?: Prisma.SortOrder;
    optionalOnlyDaysCount?: Prisma.SortOrder;
    streakBreaksCount?: Prisma.SortOrder;
    finalRank?: Prisma.SortOrder;
    reportData?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type YearlyReportAvgOrderByAggregateInput = {
    year?: Prisma.SortOrder;
    yearlyConsistencyPct?: Prisma.SortOrder;
    totalTasksCompleted?: Prisma.SortOrder;
    successfulDaysCount?: Prisma.SortOrder;
    missedDaysCount?: Prisma.SortOrder;
    noActivityDaysCount?: Prisma.SortOrder;
    optionalOnlyDaysCount?: Prisma.SortOrder;
    streakBreaksCount?: Prisma.SortOrder;
    finalRank?: Prisma.SortOrder;
};
export type YearlyReportMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    year?: Prisma.SortOrder;
    yearlyConsistencyPct?: Prisma.SortOrder;
    totalTasksCompleted?: Prisma.SortOrder;
    successfulDaysCount?: Prisma.SortOrder;
    missedDaysCount?: Prisma.SortOrder;
    noActivityDaysCount?: Prisma.SortOrder;
    optionalOnlyDaysCount?: Prisma.SortOrder;
    streakBreaksCount?: Prisma.SortOrder;
    finalRank?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type YearlyReportMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    year?: Prisma.SortOrder;
    yearlyConsistencyPct?: Prisma.SortOrder;
    totalTasksCompleted?: Prisma.SortOrder;
    successfulDaysCount?: Prisma.SortOrder;
    missedDaysCount?: Prisma.SortOrder;
    noActivityDaysCount?: Prisma.SortOrder;
    optionalOnlyDaysCount?: Prisma.SortOrder;
    streakBreaksCount?: Prisma.SortOrder;
    finalRank?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type YearlyReportSumOrderByAggregateInput = {
    year?: Prisma.SortOrder;
    yearlyConsistencyPct?: Prisma.SortOrder;
    totalTasksCompleted?: Prisma.SortOrder;
    successfulDaysCount?: Prisma.SortOrder;
    missedDaysCount?: Prisma.SortOrder;
    noActivityDaysCount?: Prisma.SortOrder;
    optionalOnlyDaysCount?: Prisma.SortOrder;
    streakBreaksCount?: Prisma.SortOrder;
    finalRank?: Prisma.SortOrder;
};
export type YearlyReportCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.YearlyReportCreateWithoutUserInput, Prisma.YearlyReportUncheckedCreateWithoutUserInput> | Prisma.YearlyReportCreateWithoutUserInput[] | Prisma.YearlyReportUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.YearlyReportCreateOrConnectWithoutUserInput | Prisma.YearlyReportCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.YearlyReportCreateManyUserInputEnvelope;
    connect?: Prisma.YearlyReportWhereUniqueInput | Prisma.YearlyReportWhereUniqueInput[];
};
export type YearlyReportUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.YearlyReportCreateWithoutUserInput, Prisma.YearlyReportUncheckedCreateWithoutUserInput> | Prisma.YearlyReportCreateWithoutUserInput[] | Prisma.YearlyReportUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.YearlyReportCreateOrConnectWithoutUserInput | Prisma.YearlyReportCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.YearlyReportCreateManyUserInputEnvelope;
    connect?: Prisma.YearlyReportWhereUniqueInput | Prisma.YearlyReportWhereUniqueInput[];
};
export type YearlyReportUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.YearlyReportCreateWithoutUserInput, Prisma.YearlyReportUncheckedCreateWithoutUserInput> | Prisma.YearlyReportCreateWithoutUserInput[] | Prisma.YearlyReportUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.YearlyReportCreateOrConnectWithoutUserInput | Prisma.YearlyReportCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.YearlyReportUpsertWithWhereUniqueWithoutUserInput | Prisma.YearlyReportUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.YearlyReportCreateManyUserInputEnvelope;
    set?: Prisma.YearlyReportWhereUniqueInput | Prisma.YearlyReportWhereUniqueInput[];
    disconnect?: Prisma.YearlyReportWhereUniqueInput | Prisma.YearlyReportWhereUniqueInput[];
    delete?: Prisma.YearlyReportWhereUniqueInput | Prisma.YearlyReportWhereUniqueInput[];
    connect?: Prisma.YearlyReportWhereUniqueInput | Prisma.YearlyReportWhereUniqueInput[];
    update?: Prisma.YearlyReportUpdateWithWhereUniqueWithoutUserInput | Prisma.YearlyReportUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.YearlyReportUpdateManyWithWhereWithoutUserInput | Prisma.YearlyReportUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.YearlyReportScalarWhereInput | Prisma.YearlyReportScalarWhereInput[];
};
export type YearlyReportUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.YearlyReportCreateWithoutUserInput, Prisma.YearlyReportUncheckedCreateWithoutUserInput> | Prisma.YearlyReportCreateWithoutUserInput[] | Prisma.YearlyReportUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.YearlyReportCreateOrConnectWithoutUserInput | Prisma.YearlyReportCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.YearlyReportUpsertWithWhereUniqueWithoutUserInput | Prisma.YearlyReportUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.YearlyReportCreateManyUserInputEnvelope;
    set?: Prisma.YearlyReportWhereUniqueInput | Prisma.YearlyReportWhereUniqueInput[];
    disconnect?: Prisma.YearlyReportWhereUniqueInput | Prisma.YearlyReportWhereUniqueInput[];
    delete?: Prisma.YearlyReportWhereUniqueInput | Prisma.YearlyReportWhereUniqueInput[];
    connect?: Prisma.YearlyReportWhereUniqueInput | Prisma.YearlyReportWhereUniqueInput[];
    update?: Prisma.YearlyReportUpdateWithWhereUniqueWithoutUserInput | Prisma.YearlyReportUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.YearlyReportUpdateManyWithWhereWithoutUserInput | Prisma.YearlyReportUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.YearlyReportScalarWhereInput | Prisma.YearlyReportScalarWhereInput[];
};
export type FloatFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type YearlyReportCreateWithoutUserInput = {
    id?: string;
    year: number;
    yearlyConsistencyPct: number;
    totalTasksCompleted?: number;
    successfulDaysCount?: number;
    missedDaysCount?: number;
    noActivityDaysCount?: number;
    optionalOnlyDaysCount?: number;
    streakBreaksCount?: number;
    finalRank?: number | null;
    reportData: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type YearlyReportUncheckedCreateWithoutUserInput = {
    id?: string;
    year: number;
    yearlyConsistencyPct: number;
    totalTasksCompleted?: number;
    successfulDaysCount?: number;
    missedDaysCount?: number;
    noActivityDaysCount?: number;
    optionalOnlyDaysCount?: number;
    streakBreaksCount?: number;
    finalRank?: number | null;
    reportData: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type YearlyReportCreateOrConnectWithoutUserInput = {
    where: Prisma.YearlyReportWhereUniqueInput;
    create: Prisma.XOR<Prisma.YearlyReportCreateWithoutUserInput, Prisma.YearlyReportUncheckedCreateWithoutUserInput>;
};
export type YearlyReportCreateManyUserInputEnvelope = {
    data: Prisma.YearlyReportCreateManyUserInput | Prisma.YearlyReportCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type YearlyReportUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.YearlyReportWhereUniqueInput;
    update: Prisma.XOR<Prisma.YearlyReportUpdateWithoutUserInput, Prisma.YearlyReportUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.YearlyReportCreateWithoutUserInput, Prisma.YearlyReportUncheckedCreateWithoutUserInput>;
};
export type YearlyReportUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.YearlyReportWhereUniqueInput;
    data: Prisma.XOR<Prisma.YearlyReportUpdateWithoutUserInput, Prisma.YearlyReportUncheckedUpdateWithoutUserInput>;
};
export type YearlyReportUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.YearlyReportScalarWhereInput;
    data: Prisma.XOR<Prisma.YearlyReportUpdateManyMutationInput, Prisma.YearlyReportUncheckedUpdateManyWithoutUserInput>;
};
export type YearlyReportScalarWhereInput = {
    AND?: Prisma.YearlyReportScalarWhereInput | Prisma.YearlyReportScalarWhereInput[];
    OR?: Prisma.YearlyReportScalarWhereInput[];
    NOT?: Prisma.YearlyReportScalarWhereInput | Prisma.YearlyReportScalarWhereInput[];
    id?: Prisma.StringFilter<"YearlyReport"> | string;
    userId?: Prisma.StringFilter<"YearlyReport"> | string;
    year?: Prisma.IntFilter<"YearlyReport"> | number;
    yearlyConsistencyPct?: Prisma.FloatFilter<"YearlyReport"> | number;
    totalTasksCompleted?: Prisma.IntFilter<"YearlyReport"> | number;
    successfulDaysCount?: Prisma.IntFilter<"YearlyReport"> | number;
    missedDaysCount?: Prisma.IntFilter<"YearlyReport"> | number;
    noActivityDaysCount?: Prisma.IntFilter<"YearlyReport"> | number;
    optionalOnlyDaysCount?: Prisma.IntFilter<"YearlyReport"> | number;
    streakBreaksCount?: Prisma.IntFilter<"YearlyReport"> | number;
    finalRank?: Prisma.IntNullableFilter<"YearlyReport"> | number | null;
    reportData?: Prisma.JsonFilter<"YearlyReport">;
    createdAt?: Prisma.DateTimeFilter<"YearlyReport"> | Date | string;
};
export type YearlyReportCreateManyUserInput = {
    id?: string;
    year: number;
    yearlyConsistencyPct: number;
    totalTasksCompleted?: number;
    successfulDaysCount?: number;
    missedDaysCount?: number;
    noActivityDaysCount?: number;
    optionalOnlyDaysCount?: number;
    streakBreaksCount?: number;
    finalRank?: number | null;
    reportData: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type YearlyReportUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    year?: Prisma.IntFieldUpdateOperationsInput | number;
    yearlyConsistencyPct?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalTasksCompleted?: Prisma.IntFieldUpdateOperationsInput | number;
    successfulDaysCount?: Prisma.IntFieldUpdateOperationsInput | number;
    missedDaysCount?: Prisma.IntFieldUpdateOperationsInput | number;
    noActivityDaysCount?: Prisma.IntFieldUpdateOperationsInput | number;
    optionalOnlyDaysCount?: Prisma.IntFieldUpdateOperationsInput | number;
    streakBreaksCount?: Prisma.IntFieldUpdateOperationsInput | number;
    finalRank?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    reportData?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type YearlyReportUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    year?: Prisma.IntFieldUpdateOperationsInput | number;
    yearlyConsistencyPct?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalTasksCompleted?: Prisma.IntFieldUpdateOperationsInput | number;
    successfulDaysCount?: Prisma.IntFieldUpdateOperationsInput | number;
    missedDaysCount?: Prisma.IntFieldUpdateOperationsInput | number;
    noActivityDaysCount?: Prisma.IntFieldUpdateOperationsInput | number;
    optionalOnlyDaysCount?: Prisma.IntFieldUpdateOperationsInput | number;
    streakBreaksCount?: Prisma.IntFieldUpdateOperationsInput | number;
    finalRank?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    reportData?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type YearlyReportUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    year?: Prisma.IntFieldUpdateOperationsInput | number;
    yearlyConsistencyPct?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalTasksCompleted?: Prisma.IntFieldUpdateOperationsInput | number;
    successfulDaysCount?: Prisma.IntFieldUpdateOperationsInput | number;
    missedDaysCount?: Prisma.IntFieldUpdateOperationsInput | number;
    noActivityDaysCount?: Prisma.IntFieldUpdateOperationsInput | number;
    optionalOnlyDaysCount?: Prisma.IntFieldUpdateOperationsInput | number;
    streakBreaksCount?: Prisma.IntFieldUpdateOperationsInput | number;
    finalRank?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    reportData?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type YearlyReportSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    year?: boolean;
    yearlyConsistencyPct?: boolean;
    totalTasksCompleted?: boolean;
    successfulDaysCount?: boolean;
    missedDaysCount?: boolean;
    noActivityDaysCount?: boolean;
    optionalOnlyDaysCount?: boolean;
    streakBreaksCount?: boolean;
    finalRank?: boolean;
    reportData?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["yearlyReport"]>;
export type YearlyReportSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    year?: boolean;
    yearlyConsistencyPct?: boolean;
    totalTasksCompleted?: boolean;
    successfulDaysCount?: boolean;
    missedDaysCount?: boolean;
    noActivityDaysCount?: boolean;
    optionalOnlyDaysCount?: boolean;
    streakBreaksCount?: boolean;
    finalRank?: boolean;
    reportData?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["yearlyReport"]>;
export type YearlyReportSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    year?: boolean;
    yearlyConsistencyPct?: boolean;
    totalTasksCompleted?: boolean;
    successfulDaysCount?: boolean;
    missedDaysCount?: boolean;
    noActivityDaysCount?: boolean;
    optionalOnlyDaysCount?: boolean;
    streakBreaksCount?: boolean;
    finalRank?: boolean;
    reportData?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["yearlyReport"]>;
export type YearlyReportSelectScalar = {
    id?: boolean;
    userId?: boolean;
    year?: boolean;
    yearlyConsistencyPct?: boolean;
    totalTasksCompleted?: boolean;
    successfulDaysCount?: boolean;
    missedDaysCount?: boolean;
    noActivityDaysCount?: boolean;
    optionalOnlyDaysCount?: boolean;
    streakBreaksCount?: boolean;
    finalRank?: boolean;
    reportData?: boolean;
    createdAt?: boolean;
};
export type YearlyReportOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "year" | "yearlyConsistencyPct" | "totalTasksCompleted" | "successfulDaysCount" | "missedDaysCount" | "noActivityDaysCount" | "optionalOnlyDaysCount" | "streakBreaksCount" | "finalRank" | "reportData" | "createdAt", ExtArgs["result"]["yearlyReport"]>;
export type YearlyReportInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type YearlyReportIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type YearlyReportIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $YearlyReportPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "YearlyReport";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        year: number;
        yearlyConsistencyPct: number;
        totalTasksCompleted: number;
        successfulDaysCount: number;
        missedDaysCount: number;
        noActivityDaysCount: number;
        optionalOnlyDaysCount: number;
        streakBreaksCount: number;
        finalRank: number | null;
        reportData: runtime.JsonValue;
        createdAt: Date;
    }, ExtArgs["result"]["yearlyReport"]>;
    composites: {};
};
export type YearlyReportGetPayload<S extends boolean | null | undefined | YearlyReportDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$YearlyReportPayload, S>;
export type YearlyReportCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<YearlyReportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: YearlyReportCountAggregateInputType | true;
};
export interface YearlyReportDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['YearlyReport'];
        meta: {
            name: 'YearlyReport';
        };
    };
    /**
     * Find zero or one YearlyReport that matches the filter.
     * @param {YearlyReportFindUniqueArgs} args - Arguments to find a YearlyReport
     * @example
     * // Get one YearlyReport
     * const yearlyReport = await prisma.yearlyReport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends YearlyReportFindUniqueArgs>(args: Prisma.SelectSubset<T, YearlyReportFindUniqueArgs<ExtArgs>>): Prisma.Prisma__YearlyReportClient<runtime.Types.Result.GetResult<Prisma.$YearlyReportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one YearlyReport that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {YearlyReportFindUniqueOrThrowArgs} args - Arguments to find a YearlyReport
     * @example
     * // Get one YearlyReport
     * const yearlyReport = await prisma.yearlyReport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends YearlyReportFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, YearlyReportFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__YearlyReportClient<runtime.Types.Result.GetResult<Prisma.$YearlyReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first YearlyReport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YearlyReportFindFirstArgs} args - Arguments to find a YearlyReport
     * @example
     * // Get one YearlyReport
     * const yearlyReport = await prisma.yearlyReport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends YearlyReportFindFirstArgs>(args?: Prisma.SelectSubset<T, YearlyReportFindFirstArgs<ExtArgs>>): Prisma.Prisma__YearlyReportClient<runtime.Types.Result.GetResult<Prisma.$YearlyReportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first YearlyReport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YearlyReportFindFirstOrThrowArgs} args - Arguments to find a YearlyReport
     * @example
     * // Get one YearlyReport
     * const yearlyReport = await prisma.yearlyReport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends YearlyReportFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, YearlyReportFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__YearlyReportClient<runtime.Types.Result.GetResult<Prisma.$YearlyReportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more YearlyReports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YearlyReportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all YearlyReports
     * const yearlyReports = await prisma.yearlyReport.findMany()
     *
     * // Get first 10 YearlyReports
     * const yearlyReports = await prisma.yearlyReport.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const yearlyReportWithIdOnly = await prisma.yearlyReport.findMany({ select: { id: true } })
     *
     */
    findMany<T extends YearlyReportFindManyArgs>(args?: Prisma.SelectSubset<T, YearlyReportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$YearlyReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a YearlyReport.
     * @param {YearlyReportCreateArgs} args - Arguments to create a YearlyReport.
     * @example
     * // Create one YearlyReport
     * const YearlyReport = await prisma.yearlyReport.create({
     *   data: {
     *     // ... data to create a YearlyReport
     *   }
     * })
     *
     */
    create<T extends YearlyReportCreateArgs>(args: Prisma.SelectSubset<T, YearlyReportCreateArgs<ExtArgs>>): Prisma.Prisma__YearlyReportClient<runtime.Types.Result.GetResult<Prisma.$YearlyReportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many YearlyReports.
     * @param {YearlyReportCreateManyArgs} args - Arguments to create many YearlyReports.
     * @example
     * // Create many YearlyReports
     * const yearlyReport = await prisma.yearlyReport.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends YearlyReportCreateManyArgs>(args?: Prisma.SelectSubset<T, YearlyReportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many YearlyReports and returns the data saved in the database.
     * @param {YearlyReportCreateManyAndReturnArgs} args - Arguments to create many YearlyReports.
     * @example
     * // Create many YearlyReports
     * const yearlyReport = await prisma.yearlyReport.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many YearlyReports and only return the `id`
     * const yearlyReportWithIdOnly = await prisma.yearlyReport.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends YearlyReportCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, YearlyReportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$YearlyReportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a YearlyReport.
     * @param {YearlyReportDeleteArgs} args - Arguments to delete one YearlyReport.
     * @example
     * // Delete one YearlyReport
     * const YearlyReport = await prisma.yearlyReport.delete({
     *   where: {
     *     // ... filter to delete one YearlyReport
     *   }
     * })
     *
     */
    delete<T extends YearlyReportDeleteArgs>(args: Prisma.SelectSubset<T, YearlyReportDeleteArgs<ExtArgs>>): Prisma.Prisma__YearlyReportClient<runtime.Types.Result.GetResult<Prisma.$YearlyReportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one YearlyReport.
     * @param {YearlyReportUpdateArgs} args - Arguments to update one YearlyReport.
     * @example
     * // Update one YearlyReport
     * const yearlyReport = await prisma.yearlyReport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends YearlyReportUpdateArgs>(args: Prisma.SelectSubset<T, YearlyReportUpdateArgs<ExtArgs>>): Prisma.Prisma__YearlyReportClient<runtime.Types.Result.GetResult<Prisma.$YearlyReportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more YearlyReports.
     * @param {YearlyReportDeleteManyArgs} args - Arguments to filter YearlyReports to delete.
     * @example
     * // Delete a few YearlyReports
     * const { count } = await prisma.yearlyReport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends YearlyReportDeleteManyArgs>(args?: Prisma.SelectSubset<T, YearlyReportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more YearlyReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YearlyReportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many YearlyReports
     * const yearlyReport = await prisma.yearlyReport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends YearlyReportUpdateManyArgs>(args: Prisma.SelectSubset<T, YearlyReportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more YearlyReports and returns the data updated in the database.
     * @param {YearlyReportUpdateManyAndReturnArgs} args - Arguments to update many YearlyReports.
     * @example
     * // Update many YearlyReports
     * const yearlyReport = await prisma.yearlyReport.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more YearlyReports and only return the `id`
     * const yearlyReportWithIdOnly = await prisma.yearlyReport.updateManyAndReturn({
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
    updateManyAndReturn<T extends YearlyReportUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, YearlyReportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$YearlyReportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one YearlyReport.
     * @param {YearlyReportUpsertArgs} args - Arguments to update or create a YearlyReport.
     * @example
     * // Update or create a YearlyReport
     * const yearlyReport = await prisma.yearlyReport.upsert({
     *   create: {
     *     // ... data to create a YearlyReport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the YearlyReport we want to update
     *   }
     * })
     */
    upsert<T extends YearlyReportUpsertArgs>(args: Prisma.SelectSubset<T, YearlyReportUpsertArgs<ExtArgs>>): Prisma.Prisma__YearlyReportClient<runtime.Types.Result.GetResult<Prisma.$YearlyReportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of YearlyReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YearlyReportCountArgs} args - Arguments to filter YearlyReports to count.
     * @example
     * // Count the number of YearlyReports
     * const count = await prisma.yearlyReport.count({
     *   where: {
     *     // ... the filter for the YearlyReports we want to count
     *   }
     * })
    **/
    count<T extends YearlyReportCountArgs>(args?: Prisma.Subset<T, YearlyReportCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], YearlyReportCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a YearlyReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YearlyReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends YearlyReportAggregateArgs>(args: Prisma.Subset<T, YearlyReportAggregateArgs>): Prisma.PrismaPromise<GetYearlyReportAggregateType<T>>;
    /**
     * Group by YearlyReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YearlyReportGroupByArgs} args - Group by arguments.
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
    groupBy<T extends YearlyReportGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: YearlyReportGroupByArgs['orderBy'];
    } : {
        orderBy?: YearlyReportGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, YearlyReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetYearlyReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the YearlyReport model
     */
    readonly fields: YearlyReportFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for YearlyReport.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__YearlyReportClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
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
 * Fields of the YearlyReport model
 */
export interface YearlyReportFieldRefs {
    readonly id: Prisma.FieldRef<"YearlyReport", 'String'>;
    readonly userId: Prisma.FieldRef<"YearlyReport", 'String'>;
    readonly year: Prisma.FieldRef<"YearlyReport", 'Int'>;
    readonly yearlyConsistencyPct: Prisma.FieldRef<"YearlyReport", 'Float'>;
    readonly totalTasksCompleted: Prisma.FieldRef<"YearlyReport", 'Int'>;
    readonly successfulDaysCount: Prisma.FieldRef<"YearlyReport", 'Int'>;
    readonly missedDaysCount: Prisma.FieldRef<"YearlyReport", 'Int'>;
    readonly noActivityDaysCount: Prisma.FieldRef<"YearlyReport", 'Int'>;
    readonly optionalOnlyDaysCount: Prisma.FieldRef<"YearlyReport", 'Int'>;
    readonly streakBreaksCount: Prisma.FieldRef<"YearlyReport", 'Int'>;
    readonly finalRank: Prisma.FieldRef<"YearlyReport", 'Int'>;
    readonly reportData: Prisma.FieldRef<"YearlyReport", 'Json'>;
    readonly createdAt: Prisma.FieldRef<"YearlyReport", 'DateTime'>;
}
/**
 * YearlyReport findUnique
 */
export type YearlyReportFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YearlyReport
     */
    select?: Prisma.YearlyReportSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the YearlyReport
     */
    omit?: Prisma.YearlyReportOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.YearlyReportInclude<ExtArgs> | null;
    /**
     * Filter, which YearlyReport to fetch.
     */
    where: Prisma.YearlyReportWhereUniqueInput;
};
/**
 * YearlyReport findUniqueOrThrow
 */
export type YearlyReportFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YearlyReport
     */
    select?: Prisma.YearlyReportSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the YearlyReport
     */
    omit?: Prisma.YearlyReportOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.YearlyReportInclude<ExtArgs> | null;
    /**
     * Filter, which YearlyReport to fetch.
     */
    where: Prisma.YearlyReportWhereUniqueInput;
};
/**
 * YearlyReport findFirst
 */
export type YearlyReportFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YearlyReport
     */
    select?: Prisma.YearlyReportSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the YearlyReport
     */
    omit?: Prisma.YearlyReportOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.YearlyReportInclude<ExtArgs> | null;
    /**
     * Filter, which YearlyReport to fetch.
     */
    where?: Prisma.YearlyReportWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of YearlyReports to fetch.
     */
    orderBy?: Prisma.YearlyReportOrderByWithRelationInput | Prisma.YearlyReportOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for YearlyReports.
     */
    cursor?: Prisma.YearlyReportWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` YearlyReports from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` YearlyReports.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of YearlyReports.
     */
    distinct?: Prisma.YearlyReportScalarFieldEnum | Prisma.YearlyReportScalarFieldEnum[];
};
/**
 * YearlyReport findFirstOrThrow
 */
export type YearlyReportFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YearlyReport
     */
    select?: Prisma.YearlyReportSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the YearlyReport
     */
    omit?: Prisma.YearlyReportOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.YearlyReportInclude<ExtArgs> | null;
    /**
     * Filter, which YearlyReport to fetch.
     */
    where?: Prisma.YearlyReportWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of YearlyReports to fetch.
     */
    orderBy?: Prisma.YearlyReportOrderByWithRelationInput | Prisma.YearlyReportOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for YearlyReports.
     */
    cursor?: Prisma.YearlyReportWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` YearlyReports from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` YearlyReports.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of YearlyReports.
     */
    distinct?: Prisma.YearlyReportScalarFieldEnum | Prisma.YearlyReportScalarFieldEnum[];
};
/**
 * YearlyReport findMany
 */
export type YearlyReportFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YearlyReport
     */
    select?: Prisma.YearlyReportSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the YearlyReport
     */
    omit?: Prisma.YearlyReportOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.YearlyReportInclude<ExtArgs> | null;
    /**
     * Filter, which YearlyReports to fetch.
     */
    where?: Prisma.YearlyReportWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of YearlyReports to fetch.
     */
    orderBy?: Prisma.YearlyReportOrderByWithRelationInput | Prisma.YearlyReportOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing YearlyReports.
     */
    cursor?: Prisma.YearlyReportWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` YearlyReports from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` YearlyReports.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of YearlyReports.
     */
    distinct?: Prisma.YearlyReportScalarFieldEnum | Prisma.YearlyReportScalarFieldEnum[];
};
/**
 * YearlyReport create
 */
export type YearlyReportCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YearlyReport
     */
    select?: Prisma.YearlyReportSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the YearlyReport
     */
    omit?: Prisma.YearlyReportOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.YearlyReportInclude<ExtArgs> | null;
    /**
     * The data needed to create a YearlyReport.
     */
    data: Prisma.XOR<Prisma.YearlyReportCreateInput, Prisma.YearlyReportUncheckedCreateInput>;
};
/**
 * YearlyReport createMany
 */
export type YearlyReportCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many YearlyReports.
     */
    data: Prisma.YearlyReportCreateManyInput | Prisma.YearlyReportCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * YearlyReport createManyAndReturn
 */
export type YearlyReportCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YearlyReport
     */
    select?: Prisma.YearlyReportSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the YearlyReport
     */
    omit?: Prisma.YearlyReportOmit<ExtArgs> | null;
    /**
     * The data used to create many YearlyReports.
     */
    data: Prisma.YearlyReportCreateManyInput | Prisma.YearlyReportCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.YearlyReportIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * YearlyReport update
 */
export type YearlyReportUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YearlyReport
     */
    select?: Prisma.YearlyReportSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the YearlyReport
     */
    omit?: Prisma.YearlyReportOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.YearlyReportInclude<ExtArgs> | null;
    /**
     * The data needed to update a YearlyReport.
     */
    data: Prisma.XOR<Prisma.YearlyReportUpdateInput, Prisma.YearlyReportUncheckedUpdateInput>;
    /**
     * Choose, which YearlyReport to update.
     */
    where: Prisma.YearlyReportWhereUniqueInput;
};
/**
 * YearlyReport updateMany
 */
export type YearlyReportUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update YearlyReports.
     */
    data: Prisma.XOR<Prisma.YearlyReportUpdateManyMutationInput, Prisma.YearlyReportUncheckedUpdateManyInput>;
    /**
     * Filter which YearlyReports to update
     */
    where?: Prisma.YearlyReportWhereInput;
    /**
     * Limit how many YearlyReports to update.
     */
    limit?: number;
};
/**
 * YearlyReport updateManyAndReturn
 */
export type YearlyReportUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YearlyReport
     */
    select?: Prisma.YearlyReportSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the YearlyReport
     */
    omit?: Prisma.YearlyReportOmit<ExtArgs> | null;
    /**
     * The data used to update YearlyReports.
     */
    data: Prisma.XOR<Prisma.YearlyReportUpdateManyMutationInput, Prisma.YearlyReportUncheckedUpdateManyInput>;
    /**
     * Filter which YearlyReports to update
     */
    where?: Prisma.YearlyReportWhereInput;
    /**
     * Limit how many YearlyReports to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.YearlyReportIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * YearlyReport upsert
 */
export type YearlyReportUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YearlyReport
     */
    select?: Prisma.YearlyReportSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the YearlyReport
     */
    omit?: Prisma.YearlyReportOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.YearlyReportInclude<ExtArgs> | null;
    /**
     * The filter to search for the YearlyReport to update in case it exists.
     */
    where: Prisma.YearlyReportWhereUniqueInput;
    /**
     * In case the YearlyReport found by the `where` argument doesn't exist, create a new YearlyReport with this data.
     */
    create: Prisma.XOR<Prisma.YearlyReportCreateInput, Prisma.YearlyReportUncheckedCreateInput>;
    /**
     * In case the YearlyReport was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.YearlyReportUpdateInput, Prisma.YearlyReportUncheckedUpdateInput>;
};
/**
 * YearlyReport delete
 */
export type YearlyReportDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YearlyReport
     */
    select?: Prisma.YearlyReportSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the YearlyReport
     */
    omit?: Prisma.YearlyReportOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.YearlyReportInclude<ExtArgs> | null;
    /**
     * Filter which YearlyReport to delete.
     */
    where: Prisma.YearlyReportWhereUniqueInput;
};
/**
 * YearlyReport deleteMany
 */
export type YearlyReportDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which YearlyReports to delete
     */
    where?: Prisma.YearlyReportWhereInput;
    /**
     * Limit how many YearlyReports to delete.
     */
    limit?: number;
};
/**
 * YearlyReport without action
 */
export type YearlyReportDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YearlyReport
     */
    select?: Prisma.YearlyReportSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the YearlyReport
     */
    omit?: Prisma.YearlyReportOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.YearlyReportInclude<ExtArgs> | null;
};
//# sourceMappingURL=YearlyReport.d.ts.map