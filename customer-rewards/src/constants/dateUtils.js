export const getMonthName = (dateStr) => {
  return new Date(dateStr).getMonth()
};

export const getYear = (dateStr) => {
  return new Date(dateStr).getFullYear();
};
