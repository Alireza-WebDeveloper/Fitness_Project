import {
  CardMedia,
  Grid,
  Stack,
  Typography,
  Avatar,
  IconButton,
} from '@mui/material';
import React from 'react';

const ExerciseSingleDetail = ({ data }) => {
  const { bodyPart, gifUrl, name, target, equipment } = data;
  const moreDetail = [
    {
      name: bodyPart,
      source:
        'https://kit8.net/wp-content/uploads/edd/2022/08/cap_barbell_preview.jpg',
    },
    {
      name: target,
      source:
        'https://kit8.net/wp-content/uploads/edd/2022/08/fitness_bottle_preview.jpg',
    },
    {
      name: equipment,
      source:
        'https://kit8.net/wp-content/uploads/edd/2022/08/barbell_preview.jpg',
    },
  ];
  return (
    <Grid container spacing={2}>
      <Grid item md={6} xs={12}>
        <Stack
          sx={{
            display: 'flex',
            flexDirection: 'column',
            pl: 4,
            gap: 3,
            textTransform: 'capitalize',
          }}
        >
          <Typography variant={'h2'} component={'span'}>
            {name}
          </Typography>

          <Typography variant={'body1'} component={'span'}>
            note : Don’t feel discouraged about slow progress in the gym. Don’t
            let your doubts become reality, shed negative thoughts, and put in
            the work! Every day counts as progress
          </Typography>
          {moreDetail.map(({ name, source }) => {
            return (
              <Stack
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: 2,
                  alignItems: 'center',
                }}
              >
                <IconButton>
                  <Avatar src={source} />
                </IconButton>
                <Typography variant={'body1'}>{name}</Typography>
              </Stack>
            );
          })}
        </Stack>
      </Grid>
      <Grid item md={6} xs={12}>
        <CardMedia
          component={'img'}
          alt={name}
          src={gifUrl}
          sx={{ borderRadius: 3 }}
        />
      </Grid>
    </Grid>
  );
};

export default ExerciseSingleDetail;
