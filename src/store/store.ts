import { create } from "zustand";

interface User {
  isAuth: boolean;
  setAuth: (isAuth: boolean) => void;
}

const useAppStore = create<User>((set) => ({
  isAuth: true,
  setAuth: (isAuth) => {
    set({ isAuth });
  },
}));

export default useAppStore;
