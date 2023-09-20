import { BiEdit } from "react-icons/bi";
import Search from "../Search";
import ConversationCard from "../ConversationCard";
import { Conversation } from "@prisma/client";
import { useRouter, useSearchParams } from "next/navigation";
import { useCurrentConversation } from "@/utils/stores/currentConversation";
import { useEffect } from "react";

type Props = {
  conversations?: Conversation[];
};

const ChatSidebar = ({ conversations }: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const { currentConversation, setCurrentConversation } =
    useCurrentConversation();

  useEffect(() => {
    if (!searchParams.get("conversation")) {
      setCurrentConversation(conversations && conversations[0].id);

      router.push(`?conversation=${conversations && conversations[0].id}`);
    } else {
      const conversationId = searchParams.get("conversation");

      setCurrentConversation(conversationId);
    }
  }, [conversations]);

  return (
    <div className="h-full w-[300px] border-r border-white border-opacity-20 z-10">
      <div className="border-b border-white border-opacity-20 pb-4">
        <div className="w-full h-12 flex justify-center items-center px-4 py-8 relative">
          <h1 className="text-2xl font-semibold">Chat</h1>
          <BiEdit size={32} className="absolute right-4 cursor-pointer" />
        </div>
        <div className="w-full px-4">
          <Search />
        </div>
      </div>
      {conversations &&
        conversations.map((conversation, index) => {
          return <ConversationCard key={index} conversation={conversation} />;
        })}
    </div>
  );
};

export default ChatSidebar;
