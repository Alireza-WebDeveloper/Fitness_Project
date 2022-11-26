import React, { useEffect } from 'react';
import { Pagination, PaginationItem, Stack, Box } from '@mui/material';
import { IconsArrowForward, IconArrowBack } from '../../Utils/index';
import { ActiveCurrentPageContext } from '../../Context/ActiveCurrentPage';
import { useDispatch, useSelector } from 'react-redux';
import { updateListOfPagination } from '../../feature/exerciseSearchSlice';
const ExercisePagination = () => {
  const { currentPage, handleUpdateCurrengPage } = ActiveCurrentPageContext();
  const { exerciseSearch } = useSelector((store) => store);
  const countPage = Math.floor(exerciseSearch.list.length / 10);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateListOfPagination(currentPage));
  }, [exerciseSearch.list]);
  useEffect(() => {
    dispatch(updateListOfPagination(currentPage));
  }, [currentPage]);
  useEffect(() => {
    handleUpdateCurrengPage(1);
  }, [exerciseSearch.list]);
  return (
    <Stack spacing={2} pb={1}>
      <Box m={'auto'}>
        <Pagination
          onChange={(e, value) => handleUpdateCurrengPage(value)}
          defaultPage={currentPage}
          siblingCount={0}
          boundaryCount={2}
          showFirstButton
          showLastButton
          color="primary"
          size="large"
          count={countPage}
          renderItem={(item) => (
            <PaginationItem
              slots={{ previous: IconArrowBack, next: IconsArrowForward }}
              {...item}
            />
          )}
        />
      </Box>
    </Stack>
  );
};

export default ExercisePagination;
