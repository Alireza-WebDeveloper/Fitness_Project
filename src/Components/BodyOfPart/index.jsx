import {
  Box,
  CardMedia,
  CardActionArea,
  Stack,
  Typography,
  CardContent,
} from '@mui/material';
import React from 'react';
import { ActiveBodyPartContext } from '../../Context/ActiveBodyPart';
const BodyOfPart = ({ item, source_Img }) => {
  const { activeBodyPart, handleUpdateBodyPart } = ActiveBodyPartContext();
  return (
    <Stack
      component={'div'}
      sx={{
        display: 'flex',
        flexDirection: 'column',

        flexGrow: 1,
        gap: 3,
        pb: 2,
        transition: 'all 0.3s linear',
        borderRadius: '0.1rem',
        borderBottom: (theme) =>
          `${
            activeBodyPart === item.toLowerCase()
              ? `solid ${theme.palette.primary.main} 0.5rem`
              : ''
          }`,
        m: 1,
      }}
    >
      <CardActionArea
        onClick={() => handleUpdateBodyPart(item)}
        sx={{
          borderRadius: 1,
        }}
      >
        <CardMedia
          component={'img'}
          src={source_Img}
          alt={item}
          sx={{
            cursor: 'pointer',
            height: { md: '40vh', xs: '60vh' },
            objectFit: 'fill',
          }}
        />
        <CardContent>
          <Box component={'section'} sx={{ textAlign: 'center' }}>
            <Typography
              textTransform={'capitalize'}
              variant={'body1'}
              component={'span'}
            >
              {item}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Stack>
  );
};

export default BodyOfPart;
