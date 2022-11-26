import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ajaxApiFitness } from '../../api';

const initialState = {
  list: [],
  listOfPagination: [],
  loading: false,
  error: '',
};

const fetchGetExerciseSearch = createAsyncThunk(
  'fetchGet/ExerciseSerach',
  async (query, ThunkControl) => {
    const response = await ajaxApiFitness.get('/exercises');
    return response.data.filter(({ name, target, bodyPart }) => {
      return (
        name.toLowerCase().includes(query) ||
        target.toLowerCase().includes(query) ||
        bodyPart.toLowerCase().includes(query)
      );
    });
  }
);

const exerciseSearchSlice = createSlice({
  name: 'exerciseSearchSlice',
  initialState,
  reducers: {
    updateListOfPagination: (state, action) => {
      const min = (action.payload - 1) * 10;
      const max = action.payload * 10;
      state.listOfPagination = state.list.slice(min, max);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGetExerciseSearch.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchGetExerciseSearch.fulfilled, (state, action) => {
      state.loading = false;
      state.error = '';
      state.list = action.payload;
    });
    builder.addCase(fetchGetExerciseSearch.rejected, (state, action) => {
      state.error = 'Failed Request';
      state.loading = false;
      state.list = [];
    });
  },
});

export const { updateListOfPagination } = exerciseSearchSlice.actions;
export { fetchGetExerciseSearch };

export default exerciseSearchSlice.reducer;
