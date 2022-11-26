import { Box, IconButton } from '@mui/material';
import React from 'react';
import { IconsArrowForward } from '../../Utils';

const HsScrollArrowForward = (props) => {
  const { className, onClick } = props;
  return (
    <Box
      className={className}
      sx={{
        position: 'absolute',
        right: { md: '5%', xs: '10%' },
        borderRadius: 4,
      }}
    >
      <IconButton onClick={onClick}>{IconsArrowForward}</IconButton>
    </Box>
  );
};

export default HsScrollArrowForward;
