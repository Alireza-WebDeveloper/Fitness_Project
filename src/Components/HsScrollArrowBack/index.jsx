import { Box, IconButton } from '@mui/material';
import React from 'react';
import { IconArrowBack } from '../../Utils';

const HsScrollArrowBack = (props) => {
  const { className, onClick } = props;
  return (
    <Box
      className={className}
      sx={{
        position: 'absolute',
        top: '100%',
        right: { md: '15%', xs: '30%' },
        borderRadius: 4,
      }}
    >
      <IconButton onClick={onClick}>{IconArrowBack}</IconButton>
    </Box>
  );
};

export default HsScrollArrowBack;
