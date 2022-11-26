import React, { useState } from 'react';
import {
  List,
  ListItemButton,
  Box,
  IconButton,
  ListItem,
  Stack,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
  Typography,
} from '@mui/material';
import { dataOfRouterLinks, Icon_Close, Icon_Menu } from '../../../Utils';
import { Link } from 'react-router-dom';
import SearchBar from '../../SearchBar';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  links: {
    textDecoration: 'none',
    color: theme.palette.text.primary,
  },
}));

const SwipeDrawer = () => {
  const [open, setOpen] = useState(false);
  const classses = useStyles();
  const handleOpenSwipeDrawer = () => {
    setOpen(true);
  };
  const handleCloseSwipeDrawer = () => {
    setOpen(false);
  };
  const renderRouterLinks = () => {
    return dataOfRouterLinks.map(({ name, to, icon }) => {
      return (
        <Link to={to} className={classses.links} key={name}>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText
                primary={
                  <Typography
                    variant={'body1'}
                    textTransform={'capitalize'}
                    fontSize={'1.3rem'}
                  >
                    {name}
                  </Typography>
                }
              />
            </ListItemButton>
          </ListItem>
        </Link>
      );
    });
  };
  return (
    <Stack>
      <Box>
        <IconButton onClick={handleOpenSwipeDrawer}>{Icon_Menu}</IconButton>
      </Box>
      <SwipeableDrawer
        anchor={'top'}
        open={open}
        onClose={handleCloseSwipeDrawer}
      >
        <Stack flexGrow={1} p={2} gap={2}>
          <Box ml={'auto'}>
            <IconButton onClick={handleCloseSwipeDrawer}>
              {Icon_Close}
            </IconButton>
          </Box>
          <Stack>
            <SearchBar />
          </Stack>
          <Stack>
            <List>{renderRouterLinks()}</List>
          </Stack>
        </Stack>
      </SwipeableDrawer>
    </Stack>
  );
};

export default SwipeDrawer;
