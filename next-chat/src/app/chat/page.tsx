"use client";
import ChatSidebar from "@/components/ChatSidebar";
import { getUser } from "@/fetch/getUser";
import { useCurrentConversation } from "@/utils/stores/currentConversation";
import { useCurrentUser } from "@/utils/stores/user";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { io } from "socket.io-client";

const socket = io("http://localhost:8000");

const socketInitializer = async () => {
  socket.on("connect", () => {
    console.log("connected");
  });
};

const Chat = () => {
  const { currentConversation } = useCurrentConversation();
  const { setCurrentUser } = useCurrentUser();

  const { data: session } = useSession();

  const { data } = useQuery("user", () => getUser(session?.user?.name), {
    enabled: !!session?.user?.name,
  });

  console.log(data?.user);

  useEffect(() => {
    setCurrentUser(data?.user);
    socketInitializer();
  }, [data?.user]);

  return (
    <div className="text-white flex">
      <ChatSidebar conversations={data?.user.conversations} />
      <h1>user: {data && data.user.username}</h1>
      <h1>{currentConversation}</h1>
    </div>
  );
};

export default Chat;
