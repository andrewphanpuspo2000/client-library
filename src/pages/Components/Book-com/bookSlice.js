import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [],
  searchBooks: [],
};
export const userSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    setBooks: (state, { payload }) => {
      state.books = payload;
    },
    setSearch: (state, { payload }) => {
      state.searchBooks = payload;
    },
  },
});

const { reducer, actions } = userSlice;

export const { setBooks } = actions;
export const { setSearch } = actions;

export default reducer;
