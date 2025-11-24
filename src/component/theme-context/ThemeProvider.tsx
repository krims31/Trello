import { useState, useEffect } from "react";
import type { ReactNode } from "react";
import { ThemeContext, type ThemeContextType } from "./theme-context";

export function ThemeProvider(props: { children: ReactNode }) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.classList = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const value: ThemeContextType = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {props.children}
    </ThemeContext.Provider>
  );
}
