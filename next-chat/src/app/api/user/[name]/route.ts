import { prisma } from "@/config/prismaClient";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { name: string } }
) {
  try {
    const user = await prisma.user.findFirst({
      where: { username: params.name },
      include: {
        conversations: true,
        friends: true,
      },
    });

    if (!user)
      return NextResponse.json({ err: "User not found" }, { status: 404 });

    return NextResponse.json({ user });
  } catch (err) {
    return NextResponse.json({ err }, { status: 500 });
  }
}
