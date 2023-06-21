import React, { createContext, useState } from 'react';
import Header_ from './Header';
import Search from './search';
import Load from './load';
import Toggler from './Toggler';
import Home from './Home';
import Job_Details from './Job_details';
import App from '../App';
import index from '../index'
const ThemeContext = createContext();
const CardsTheme = createContext();

const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState('light-mode');
  const [theme_cards, set_cards_theme] = useState('light-mode-cards');


  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light-mode' ? 'dark-mode' : 'light-mode'));
    const htmlElement = document.documentElement;
    htmlElement.style.setProperty("--bg-color", theme === "light-mode" ? "#121721" : "#F4F6F8");
  
  };

  const toggle_Cards_Theme = () => {
    set_cards_theme((prevTheme) => (prevTheme === 'light-mode-cards' ? 'dark-mode-cards' : 'light-mode-cards'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>


     {children}

    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
