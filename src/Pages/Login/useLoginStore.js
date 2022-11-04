import create from "zustand";
import { persist } from "zustand/middleware";

export const useLoginStore = create(
  persist(
    (set) => ({
      loggedIn: false,
      userName: "",
      userInfo: "",
      setLoggedIn: (loggedIn, userInfo, userName) => set((state) => ({ ...state, loggedIn, userInfo, userName })),
      setLoggedOut: () => set(() => ({loggedIn: false, userInfo: "", userName: ""})),
    }),
    { name: "user" }
  )
);
