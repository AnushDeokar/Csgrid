import { searchBlogs } from "@/app/actions/post";
import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request, response: Response) {
  const data = await request.json();

  try {
    await prisma.post.create({
      data: {
        title: data.title,
        content: data.content,
        categoryName: data.category,
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
