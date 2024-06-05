import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

function ToggleTheme() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <button className="btn border" onClick={toggleTheme}>
            Switch to {theme === "light" ? "dark" : "light"}
        </button>
    );
}

export default ToggleTheme;
