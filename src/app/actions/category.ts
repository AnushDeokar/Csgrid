import type { Category } from "@prisma/client";
import prisma from "@/libs/prismadb";

export async function getCategoryBySlug(slug: any): Promise<any> {
  try {
    const categoryAndPosts: Category | null = await prisma.category.findUnique({
      where: {
        slug: slug[0],
      },
      include: {
        posts: {
          select: {
            title: true,
            slug: true,
            image: true,
            createdAt: true,
          },
        },
      },
    });

    if (!categoryAndPosts) {
      // Handle the case where no post is found with the specified slug
      return null;
    }

    return categoryAndPosts;
  } catch (error) {
    // Handle any other errors that may occur during the query
    console.error("Error fetching category post:", error);
    throw error;
  }
}
