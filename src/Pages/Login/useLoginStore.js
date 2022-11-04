import create from "zustand";
import { persist } from "zustand/middleware";

export const useLoginStore = create(
  persist(
    (set) => {
      return {
        loggedIn: false,
        username: "",
        password: "",
        setLoggedIn: (loggedIn, username, password) => set((state) => ({ ...state, loggedIn, username, password})),
        setLogOut: () => set((state) => ({...state, loggedIn: false, username: "", password: "",}))
      };
    },
    {name: "user"}
  )
);