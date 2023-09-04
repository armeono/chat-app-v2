import { create } from "zustand";

type Store = {
  currentConversation: string;
  setCurrentConversation: (state: any) => void;
};

export const useCurrentConversation = create<Store>()((set) => ({
  currentConversation: "",
  setCurrentConversation: (state) => set({ currentConversation: state }),
}));
