import { create } from "zustand";

const usePlayCourse = create((set) => ({
  clickedLanguage: [],
  setClickedLanguage: (clickedLanguage) => set({ clickedLanguage }),
}));

export default usePlayCourse;
