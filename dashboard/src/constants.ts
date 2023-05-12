export enum IN_OUT {
  EXPENDITURE = "EXPENDITURE",
  REVENUE = "REVENUE",
}
export type IInOut = keyof typeof IN_OUT;
export const InOutDate = Object.values(IN_OUT);

export enum TRANSACTION_TYPE_EXPENDITURE {
  EAT = "EAT",
  PLAY_SPORT = "PLAY_SPORT",
  ACCOMMODATION_FEE = "ACCOMMODATION_FEE",
}
export type ITransactionTypeExpenditure =
  keyof typeof TRANSACTION_TYPE_EXPENDITURE;
export const TransactionTypeExpenditureData = Object.values(
  TRANSACTION_TYPE_EXPENDITURE
);

export enum TRANSACTION_TYPE_REVENUE {
  SALARY = "SALARY",
}
export type ITransactionTypeRevenue = keyof typeof TRANSACTION_TYPE_REVENUE;
export const TransactionTypeRevenue = Object.values(TRANSACTION_TYPE_REVENUE);
