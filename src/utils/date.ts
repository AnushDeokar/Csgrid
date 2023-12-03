export const formatDate = (date: any) => {
  const options = { month: "short", day: "numeric", year: "numeric" };
  return date.toLocaleString("en-US", options);
};

export const generateRandomNumber = (): number => {
  // Generate a random number between 100000 and 999999
  return Math.floor(100000 + Math.random() * 900000);
};

export const slugify = (str: string) =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
