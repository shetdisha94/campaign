import * as styles from "./theme-selector.module.css";

import { ThemeContext } from "../../../contexts/theme-context";
import { useContext, useState } from "react";

const ThemeSelector = () => {
  const { theme, handleTheme } = useContext(ThemeContext);

  return (
    <div className={styles.themeSelector}>
      <button className={styles.themeButton} onClick={handleTheme}>
        {theme === "dark" ? (
          <img src="/sun.svg" alt="light mode" />
        ) : (
          <img src="/moon.svg" alt="dark mode" />
        )}
      </button>
    </div>
  );
};

export default ThemeSelector;
