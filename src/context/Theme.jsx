/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/prop-types */
import React, { createContext, useState, useEffect } from 'react';

const ThemeContext = createContext('light');

//  light theme object

const lightTheme = {
  mode: 'light',
  background: '#f5f6fa',
  color: '#000',
  button: {
    buttonBgColor: '#000',
    buttonTextColor: '#fff',
  },
  navbar: {
    background: '#fff',
    color: '#000',
  },
};

// Dark theme object

const darkTheme = {
  mode: 'dark',
  background: '#000',
  color: '#fff',
  button: {
    buttonBgColor: '#fff',
    buttonTextColor: '#000',
  },
  navbar: {
    background: '#111827',
    color: '#fff',
  },
};

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(darkTheme); // Set darkTheme as the initial value

  const toggleTheme = () => {
    const newTheme = theme === lightTheme ? darkTheme : lightTheme;
    setTheme(newTheme);
    localStorage.setItem('selectedTheme', JSON.stringify(newTheme));
  };

  // Retrieve theme from local storage, if available
  useEffect(() => {
    const savedTheme = JSON.parse(localStorage.getItem('selectedTheme'));
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}

export { ThemeProvider, ThemeContext };
