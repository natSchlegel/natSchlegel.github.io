import React, { createContext, useState, useContext } from 'react';
import TextData from './Text';

const Context = createContext();

export const Provider = ({ children }) => {

  const [currentLanguage, setCurrentLanguage] = useState("english");
  const [text, setText] = useState(TextData["english"]);

  const [windows, setWindows] = useState({
    curriculum: true,
    projects: false,
    education: false,
    experience: false,
  });

  const toggleWindow = (id, isOpen) => {
    setWindows(prev => ({
      ...prev,
      [id]: isOpen
    }));
  };

  const handleLanguageChange = (lang) => {
    setCurrentLanguage(lang);
    setText(TextData[lang]);
  };

  const contextValue = {
    text,
    currentLanguage,
    windows,
    toggleWindow,
    handleLanguageChange,
  };

  return (
    <Context.Provider value=
      {contextValue}
    >
      {children}
    </Context.Provider>
  );
};

export const useOS = () => useContext(Context);