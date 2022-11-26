import { useMediaQuery, useTheme } from '@mui/material';

const useBrokenMatch = () => {
  const theme = useTheme();
  const isMatching = {
    xl: useMediaQuery(theme.breakpoints.down('xl')),
    lg: useMediaQuery(theme.breakpoints.down('lg')),
    md: useMediaQuery(theme.breakpoints.down('md')),
    sm: useMediaQuery(theme.breakpoints.down('sm')),
    xs: useMediaQuery(theme.breakpoints.down('xs')),
  };

  return { isMatching };
};

export default useBrokenMatch;
