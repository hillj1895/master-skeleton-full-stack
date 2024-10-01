// import { AsyncThunkAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// export const fetchDataById: AsyncThunkAction<any, void, AsyncThunkConfig> = createAsyncThunk(
//   'data/fetchByIdStatus',
//   async () => {
//     const response = await fetch(`http://localhost:3333/api/test-data`);
//     const data = await response.json();
//     return data;
//   }
// );

// const testFeatureSlice = createSlice({
//   name: 'data',
//   initialState: {
//     item: null,
//     loading: false,
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchDataById.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchDataById.fulfilled, (state, action) => {
//         state.item = action.payload;
//         state.loading = false;
//       })
//       .addCase(fetchDataById.rejected, (state, action) => {
//         state.loading = false;
//       });
//   },
// });

// export const dataReducer = testFeatureSlice.reducer;