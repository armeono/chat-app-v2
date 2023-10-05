import { Message } from "@/types/message";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const requestBody = await req.json();

  const message = requestBody as Message;

  try {
    await prisma.message.create({
      data: {
        userId: message.userID,
        data: message.text,
        conversationId: message.room,
        sentAt: new Date(),
      },
    });

    return NextResponse.json({ message: "Success!" });
  } catch (err) {
    return NextResponse.json({ message: err }, { status: 500 });
  }
}
