import { Message } from "@/types/message";
import { useCurrentUser } from "@/utils/stores/user";

type Props = {
  message: Message;
};

const MessageBubble = ({ message }: Props) => {
  const { user } = useCurrentUser();
  return (
    <div
      className={`${
        user?.id === message.userID
          ? "bg-slate-800 rounded-l-md"
          : "border rounded-r-md"
      } px-4 py-2 `}
    >
      <p>{message.text}</p>
    </div>
  );
};

export default MessageBubble;
