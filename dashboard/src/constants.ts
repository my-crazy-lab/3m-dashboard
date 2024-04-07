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

export const sixJARS = [
  {
    key: "nec",
    name: "Necessity Account",
    description: [
      "Managing your everyday expenses and bills",
      "Basically it includes anything that you need to live, the necessities",
    ],
    categories: [
      "Ăn bữa chính",
      "Go market",
      "Cut hair",
      "Vật dụng gia đình",
      "Living expenses",
      "Accommodation fee",
      "Cosmetic",
      "BCS",
    ],
    percent: 0.8,
  },
  {
    key: "ply",
    name: "Play Account",
    description: ["Nurture yourself", "anything your heart desires"],
    categories: ["Play sport", "Chilling", "For life", "Nhậu", "Toy"],
    percent: 0.125,
  },
  {
    key: "ffa",
    name: "Financial Freedom Account",
    description: [
      "Your ticket to financial freedom",
      "Used for investments and building your passive income streams",
      "Never spend this money",
      "Only spend the returns on your investment",
    ],
    categories: [],
    percent: 0,
  },
  {
    key: "edu",
    name: "Education Account",
    description: ["You are your most valuable asset"],
    categories: ["For learning"],
    percent: 0.025,
  },
  {
    key: "lts",
    name: "Long-term saving for spending Account ",
    description: ["For bigger", "Nice-to-have purchases"],
    categories: ["Travel"],
    percent: 0.025,
  },
  {
    key: "giv",
    name: "Give Account",
    description: [
      "Giving away",
      "Use the money for family and friends on birthdays, special occasions and holidays",
    ],
    categories: [],
    percent: 0.025,
  },
];
