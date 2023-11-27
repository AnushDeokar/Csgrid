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
      },
    });
  } catch (err) {
    throw new Error("Failed to Create a Blog Post!");
  }

  return NextResponse.json({ success: true, msg: "User Successfully Created" });
}
