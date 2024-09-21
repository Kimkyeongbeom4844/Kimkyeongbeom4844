import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  headerOffsetHeight: 0,
};

export const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    setheaderOffsetHeight: (state, action: PayloadAction<number>) => {
      state.headerOffsetHeight = action.payload;
    },
  },
});

export const { setheaderOffsetHeight } = headerSlice.actions;

export default headerSlice.reducer;
