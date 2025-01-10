import { create } from "zustand";

const usePlayCourse = create((set) => ({
  clickedLanguage: [],
  setClickedLanguage: (clickedLanguage) => set({ clickedLanguage }),
  isPlaying: false,
  setIsPlaying: (isPlaying) => set({ isPlaying }),
}));

export default usePlayCourse;
