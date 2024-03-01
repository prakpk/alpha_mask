// features/geo/geoSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import getGeoInfo from '../geoService'; // Adjust the import path as necessary

export const fetchGeoInfo = createAsyncThunk(
  'geo/fetchGeoInfo',
  async (_, { rejectWithValue }) => {
    try {
      const data = await getGeoInfo();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const geoSlice = createSlice({
  name: 'geo',
  initialState: {
    data: null,
    status: 'idle', // 'idle', 'loading', 'succeeded', 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGeoInfo.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchGeoInfo.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchGeoInfo.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default geoSlice.reducer;
