"use client";
import ChatSidebar from "@/components/ChatSidebar";
import { useCurrentConversation } from "@/utils/stores/currentConversation";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:8000");

const socketInitializer = async () => {
  socket.on("connect", () => {
    console.log("connected");
  });
};

const Chat = () => {
  const { currentConversation } = useCurrentConversation();
  const [message, setMessage] = useState<string>("No message");

  socket.on("receive-message", (message: string) => {
    setMessage(message);
  });

  useEffect(() => {
    socketInitializer();
  }, []);

  return (
    <div className="text-white flex">
      <ChatSidebar />
      <h1>{currentConversation}</h1>
      <button
        onClick={() => {
          socket.emit("send-message", "yo does this work");
        }}
      >
        testing websockets
      </button>
      <h1>{message}</h1>
    </div>
  );
};

export default Chat;
