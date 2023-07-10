import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  comments: [],
};
const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    setComments: (state, { payload }) => {
      state.comments = payload;
    },
  },
});

const { reducer, actions } = commentSlice;

export const { setComments } = actions;

export default reducer;
