import { Grid } from '@mui/material';
import React, { useEffect } from 'react';
import ExerciseSingleDetail from '../../ExerciseSingleDetail';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGetExerciseSingleDetail } from '../../../feature/exerciseSingleDetailSlice';
import ExerciseSimilar from '../../ExerciesSimilar';
import { fetchGetExerciesTargetMuscle } from '../../../feature/exercisesTargetMuscleSlice';
import { fetchGetExerciesEquipment } from '../../../feature/exercisesEquipmentSlice';
import { useRef } from 'react';
import LazyLoading from '../../LazyLoading';
const ExcerciesDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const refExerciseDetail = useRef();
  const { exerciseSingleDetail, exercisesTargetMuscle, exercisesEquipment } =
    useSelector((store) => store);
  /**
   * ExerciseSingleDetail
   */
  useEffect(() => {
    dispatch(fetchGetExerciseSingleDetail(id));
  }, [id]);
  /**
   * Scroll To Top
   */
  useEffect(() => {
    refExerciseDetail.current.scrollIntoView({
      behavior: 'smooth',
    });
  }, [id]);
  /**
   * Fetch Equipment , TargetMuscle
   */
  useEffect(() => {
    if (!exerciseSingleDetail?.data) return;
    dispatch(fetchGetExerciesTargetMuscle(exerciseSingleDetail?.data?.target));
    dispatch(fetchGetExerciesEquipment(exerciseSingleDetail?.data?.equipment));
  }, [exerciseSingleDetail?.data]);
  /**
   *
   * @returns SingleDetail
   */
  const renderExerciseSingleDetail = () => {
    if (!exerciseSingleDetail.data) return null;
    return <ExerciseSingleDetail data={exerciseSingleDetail.data} />;
  };

  return (
    <Grid container pt={10} spacing={3} ref={refExerciseDetail}>
      {exerciseSingleDetail.loading ||
      exercisesEquipment.loading ||
      exercisesTargetMuscle.loading ? (
        <Grid xs={12} item mt={5}>
          <LazyLoading />
        </Grid>
      ) : (
        <>
          <Grid xs={12} item>
            {renderExerciseSingleDetail()}
          </Grid>
          <Grid xs={12} item>
            <ExerciseSimilar
              exercisesTargetMuscle={exercisesTargetMuscle}
              exercisesEquipment={exercisesEquipment}
            />
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default ExcerciesDetail;
