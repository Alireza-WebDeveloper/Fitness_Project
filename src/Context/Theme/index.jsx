import { colors, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { IconContext } from 'react-icons';
import { ActiveBodyPartStore } from '../ActiveBodyPart';
import '../../style.css';
import { ActiveCurrentPageStore } from '../ActiveCurrentPage';
const ThemeContext = React.createContext();

const ThemeStore = (props) => {
  const [mode, setMode] = useState(false);
  const theme = createTheme({
    palette: {
      mode: mode ? 'dark' : 'light',
      default: {
        main: mode ? colors.grey[900] : colors.grey[200],
      },
      primary: {
        main: mode ? '#C70039' : '#900C3F',
      },
      secondary: {
        main: mode ? '#FFC300' : '#FF5733',
      },
    },
    typography: {
      fontFamily: ['Domine'],
      body1: {
        fontFamily: 'Domine , cursive',
      },
      subtitle2: {
        fontFamily: 'Oswald , cursive',
      },
      h5: {
        fontFamily: 'RobotoSlab , cursive',
      },
      h2: {
        fontFamily: 'RobotoSlab , cursive',
      },
      h3: {
        fontFamily: 'RobotoSlab , cursive',
        fontSize: '3rem',
      },
      subtitle1: {
        fontFamily: 'Oswald , cursive',
      },
    },
  });
  const handleChangeTheme = () => {
    setMode(!mode);
  };
  return (
    <>
      <ActiveCurrentPageStore>
        <ActiveBodyPartStore>
          <IconContext.Provider value={{ size: '2.4rem' }}>
            <ThemeContext.Provider value={{ mode, handleChangeTheme }}>
              <ThemeProvider theme={theme}>
                <CssBaseline />
                {props.children}
              </ThemeProvider>
            </ThemeContext.Provider>
          </IconContext.Provider>
        </ActiveBodyPartStore>
      </ActiveCurrentPageStore>
    </>
  );
};

export { ThemeContext, ThemeStore };
