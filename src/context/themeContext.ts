import { createContext } from "react";

type TTheme = "light" | "dark";

type ThemeContextType = {
  theme: TTheme;
  setTheme: (theme: TTheme) => void;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);