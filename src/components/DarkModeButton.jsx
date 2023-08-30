import { faToggleOn } from 'react-icons';
import React, { useState } from 'react';

const DarkModeButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(prevIsDarkMode => !prevIsDarkMode);
    document.documentElement.classList.toggle('dark', !isDarkMode);
  };

  return (
    <button
      className={`bg-primary text-white ${
        isDarkMode ? 'dark:bg-zinc-800 dark:text-white' : ''
      }`}
      onClick={toggleDarkMode}
    >
      Toggle Dark Mode {faToggleOn}
    </button>
  );
};

export default DarkModeButton;
