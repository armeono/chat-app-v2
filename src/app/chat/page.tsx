"use client";
import ChatSidebar from "@/components/ChatSidebar";
import { websocketAxios } from "@/config/axios";
import { useCurrentConversation } from "@/utils/stores/currentConversation";
import axios from "axios";
import { useEffect, useState } from "react";
const socket = new WebSocket("ws://127.0.0.1:8000/api/ws", "echo-protocol");

const socketInitializer = async () => {
  socket.onopen = () => {
    console.log("connected");
  };
};

const Chat = () => {
  const { currentConversation } = useCurrentConversation();
  const [message, setMessage] = useState<string>("");

  socket.onmessage = (e) => {
    console.log(e.data);
  };

  useEffect(() => {
    socketInitializer();
  }, []);

  return (
    <div className="text-white flex">
      <ChatSidebar />
      <h1>{currentConversation}</h1>

      <button
        onClick={() => {
          socket.send("hello");
        }}
      >
        Im testing the websocket
      </button>
    </div>
  );
};

export default Chat;
