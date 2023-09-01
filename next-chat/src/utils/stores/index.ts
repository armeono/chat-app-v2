import { create } from "zustand";

type Store = {
  isLoggedIn: boolean;
  setIsLoggedIn: (state: any) => void;
};

export const useLoginStore = create<Store>()((set) => ({
  isLoggedIn: false,
  setIsLoggedIn: (state) => set({ isLoggedIn: state }),
}));
