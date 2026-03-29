import { createContext } from "react";

export type TTheme = "light" | "dark";

type ThemeContextType = {
  theme: TTheme;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

