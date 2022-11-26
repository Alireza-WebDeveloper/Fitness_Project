import { Divider, Grid, Stack, Typography } from '@mui/material';
import React, { useEffect, useRef } from 'react';
import BodyBuildingBanner from '../../BodyBuildingBanner';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGetListofBodyPart } from '../../../feature/listOfBodyPartSlice';
import HScrollBodyPart from '../../HScrollBodyOfPart';
import ExerciesCard from '../../ExerciesCard';
import ExercisePagination from '../../ExercisePagination';
import { useState } from 'react';
import { ActiveCurrentPageContext } from '../../../Context/ActiveCurrentPage';
import SearchBar from '../../SearchBar';
import { Container } from '@mui/material';
import LazyLoading from '../../LazyLoading';
const Home = () => {
  const dispatch = useDispatch();
  const { listOfBodyPart, exerciseSearch } = useSelector((store) => store);
  const { currentPage } = ActiveCurrentPageContext();
  const [bCurrentPage, setBCurrentPage] = useState(currentPage);
  const refExerciseList = useRef();

  const renderExerciseSearch = () => {
    return exerciseSearch.loading ? (
      <Grid item xs={12} mt={2} mb={2}>
        <LazyLoading />
      </Grid>
    ) : (
      exerciseSearch.listOfPagination.map((exercise) => {
        return (
          <Grid lg={4} sm={6} xs={12} p={3} data-aos="fade-up">
            <ExerciesCard key={exercise.id} exercise={exercise} />
          </Grid>
        );
      })
    );
  };
  useEffect(() => {
    if (bCurrentPage !== currentPage) {
      setBCurrentPage(currentPage);
      refExerciseList.current.scrollIntoView({
        behavior: 'smooth',
      });
    }
  }, [currentPage]);
  useEffect(() => {
    dispatch(fetchGetListofBodyPart());
  }, []);
  return (
    <>
      <Grid container pt={9} spacing={10}>
        <Grid xs={12} item>
          <BodyBuildingBanner />
        </Grid>
        <Grid xs={12} item>
          <Divider />
          <HScrollBodyPart data={listOfBodyPart.list} />
        </Grid>
        <Grid xs={12} item>
          <Container>
            <SearchBar />
          </Container>
        </Grid>
        <Grid xs={12} item ref={refExerciseList}>
          {exerciseSearch.list.length > 0 && (
            <Typography
              textAlign={'center'}
              textTransform={'capitalize'}
              gutterBottom
              variant={'h2'}
              component={'h1'}
              p={3}
            >
              exercies
            </Typography>
          )}
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Grid container>{renderExerciseSearch()}</Grid>
            </Grid>
            {exerciseSearch.loading
              ? null
              : exerciseSearch.list.length >= 10 && (
                  <Grid item xs={12}>
                    <ExercisePagination />
                  </Grid>
                )}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
