"use client";
import ChatSidebar from "@/components/ChatSidebar";
import MessagesContainer from "@/components/MessagesContainer";
import TextInput from "@/components/TextInput";
import { getUser } from "@/server/getUser";
import { saveMessage } from "@/server/saveMessage";
import { Message } from "@/types/message";
import { useCurrentConversation } from "@/utils/stores/currentConversation";
import { useCurrentUser } from "@/utils/stores/user";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { BiSolidSend } from "react-icons/bi";
import { useQuery } from "react-query";
import { io } from "socket.io-client";

export const socket = io("http://localhost:8000");

const socketInitializer = async () => {
  socket.on("connect", () => {
    console.log("connected");
  });
};

type ChatForm = {
  message: string;
};

const Chat = () => {
  const { currentConversation } = useCurrentConversation();
  const { user, setCurrentUser } = useCurrentUser();
  const [messages, setMessages] = useState<any>([]);
  const searchParams = useSearchParams();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ChatForm>();

  const { data: session } = useSession();

  const { data } = useQuery("user", () => getUser(session?.user?.name), {
    enabled: !!session?.user?.name,
  });

  const sendMessage: SubmitHandler<any> = (data) => {
    const message: Message = {
      text: data.message,
      room: currentConversation,
      userID: user?.id!,
      username: user?.username!,
    };

    setMessages([...messages, message]);

    socket.emit("message", message);

    axios.post("/api/cache/message/save", message);

    (document.getElementById("message-input") as HTMLInputElement).value = "";
  };

  socket.on("message", (message) => {
    setMessages([...messages, message]);
  });

  useEffect(() => {
    setCurrentUser(data?.user);
    socketInitializer();
  }, [setCurrentUser, data]);

  useEffect(() => {
    const keyListener = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("message-button")?.click();
      }
    };

    document.addEventListener("keydown", keyListener);

    return () => {
      document.removeEventListener("keydown", keyListener);
    };
  });

  return (
    <div className="text-white flex w-full">
      <ChatSidebar conversations={data?.user.conversations} />
      <div className="w-[80%] h-full flex flex-col">
        <div className="h-full flex">
          <MessagesContainer messages={messages}></MessagesContainer>
        </div>
        <form
          className="h-1/5 w-full flex items-center gap-4 p-4"
          onSubmit={handleSubmit(sendMessage)}
        >
          <TextInput
            register={register}
            handleSubmit={handleSubmit}
          ></TextInput>
          <button
            id="message-button"
            className="w-[50px] h-[50px] border rounded-full flex items-center justify-center text-xl hover:bg-white  hover:text-black transition-all"
            type="submit"
          >
            <BiSolidSend className="h-[30px] w-[30px]" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
