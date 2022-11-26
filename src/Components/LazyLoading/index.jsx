import React from 'react';
import { CircularProgress, Box, Stack } from '@mui/material';
const LazyLoading = () => {
  return (
    <Stack
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
      }}
    >
      <CircularProgress color="secondary" size={100} />
    </Stack>
  );
};

export default LazyLoading;
