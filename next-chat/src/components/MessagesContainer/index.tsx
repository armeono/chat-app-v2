import { Message } from "@/types/message";
import { useCurrentUser } from "@/utils/stores/user";
import MessageBubble from "../MessageBubble";

type Props = {
  messages: Message[];
};
const MessagesContainer = ({ messages }: Props) => {
  const { user } = useCurrentUser();

  return (
    <div className="h-full w-full flex flex-col-reverse p-10">
      <div className="flex flex-col max-h-[100%] overflow-hidden bg-transparent gap-2">
        {messages.map((message: Message, key: any) => (
          <div
            className={`w-full flex ${
              message.userID === user?.id ? "justify-end" : "justify-start"
            }`}
            key={key}
          >
            <MessageBubble message={message}></MessageBubble>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessagesContainer;
