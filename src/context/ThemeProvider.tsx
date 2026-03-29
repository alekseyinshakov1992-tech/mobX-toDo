import { useState, type ReactNode } from "react";
import { ThemeContext, type TTheme } from "./themeContext";

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<TTheme>('light');

  const toggleTheme = () => {
    
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};