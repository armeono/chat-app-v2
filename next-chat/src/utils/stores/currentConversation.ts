import { Conversation, User } from "@prisma/client";
import { create } from "zustand";

type Store = {
  currentConversation: Conversation & {
    users?: User[];
  };
  setCurrentConversation: (state: any) => void;
};

export const useCurrentConversation = create<Store>()((set) => ({
  currentConversation: {
    id: "",
    name: "",
    createdAt: new Date(),
  },
  setCurrentConversation: (state) => set({ currentConversation: state }),
}));
