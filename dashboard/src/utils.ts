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
