import create from "zustand";
import { persist } from "zustand/middleware";

export const useLoginStore = create(
  persist(
    (set) => {
      return {
        loggedIn: false,
        role_id: "",
        username: "",
        token: "",
        setLoggedIn: (loggedIn, role_id, username, token) => set((state) => ({ ...state, loggedIn, role_id, username, token })),
        setLogOut: () => set((state) => ({...state, loggedIn: false, username: ""}))
      };
    },
    
    {name: "user"}
  )
);
