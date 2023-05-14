export enum IN_OUT {
  EXPENDITURE = "Expenditure",
  REVENUE = "Revenue",
}
export type IInOut = keyof typeof IN_OUT;
export const InOutDate = Object.values(IN_OUT);

export enum TRANSACTION_TYPE_EXPENDITURE {
  EAT = "Ăn bữa chính",
  SNACK = "Ăn vặt",
  PLAY_SPORT = "Play sport",
  GO_MARKET = "Go market",
  ACCOMMODATION_FEE = "Accommodation fee",
  MINH_EM = "Minh em",
  CUT_HAIR = "Cut hair",
  BCS = "BCS",
  MOTORCYCLE_OIL = "Nhớt",
  MOTORCYCLE = "Motorcycle",
  PHONE_CARD = "Card điện thoại",
  PAY = "Trả nợ",
  DRINK = "Nhậu",
  HOME_TOOL = "Vật dụng gia đình",
  COSMETIC = "Cosmetic",
  TOY = "Toy",
  LEARN = "For learning",
  RELAX = "Chilling",
  TRAVEL = "Travel",
  FOR_LIFE = "For life",
  LOAN = "Cho vay",
  LIVING_EXPENSES = "Living expenses",
}
export type ITransactionTypeExpenditure =
  keyof typeof TRANSACTION_TYPE_EXPENDITURE;
export const TransactionTypeExpenditureData = Object.values(
  TRANSACTION_TYPE_EXPENDITURE
);

export enum TRANSACTION_TYPE_REVENUE {
  SALARY = "Salary",
  FROM_MOM = "From mom",
  LOAN = "Loan",
  PAY = "Được trả nợ",
}
export type ITransactionTypeRevenue = keyof typeof TRANSACTION_TYPE_REVENUE;
export const TransactionTypeRevenue = Object.values(TRANSACTION_TYPE_REVENUE);
