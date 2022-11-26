import {
  CardMedia,
  Stack,
  Button,
  Paper,
  Card,
  CardContent,
  Typography,
  CardActionArea,
} from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import styledModule from './index.module.css';
const ExerciesCard = ({ exercise }) => {
  return (
    <Card
      sx={{
        borderRadius: 4,
        position: 'relative',
        cursor: 'pointer',
        height: { lg: '86vh', xs: '85vh' },
        overflow: 'hidden',
        transition: 'all 0.2s linear',
        ':hover': {
          transform: 'scale(1.09)',
        },
      }}
    >
      <Link
        to={`/exercises/${exercise.id}`}
        style={{ textDecoration: 'none !important', border: 'none' }}
      >
        <CardMedia
          className={styledModule.img_Body}
          src={exercise.gifUrl}
          component={'img'}
          alt={exercise.name}
          loading={'lazy'}
          sx={{
            height: { lg: '57vh', xs: '60vh' },
            objectFit: 'cover',
          }}
        />
      </Link>
      <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        <Stack>
          <Typography
            variant={'h5'}
            textTransform={'capitalize'}
            component={'span'}
          >
            {exercise.name}
          </Typography>
        </Stack>
        <Stack display={'flex'} flexDirection={'row'} gap={3}>
          <Button size="large" variant={'contained'} color={'primary'}>
            {exercise.bodyPart}
          </Button>
          <Button size="large" variant={'contained'} color={'secondary'}>
            {exercise.target}
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default ExerciesCard;
