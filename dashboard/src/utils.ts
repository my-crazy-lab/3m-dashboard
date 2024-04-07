import { sixJARS } from "./constants";

export const formatDate = (input: Date | string | undefined): string => {
  if (!input) return "Invalid Date";

  if (typeof input === "string")
    return new Date(input).toLocaleString("en-GB", {
      timeZone: "Asia/Kolkata",
    });

  return input.toLocaleString("en-GB", { timeZone: "Asia/Kolkata" });
};

export const formatCurrency = (input: string | number) => {
  return input.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });
};

export function getKeyJARSByCategory(category: string) {
  for (const jar of sixJARS) {
    if (jar.categories.includes(category)) {
      return jar.key;
    }
  }
  return null;
}

export function calculateRevenueForJARS(revenue: number, isDecrease?: boolean) {
  const result: any = {};

  sixJARS.forEach((item) => {
    if (isDecrease) {
      result[item.key] = -(revenue * item.percent);
    } else {
      result[item.key] = revenue * item.percent;
    }
  });

  return result;
}
