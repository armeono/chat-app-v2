import { useCurrentConversation } from "@/utils/stores/currentConversation";
import { User } from "@prisma/client";

type Props = {};
const ChatInfo = ({}: Props) => {
  const { currentConversation } = useCurrentConversation();

  console.log(currentConversation);

  return (
    <div className="w-full h-[80px] border-b-2 border-opacity-10 border-white flex flex-col justify-center px-8">
      <h1 className="text-2xl">{currentConversation.name}</h1>
      <div className="text-sm flex gap-[1px]">
        {currentConversation.users?.map((user: User, idx: number) => {
          return (
            <>
              <p key={idx}> {user.username}</p>{" "}
              {idx !== currentConversation.users?.length! - 1 && (
                <>
                  ,<span> </span>
                </>
              )}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default ChatInfo;
