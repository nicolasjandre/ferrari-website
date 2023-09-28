import React, { ReactNode, createContext, useEffect } from "react";
import { PrimeReactContext } from "primereact/api";

type ThemeContextProps = {
  theme: string;
  changeMyTheme: () => void;
};

type ThemeContextProviderProps = {
  children: ReactNode;
};

export const ThemeContext = createContext({} as ThemeContextProps);

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  const { changeTheme } = React.useContext(PrimeReactContext);
  const [theme, setTheme] = React.useState(localStorage.getItem("ferrari@theme") ?? "light");

  const changeMyTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    changeTheme?.(`lara-${theme}-blue`, `lara-${newTheme}-blue`, "theme-link", () => setTheme(newTheme));
    localStorage.setItem("ferrari@theme", newTheme);
  };

  useEffect(() => {
    const header = document.getElementById("header") as HTMLHeadElement;

    if (theme === "dark") {
      header.style.background = 'linear-gradient(rgba(32, 29, 29, 0.5), rgba(10, 10, 10, 0.973)), url("/ferrari.png")';

      const themeLink = document.getElementById("theme-link") as HTMLLinkElement;

      themeLink.href = `/themes/lara-${theme}-blue/theme.css`;
    } else {
      header.style.background = 'url("/ferrari.png")';
    }

    header.style.backgroundSize = "cover";
    header.style.backgroundRepeat = "no-repeat";
  }, [theme]);

  return <ThemeContext.Provider value={{ changeMyTheme, theme }}>{children}</ThemeContext.Provider>;
}
