import { Stack, Button } from '@mui/material';
import React from 'react';
import Logo from '../../Logo';
import { dataOfRouterLinks } from '../../../Utils';
import { Link } from 'react-router-dom';
import SearchBar from '../../SearchBar';
import { makeStyles } from '@mui/styles';
import ToggleTheme from '../../ToggleTheme';
const useStyles = makeStyles((theme) => ({
  links: {
    textDecoration: 'none',
    color: theme.palette.text.primary,
  },
}));

const Navigation = () => {
  const classes = useStyles();
  const renderRouterLinks = () => {
    return dataOfRouterLinks.map(({ name, to }) => {
      return (
        <Link to={to} className={classes.links} key={name}>
          <Button
            variant={'text'}
            sx={{
              fontSize: '1.3rem',
              color: 'text.primary',
              fontFamily: (theme) => theme.typography.body1.fontFamily,
            }}
            size="large"
          >
            {name}
          </Button>
        </Link>
      );
    });
  };
  return (
    <Stack
      flexGrow={1}
      display={'flex'}
      flexDirection={'row'}
      alignItems={'center'}
      flexWrap={'wrap'}
      gap={2}
    >
      <Stack className="fitness_Logo">
        <Logo />
      </Stack>
      <Stack
        className="fitness_Router"
        display={'flex'}
        flexDirection={'row'}
        justifyContent={'space-evenly'}
        flexGrow={1}
      >
        {renderRouterLinks()}
      </Stack>
      <Stack className="fitness_SearchBar" flexGrow={1}>
        <SearchBar />
      </Stack>
      <Stack className="fitness_ToggleTheme">
        <ToggleTheme />
      </Stack>
    </Stack>
  );
};

export default Navigation;
