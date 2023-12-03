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

export function extractFirst15Words(htmlString: string) {
  // Use regular expression to extract all text content within tags
  const allTextContent = htmlString.replace(/<[^>]*>/g, " ");

  // Use regular expression to extract the first 25 words
  const words = allTextContent.match(/\b\w+\b/g);
  const first25Words = words ? words.slice(0, 15).join(" ") : null;

  return first25Words;
}
