import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: {
  components: Promise<React.ReactNode>[];
} = {
  components: [],
};

const backdropSlice = createSlice({
  name: "backdrop",
  initialState,
  reducers: {
    removeComponent: (state) => {
      state.components.pop();
    },
    addComponent: (state, action: PayloadAction<Promise<React.ReactNode>>) => {
      state.components.push(action.payload);
    },
  },
});

export const { removeComponent, addComponent } = backdropSlice.actions;

export default backdropSlice.reducer;
