export const formatDate = (date: any) => {
  const options = { month: "short", day: "numeric", year: "numeric" };
  return date.toLocaleString("en-US", options);
};
