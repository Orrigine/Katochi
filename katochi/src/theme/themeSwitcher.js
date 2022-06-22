import React, { useContext, useEffect } from "react";

import { ThemeContext } from "./themeContext";

import{ ReactComponent as Sun } from "../img/sun.svg";
import{ ReactComponent as Moon } from "../img/dark_moon.svg";
const ThemeSwitcher = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const isLight = theme === "light";

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");

    if (localTheme) {
      setTheme(localTheme);
    }

    // eslint-disable-next-line
  }, [theme]);

  const storeTheme = themeValue => {
    setTheme(themeValue);
    window.localStorage.setItem("theme", themeValue);
  };

  const updateTheme = () =>
    isLight ? storeTheme("dark") : storeTheme("light");

  return (
    <div className='switcher' >
      {!isLight && <Sun onClick={() => updateTheme()}/>} 
      {isLight && <Moon onClick={() => updateTheme()}/>}
    </div>
  );
};

export default ThemeSwitcher;