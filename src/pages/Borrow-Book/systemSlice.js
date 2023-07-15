import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modal: false,
};
const borrowSlice = createSlice({
  name: "system",
  initialState,
  reducers: {
    setSystem: (state, { payload }) => {
      state.modal = payload;
    },
  },
});

const { reducer, actions } = borrowSlice;

export const { setSystem } = actions;

export default reducer;
