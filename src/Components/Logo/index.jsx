import { IconButton } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { logo_Source } from '../../Utils';

const Logo = () => {
  return (
    <>
      <Link to="">
        <IconButton edge={'start'}>
          <img
            className="fitness_Logo--Img"
            src={logo_Source}
            alt={'logo_Source'}
            loading="lazy"
            style={{ width: '3.5rem', height: '3.5rem' }}
          />
        </IconButton>
      </Link>
    </>
  );
};

export default Logo;
