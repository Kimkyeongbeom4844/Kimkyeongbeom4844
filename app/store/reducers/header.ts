import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  headerOffsetHeight: 0,
  // headerLinkList: ["소개", "프로젝트", "개인", "댓글"],
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
