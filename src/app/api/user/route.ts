import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request, response: Response) {
  const body = await request.json();
  const userData = body;

  await prisma.user.create({
    data: {
      firstName: userData.firstName,
      email: userData.email,
      lastName: userData.lastName,
      clerkUserId: userData.clerkUserId,
    },
  });

  return NextResponse.json({ success: true, msg: "User Successfully Created" });
}
