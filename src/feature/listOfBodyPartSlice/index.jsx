import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ajaxApiFitness } from '../../api';

const initialState = {
  error: '',
  loading: false,
  list: [],
};

const fetchGetListofBodyPart = createAsyncThunk(
  'fetchGet/listOfBodyPart',
  async (data, ThunkControl) => {
    const response = await ajaxApiFitness.get('/exercises/bodyPartList');
    return response.data;
  }
);

const listOfBodyPartSlice = createSlice({
  name: 'listOfBodyPart',
  initialState: initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchGetListofBodyPart.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchGetListofBodyPart.fulfilled, (state, action) => {
      state.loading = false;
      state.list = ['all', ...action.payload];
    });
    builder.addCase(fetchGetListofBodyPart.rejected, (state, action) => {
      state.loading = false;
      state.list = [];
      state.error = 'Error To Fetch';
    });
  },
});

export { fetchGetListofBodyPart };

export default listOfBodyPartSlice.reducer;
