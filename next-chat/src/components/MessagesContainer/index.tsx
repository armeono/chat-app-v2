import { Message } from "@/types/message";
import { useCurrentUser } from "@/utils/stores/user";
import MessageBubble from "../MessageBubble";
import { useCurrentConversation } from "@/utils/stores/currentConversation";
import ChatInfo from "../ChatInfo";

type Props = {
  messages: Message[];
};
const MessagesContainer = ({ messages }: Props) => {
  const { user } = useCurrentUser();

  return (
    <div className="w-full h-full flex flex-col justify-between">
      <ChatInfo />
      <div className="max-h-[90%] w-full flex flex-col-reverse p-10 z-10 ">
        <div className="h-full w-full flex flex-col-reverse overflow-scroll">
          <div className="flex flex-col bg-transparent gap-2 py-2">
            {messages.map((message: Message, idx: any) => (
              <div
                className={`w-full flex ${
                  message.userID === user?.id ? "justify-end" : "justify-start"
                }`}
                key={idx}
              >
                <MessageBubble message={message}></MessageBubble>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagesContainer;
