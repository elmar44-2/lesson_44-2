import { createSlice, configureStore, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchData = createAsyncThunk(
  'data/fetchData', 
  async (userId) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    return response.json();
  }
);

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    data: null,
    status: 'idle', 
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

const store = configureStore({
  reducer: {
    data: dataSlice.reducer,
  },
});

export const { actions, reducer } = dataSlice;
export default store;
