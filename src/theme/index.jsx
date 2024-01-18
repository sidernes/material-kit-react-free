import PropTypes from 'prop-types';
import { useMemo, useState, createContext } from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider as MUIThemeProvider } from '@mui/material/styles';

import { shadows } from './shadows';
import { overrides } from './overrides';
import { typography } from './typography';
import { palette, paletteDark } from './palette';
import { customShadows } from './custom-shadows';

export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  const memoizedValue = useMemo(
    () => ({
      palette: darkMode ? paletteDark() : palette(),
      typography,
      shadows: shadows(),
      customShadows: customShadows(),
      shape: { borderRadius: 8 },
    }),
    [darkMode]
  );

  const theme = createTheme(memoizedValue);

  theme.components = overrides(theme);

  const themeContextValue = useMemo(() => ({ darkMode, setDarkMode }), [darkMode, setDarkMode]);

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </ThemeContext.Provider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node,
};
