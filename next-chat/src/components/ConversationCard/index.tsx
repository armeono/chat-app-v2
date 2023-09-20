"use client";
import { useCurrentConversation } from "@/utils/stores/currentConversation";
import { Conversation } from "@prisma/client";
import { useRouter } from "next/navigation";

type Props = {
  conversation: Conversation;
};

const ConversationCard = ({ conversation }: Props) => {
  const { currentConversation, setCurrentConversation } =
    useCurrentConversation();
  const router = useRouter();

  return (
    <div
      className={`h-[70px] w-full border-b border-white border-opacity-20 ${
        currentConversation === conversation.id && "bg-cyan-200 bg-opacity-50"
      } flex items-center gap-2 px-2 cursor-pointer`}
      onClick={() => {
        setCurrentConversation(conversation.id);
        router.push(`?conversation=${conversation.id}`);
      }}
    >
      <div className="h-14 w-14 rounded-full border"></div>
      <div>
        <h2>{conversation.name}</h2>
        <p className="text-sm text-gray-400">Some text in the convo</p>
      </div>
    </div>
  );
};

export default ConversationCard;
