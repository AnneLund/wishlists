import create from "zustand";
import { persist } from "zustand/middleware";

export const useLoginStore = create(
  persist(
    (set) => {
      return {
        loggedIn: false,
        userInfo: "",
        userName: "",
        setLoggedIn: (loggedIn, userInfo, userName) => set((state) => ({ ...state, loggedIn, userInfo, userName })),
      };
    },
    { name: "token" }
  )
);