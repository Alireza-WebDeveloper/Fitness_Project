import { Stack, Grid, Typography, Button, CardMedia } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { banner1_Source } from '../../Utils';
import SearchBar from '../SearchBar';

const useStyles = makeStyles((theme) => ({
  BodyBuildingBanner: {
    backgroundColor: theme.palette.secondary.main,
    backgroundAttachment: 'scroll',
  },
}));

const BodyBuildingBanner = () => {
  const classes = useStyles();
  return (
    <Grid
      spacing={2}
      container
      className={`BodyBuilding_Banner ${classes.BodyBuildingBanner}`}
      p={2}
    >
      <Grid
        item
        md={6}
        xs={12}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Stack
          data-aos="fade-up"
          display={'flex'}
          flexDirection={'column'}
          gap={3}
          pl={5}
          textTransform={'capitalize'}
        >
          <Typography variant={'h3'} component={'h1'}>
            help for ideal body fitness
          </Typography>
          <Typography variant={'body1'} component={'p'}>
            a place or club where you can go to exercise using machines,
            weights, and other equipment: I go to the gym twice a week. You
            should join a gym.
          </Typography>
          <Stack display={'flex'} flexDirection={'row'} gap={2}>
            <Button size="large" variant={'contained'} color={'primary'}>
              start now
            </Button>
          </Stack>
        </Stack>
      </Grid>
      <Grid
        item
        md={6}
        xs={12}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Stack>
          <CardMedia
            component={'img'}
            src={banner1_Source}
            alt={'banner'}
            sx={{ height: { xs: '30vh', md: '70vh' }, objectFit: 'fill' }}
          />
        </Stack>
      </Grid>
    </Grid>
  );
};

export default React.memo(BodyBuildingBanner);
