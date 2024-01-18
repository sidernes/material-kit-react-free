import React, { useContext } from 'react';

import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';

import { ThemeContext } from 'src/theme';

import Iconify from 'src/components/iconify';

// eslint-disable-next-line react/prop-types
const DarkModeToggle = () => {
  const theme = useTheme();
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const handleClick = () => {
    setDarkMode(!darkMode);
  };
  return (
    <IconButton onClick={handleClick}>
      <Iconify
        icon={darkMode ? 'eva:sun-fill' : 'eva:moon-fill'}
        color={darkMode ? theme.palette.warning.main : theme.palette.secondary.dark}
      />
    </IconButton>
  );
};

export default DarkModeToggle;
