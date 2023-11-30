import { searchBlogs } from "@/app/actions/post";
import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";

const slugify = (str: string) =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");

export async function POST(request: Request, response: Response) {
  const data = await request.json();

  const categories = data.categories;
  const len = categories.length;
  const categoriesId = [];

  for (let i = 0; i < len; i++) {
    const category = await prisma.category.findUnique({
      where: {
        name: categories[i].toLowerCase(),
      },
    });

    if (category) {
      categoriesId.push(category.id);
    } else {
      const newCategory = await prisma.category.create({
        data: {
          name: categories[i],
          slug: slugify(categories[i]),
        },
      });

      categoriesId.push(newCategory.id);
    }
  }

  try {
    await prisma.post.create({
      data: {
        title: data.title,
        content: data.content,
        categoryIds: categoriesId,
        slug: data.slug,
        userId: data.userId,
        image: data.image,
      },
    });
  } catch (err) {
    throw new Error("Failed to Create a Blog Post!");
  }

  return NextResponse.json({ success: true, msg: "User Successfully Created" });
}

export async function GET(request: any) {
  const { searchParams } = new URL(request.url);

  const query = searchParams.get("query");

  try {
    const blogs = await searchBlogs(query as string);
    return NextResponse.json({ success: true, blogs });
  } catch (err) {
    throw new Error("Failed to Create a Blog Post!");
  }
}
