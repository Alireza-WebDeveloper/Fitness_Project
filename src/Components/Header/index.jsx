import { AppBar, Stack, Toolbar } from '@mui/material';
import React from 'react';
import Navigation from './Navigation';
import SwipeDrawer from './SwipeDrawer';
import useBrokenMatch from '../../Hook/useBrokenMatch';
import Logo from '../Logo';
import ToggleTheme from '../ToggleTheme';
const Header = () => {
  const { isMatching } = useBrokenMatch();
  const renderMenu = () => {
    return isMatching.md ? (
      <Stack
        flexGrow={1}
        display={'flex'}
        flexDirection={'row'}
        alignItems={'center'}
      >
        <Logo />
        <Stack
          sx={{ ml: 'auto', display: 'flex', flexDirection: 'row', gap: 2 }}
        >
          <ToggleTheme />
          <SwipeDrawer />
        </Stack>
      </Stack>
    ) : (
      <Navigation />
    );
  };
  return (
    <AppBar
      variant="outlined"
      sx={{ backgroundColor: (theme) => theme.palette.default.main }}
    >
      <Toolbar>{renderMenu()}</Toolbar>
    </AppBar>
  );
};

export default Header;
