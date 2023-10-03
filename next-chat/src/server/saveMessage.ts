import redisClient from "@/config/redisClient";
import { Message } from "@/types/message";
import { Message as PrismaMessage } from "@prisma/client";
import { v4 } from "uuid";

export const saveMessage = async (data: Message) => {
  const message: PrismaMessage = {
    id: v4(),
    data: data.text,
    conversationId: data.room,
    sentAt: new Date(),
    userId: data.userID,
  };

  await redisClient.set(data.room.toString(), message.toString());
};
