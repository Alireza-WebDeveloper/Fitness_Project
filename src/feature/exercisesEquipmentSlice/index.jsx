import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { response } from 'msw';
import { ajaxApiFitness } from '../../api';

const initialState = {
  loading: false,
  error: '',
  list: [],
};

const fetchGetExerciesEquipment = createAsyncThunk(
  'fetchGet/exercisesEquipment',
  async (equipment, action) => {
    const response = await ajaxApiFitness.get(
      `/exercises/equipment/${equipment}`
    );
    return response.data;
  }
);
const exercisesEquipmentSlice = createSlice({
  name: 'exercisesEquipment',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchGetExerciesEquipment.pending, (state, action) => {
      state.loading = true;
      state.error = '';
    });
    builder.addCase(fetchGetExerciesEquipment.fulfilled, (state, action) => {
      state.loading = false;
      state.list = action.payload;
      state.error = '';
    });
    builder.addCase(fetchGetExerciesEquipment.rejected, (state, action) => {
      state.list = [];
      state.error = 'Failed Request';
      state.loading = false;
    });
  },
});

export { fetchGetExerciesEquipment };

export default exercisesEquipmentSlice.reducer;
