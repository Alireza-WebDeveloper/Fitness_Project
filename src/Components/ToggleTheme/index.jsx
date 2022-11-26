import { FormControlLabel, IconButton, Switch } from '@mui/material';
import React, { useContext } from 'react';
import { ThemeContext } from '../../Context/Theme';
import { IconDarkMode, IconLightMode } from '../../Utils';
/**
 * Button For Change Theme(Dark=>Light,Light=>Dark)
 * @returns
 */
const ToggleTheme = () => {
  const { mode, handleChangeTheme } = useContext(ThemeContext);
  return (
    <>
      <FormControlLabel
        className="toggle_Theme"
        onChange={handleChangeTheme}
        label={
          mode ? (
            <IconButton color="secondary">{IconDarkMode}</IconButton>
          ) : (
            <IconButton color="secondary">{IconLightMode}</IconButton>
          )
        }
        control={<Switch checked={mode} />}
      />
    </>
  );
};

export default ToggleTheme;
