import create from "zustand";

export const useFlashMessageStore = create((set) => ({
  successMessages: [],
  errorMessages: [],

  setSuccessMessage: (message) => {
    set((state) => ({
      successMessages: [...state.successMessages, message],
    }));
  },

  setErrorMessage: (message) => {
    set((state) => ({
      errorMessages: [...state.errorMessages, message],
    }));
  },

  removeSuccessMessage: () => {
    set((state) => ({ successMessages: state.successMessages.slice(1) }));
  },

  removeErrorMessage: () => {
    set((state) => ({ errorMessages: state.errorMessages.slice(1) }));
  },
}));
