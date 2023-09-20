"use client";
import ChatSidebar from "@/components/ChatSidebar";
import ReceiverContainer from "@/components/ReceiverContainer";
import SenderContainer from "@/components/SenderContainer";
import TextInput from "@/components/TextInput";
import { getUser } from "@/fetch/getUser";
import { useCurrentConversation } from "@/utils/stores/currentConversation";
import { useCurrentUser } from "@/utils/stores/user";
import { useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { io } from "socket.io-client";

const socket = io("http://localhost:8000");

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
  const { setCurrentUser } = useCurrentUser();
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
    const message = {
      message: data.message,
      room: currentConversation,
    };

    socket.emit("message", message);
  };

  useEffect(() => {
    setCurrentUser(data?.user);
    socketInitializer();
  }, [setCurrentUser, data]);

  return (
    <div className="text-white flex w-full">
      <ChatSidebar conversations={data?.user.conversations} />
      <div className="w-[80%] h-full border flex flex-col">
        <div className="h-full flex">
          <ReceiverContainer></ReceiverContainer>
          <SenderContainer></SenderContainer>
        </div>
        <form
          className="h-1/5 w-full border border-green-500 flex items-center gap-4 p-4"
          onSubmit={handleSubmit(sendMessage)}
        >
          <TextInput
            register={register}
            handleSubmit={handleSubmit}
          ></TextInput>
        </form>
      </div>
    </div>
  );
};

export default Chat;
