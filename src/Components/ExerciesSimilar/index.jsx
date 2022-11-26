import React from 'react';
import { Grid, Stack, Box, Typography } from '@mui/material';
import HsScrollExerciesSimilar from '../HsScrollExerciesSimilar';
const ExerciseSimilar = ({ exercisesTargetMuscle, exercisesEquipment }) => {
  const renderExercisesTargetMuscle = () => {
    return exercisesTargetMuscle.loading ? null : (
      <Grid xs={12} item className="exercises_TargetMuscle">
        <Stack
          textTransform={'capitalize'}
          display={'flex'}
          flexDirection={'columng'}
        >
          <Typography variant={'h3'} component={'p'} gutterBottom>
            exercises{' '}
            <Typography
              variant={'h3'}
              component={'span'}
              sx={{ color: (theme) => theme.palette.primary.main }}
            >
              target muscle
            </Typography>{' '}
          </Typography>
          <Stack>
            <HsScrollExerciesSimilar data={exercisesTargetMuscle.list} />
          </Stack>
        </Stack>
      </Grid>
    );
  };

  const renderExercisesEquipment = () => {
    return exercisesEquipment.loading ? null : (
      <Grid xs={12} item className="exercises_Equipment">
        <Stack
          textTransform={'capitalize'}
          display={'flex'}
          flexDirection={'columng'}
        >
          <Typography variant={'h3'} pl={1} component={'p'} gutterBottom>
            exercises{' '}
            <Typography
              variant={'h3'}
              component={'span'}
              sx={{ color: (theme) => theme.palette.primary.main }}
            >
              equipment
            </Typography>{' '}
          </Typography>
          <Stack>
            <HsScrollExerciesSimilar data={exercisesEquipment.list} />
          </Stack>
        </Stack>
      </Grid>
    );
  };
  return (
    <Grid container spacing={10}>
      {renderExercisesTargetMuscle()}
      {renderExercisesEquipment()}
    </Grid>
  );
};

export default React.memo(ExerciseSimilar);
