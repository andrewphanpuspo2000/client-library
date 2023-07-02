import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [],
};
export const userSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    setBooks: (state, { payload }) => {
      state.books = payload;
    },
  },
});

const { reducer, actions } = userSlice;

export const { setBooks } = actions;

export default reducer;
