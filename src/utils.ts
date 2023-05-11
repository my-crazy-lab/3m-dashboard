export const formatDate = (input: Date | string | undefined): string => {
  if (!input) return "Invalid Date";

  if (typeof input === "string")
    return new Date(input).toLocaleString("en-GB", { timeZone: "UTC" });

  return input.toLocaleString("en-GB", { timeZone: "UTC" });
};

export const formatCurrency = (input: string | number) => {
  return input.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });
};
