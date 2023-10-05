import { Message } from "@/types/message";
import { Message as PrismaMessage } from "@prisma/client";
import axios from "axios";

export const getMessages = async (id: string) => {
  try {
    const messages = await axios.get(`/api/message/get/${id}`);

    return messages.data;
  } catch (err) {
    return err;
  }
};
