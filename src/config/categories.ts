export interface HomeCategory {
  name: string;
  href: string;
  slug: string;
}

export const categories: HomeCategory[] = [
  {
    name: "Frontend Development",
    href: "/categories/frontend-development",
    slug: "development",
  },
  {
    name: "CS Fundamentals",
    href: "/categories/cs-fundamentals",
    slug: "cs-fundamentals",
  },
  {
    name: "Cloud Computing",
    href: "/categories/cloud-computing",
    slug: "cloud-computing",
  },
  {
    name: "Backend Development",
    href: "/categories/backend-development",
    slug: "backend-development",
  },
];
