import React, { createContext, useState } from 'react';

const ThemeContext = createContext();
const CardsTheme = createContext();

const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState('light-mode');


  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light-mode' ? 'dark-mode' : 'light-mode'));
    const htmlElement = document.documentElement;
    htmlElement.style.setProperty("--bg-color", theme === "light-mode" ? "#121721" : "#F4F6F8");
  
  };


  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>


     {children}

    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
