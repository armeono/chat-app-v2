import { User } from "@prisma/client";
import { create } from "zustand";

type UserStore = {
  user: User | null;
  setCurrentUser: (state: any) => void;
};

export const useCurrentUser = create<UserStore>()((set) => ({
  user: null,
  setCurrentUser: (state) => set({ user: state }),
}));
