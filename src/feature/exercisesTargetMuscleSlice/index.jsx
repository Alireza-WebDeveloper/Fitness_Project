import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ajaxApiFitness } from '../../api';

const initialState = {
  loading: false,
  error: '',
  list: [],
};

const fetchGetExerciesTargetMuscle = createAsyncThunk(
  'fetchGet/exerciesTargetMuscle',
  async (target, ThunkControl) => {
    const response = await ajaxApiFitness.get(`/exercises/target/${target}`);
    return response.data;
  }
);

const exerciesTargetMuscleSlice = createSlice({
  name: 'exerciesTargetMuscle',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchGetExerciesTargetMuscle.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchGetExerciesTargetMuscle.fulfilled, (state, action) => {
      state.loading = false;
      state.list = action.payload;
      state.error = '';
    });
    builder.addCase(fetchGetExerciesTargetMuscle.rejected, (state, action) => {
      state.loading = false;
      state.list = [];
      state.error = 'Failed Request';
    });
  },
});

export { fetchGetExerciesTargetMuscle };

export default exerciesTargetMuscleSlice.reducer;
