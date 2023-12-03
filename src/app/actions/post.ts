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
            slug: true,
            brief: true,
          },
        },
        categories: {
          select: {
            name: true,
            slug: true,
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

interface PickyBlogPost {
  title: string;
  slug: string | null;
  createdAt: Date;
  image: string;
  user: {
    firstName: string;
    lastName: string;
    brief: string | null;
    id: string;
    about: string;
  };
}

export async function getBlogsByUser(query: string) {
  try {
    const blogPosts: PickyBlogPost[] = await prisma.post.findMany({
      where: {
        user: {
          clerkUserId: query,
        },
      },
      select: {
        title: true,
        slug: true,
        createdAt: true,
        image: true,
        user: {
          select: {
            firstName: true,
            lastName: true,
            brief: true,
            id: true,
            about: true,
          },
        },
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

export async function getBlogsBySlug(query: string) {
  try {
    const blogPosts: PickyBlogPost[] = await prisma.post.findMany({
      where: {
        user: {
          slug: query,
        },
      },
      select: {
        title: true,
        slug: true,
        createdAt: true,
        image: true,
        user: {
          select: {
            firstName: true,
            lastName: true,
            brief: true,
            id: true,
            about: true,
          },
        },
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

export async function getUserBySlug(query: string) {
  const user = await prisma.user.findUnique({
    where: {
      slug: query,
    },
    select: {
      id: true,
      firstName: true,
      lastName: true,
      brief: true,
      about: true,
    },
  });

  return user;
}

export async function getUserById(query: string) {
  const user = await prisma.user.findUnique({
    where: {
      clerkUserId: query,
    },
    select: {
      id: true,
      firstName: true,
      lastName: true,
      brief: true,
      about: true,
    },
  });

  return user;
}
