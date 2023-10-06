import { Message } from "@/types/message";
import { useCurrentUser } from "@/utils/stores/user";
import Image from "next/image";

type Props = {
  message: Message;
};

const MessageBubble = ({ message }: Props) => {
  const { user } = useCurrentUser();
  return (
    <div
      className={`flex items-center gap-2 relative ${
        user?.id === message.userID
          ? "bg-slate-800 rounded-l-md justify-end flex-row-reverse"
          : "border rounded-r-md justify-start"
      } px-4 py-2 mb-4`}
    >
      <div className="h-[30px] w-[30px] rounded-full overflow-hidden object-cover flex justify-center items-center">
        <Image
          src={
            user?.id === message.userID
              ? "/test-icons/spiderman.png"
              : "/test-icons/batman.png"
          }
          alt={""}
          height={30}
          width={30}
        />
      </div>
      <div>
        <p
          className={`text-sm ${
            user?.id === message.userID ? "text-slate-500" : "text-orange-500"
          }`}
        >
          {user?.id === message.userID ? "You" : message.username}
        </p>
        <p>{message.text}</p>
      </div>
      <p className="text-sm text-gray-400 absolute -bottom-[20px] right-0 z-10">
        {message.sentAt?.time}
      </p>
    </div>
  );
};

export default MessageBubble;
