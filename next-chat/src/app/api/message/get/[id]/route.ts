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
      const date = new Date(message.sentAt);

      const localTime = new Date(date).toLocaleTimeString();

      const formattedDate = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;

      const [hours, minutes, seconds] = localTime.split(":");

      const formattedSeconds = seconds.slice(2);

      const formattedTime = `${hours}:${minutes} ${formattedSeconds}`;

      return {
        room: message.conversationId,
        username: message.User.username,
        sentAt: {
          time: formattedTime,
          date: String(formattedDate),
        },
        text: message.data,
        userID: message.userId,
      };
    });

    return NextResponse.json(formattedMessages);
  } catch (err) {
    return NextResponse.json({ message: "ERROR" }, { status: 500 });
  }
}
