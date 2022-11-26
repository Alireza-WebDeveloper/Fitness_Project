import React from 'react';
import settingSlider from './setting';
import Slider from 'react-slick';
import { Box } from '@mui/material';
import ExerciesCard from '../ExerciesCard';

const HsScrollExercisesSimilar = ({ data }) => {
  const renderExerciesSimilar = () => {
    return data.map((exercise) => {
      return (
        <Box sx={{ p: 2 }} key={exercise.name}>
          <ExerciesCard exercise={exercise} />
        </Box>
      );
    });
  };
  return <Slider {...settingSlider}>{renderExerciesSimilar()}</Slider>;
};

export default React.memo(HsScrollExercisesSimilar);
