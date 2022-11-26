import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ajaxApiFitness } from '../../api';

const initialState = {
  data: null,
  loading: false,
  error: '',
};

const fetchGetExerciseSingleDetail = createAsyncThunk(
  'fetchGet/exerciseSingleDetail',
  async (id, ThunkControl) => {
    const response = await ajaxApiFitness.get(`/exercises/exercise/${id}`);
    return response.data;
  }
);

const exerciseSingleDetailSlice = createSlice({
  name: 'exerciseSingleDetail',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchGetExerciseSingleDetail.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchGetExerciseSingleDetail.fulfilled, (state, action) => {
      state.loading = false;
      state.error = '';
      state.data = action.payload;
    });
    builder.addCase(fetchGetExerciseSingleDetail.rejected, (state, action) => {
      state.loading = false;
      state.error = 'Failed Error';
      state.data = null;
    });
  },
});

export { fetchGetExerciseSingleDetail };

export default exerciseSingleDetailSlice.reducer;
