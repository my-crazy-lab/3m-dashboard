export interface Transactions {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
  type: string;
  isProduction: boolean;
  label: {
    value: number;
    type: string;
    date: Date;
    description: string;
  };
}
