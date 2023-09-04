"use client";
import ChatSidebar from "@/components/ChatSidebar";
import { useCurrentConversation } from "@/utils/stores/currentConversation";

const Chat = () => {
  const { currentConversation } = useCurrentConversation();
  return (
    <div className="text-white flex">
      <ChatSidebar />
      <h1>{currentConversation}</h1>
    </div>
  );
};

export default Chat;
