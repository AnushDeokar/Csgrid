import prisma from "@/libs/prismadb";
import type { Post } from "@prisma/client";

export async function getLatestBlogs() {
  const latestPosts: Post[] = await prisma.post.findMany({
    take: 4,
    orderBy: {
      createdAt: "desc",
    },
  });
  return latestPosts;
}

export async function getBlogBySlug(slug: any): Promise<any> {
  try {
    const blogPost: Post | null = await prisma.post.findUnique({
      where: {
        slug: slug[0],
      },
      include: {
        user: {
          select: {
            firstName: true,
            lastName: true,
          },
        },
      },
    });

    if (!blogPost) {
      // Handle the case where no post is found with the specified slug
      return null;
    }

    return blogPost;
  } catch (error) {
    // Handle any other errors that may occur during the query
    console.error("Error fetching blog post:", error);
    throw error;
  }
}

export async function searchBlogs(query: string) {
  try {
    const lowerCasequery = query.toLocaleLowerCase();
    type PickyPost = Pick<Post, "id" | "slug" | "title">;
    const blogPosts: PickyPost[] = await prisma.post.findMany({
      where: {
        slug: {
          contains: lowerCasequery,
        },
      },
      select: {
        title: true,
        id: true,
        slug: true,
      },
    });

    if (!blogPosts) {
      // Handle the case where no post is found with the specified slug
      return null;
    }

    return blogPosts;
  } catch (error) {
    // Handle any other errors that may occur during the query
    console.error("Error fetching blog post:", error);
    throw error;
  }
}
