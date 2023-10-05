import { Message } from "@/types/message";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  {
    params,
  }: {
    params: { id: string };
  }
) {
  try {
    const messages = await prisma.message.findMany({
      where: {
        conversationId: params.id,
      },
      orderBy: {
        sentAt: "asc",
      },
      include: {
        User: true,
      },
    });

    const formattedMessages: Message[] = messages.map((message) => {
      return {
        room: message.conversationId,
        username: message.User.username,
        sentAt: String(message.sentAt),
        text: message.data,
        userID: message.userId,
      };
    });

    return NextResponse.json(formattedMessages);
  } catch (err) {
    return NextResponse.json({ message: "ERROR" }, { status: 500 });
  }
}
