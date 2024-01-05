import create from "zustand";
import { persist } from "zustand/middleware";

export const useLoginStore = create(
  persist(
    (set) => ({
      loggedIn: false,
      role_id: "",
      username: "",
      token: "",
      setLoggedIn: (loggedIn, role_id, username, token) => set(() => ({ loggedIn, role_id, username, token })),
      setLogOut: () => set(() => ({ loggedIn: false, role_id: "", username: "", token: "" })),
    }),
    { name: "user" }
  )
);
