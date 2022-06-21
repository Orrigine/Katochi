import React, { createContext } from "react";
import PropTypes from "prop-types";

export const ThemeContext = createContext();

export const   ThemeProvider = ({ children }) => {
    const [theme, setTheme] = React.useState("light");

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};