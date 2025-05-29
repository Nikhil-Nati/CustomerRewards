export const getMonthName = (dateStr) => {
  return new Date(dateStr).toLocaleString("default", { month: "long" });
};

export const getYear = (dateStr) => {
  return new Date(dateStr).getFullYear();
};
