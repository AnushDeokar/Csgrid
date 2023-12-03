import prisma from "@/libs/prismadb";
import { generateRandomNumber, slugify } from "@/utils/date";
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
      slug:
        slugify(userData.firstName + " " + userData.lastName) +
        "-" +
        generateRandomNumber(),
    },
  });

  return NextResponse.json({ success: true, msg: "User Successfully Created" });
}
