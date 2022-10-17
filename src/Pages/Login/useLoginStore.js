import create from "zustand";
import { persist } from "zustand/middleware";

export const useLoginStore = create(
  persist(
    (set) => ({
      loggedIn: false,
      userName: "",
      passWord: "",
      setLoggedIn: (loggedIn, passWord, userName) => set((state) => ({ ...state, loggedIn, passWord, userName })),
      setLoggedOut: () => set(() => ({loggedIn: false, passWord: "", userName: "" })),
    }),
    { name: "user" }
  )
);
