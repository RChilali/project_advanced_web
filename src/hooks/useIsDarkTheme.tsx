import {useState} from "react";

export const useIsDarkTheme = () => {
  const getCurrentTheme = () => window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDarkTheme, setIsDarkTheme] = useState(getCurrentTheme());

  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
    setIsDarkTheme(e.matches);
  });
  return isDarkTheme;
}