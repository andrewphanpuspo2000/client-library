import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  borrowed: [],
};
const borrowSlice = createSlice({
  name: "borrow book",
  initialState,
  reducers: {
    setBorrowedBook: (state, { payload }) => {
      state.borrowed = payload;
    },
  },
});

const { reducer, actions } = borrowSlice;

export const { setBorrowedBook } = actions;

export default reducer;
