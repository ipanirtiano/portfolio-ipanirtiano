/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const DarkModeContext = createContext();

const DarkModeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState("light");

  const handleDarkMode = () => {
    setIsDark((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <DarkModeContext.Provider value={{ isDark, setIsDark, handleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeProvider;
