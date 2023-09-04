import { BiEdit } from "react-icons/bi";
import Search from "../Search";
import ConversationCard from "../ConversationCard";

const ChatSidebar = () => {
  const conversations = [{ id: "1" }, { id: "2" }];
  return (
    <div className="h-full w-[300px] border-r border-white border-opacity-20">
      <div className="border-b border-white border-opacity-20 pb-4">
        <div className="w-full h-12 flex justify-center items-center px-4 py-8 relative">
          <h1 className="text-2xl font-semibold">Chat</h1>
          <BiEdit size={32} className="absolute right-4 cursor-pointer" />
        </div>
        <div className="w-full px-4">
          <Search />
        </div>
      </div>
      {conversations.map((conversation, index) => {
        return <ConversationCard key={index} conversation={conversation} />;
      })}
    </div>
  );
};

export default ChatSidebar;
