import create from "zustand";

export const useSuccesStore = create((set) => ({
  toggleSucces: "none",
  succesPayload: null,
  setToggleSucces: (toggleVal) => set(() => ({ toggleSucces: toggleVal, succesPayload: null })),
  setSuccesPayload: (succesPayload) => set(() => ({ succesPayload: succesPayload, toggleSucces: "block" })),
}));