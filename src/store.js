import { configureStore } from "@reduxjs/toolkit";
import userData from "./pages/Components/signin/userSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import bookCollection from "./pages/Components/Book-com/bookSlice";
import borrowCol from "./pages/Borrow-Book/borrowSlice";
import commentCol from "./pages/Components/comment/commentSlice";
import systemSlice from "./pages/Borrow-Book/systemSlice";
const userPresistConfig = {
  key: "userInfo",
  storage,
};

const persistedUserReducer = persistReducer(userPresistConfig, userData);
// const persistedBookReducer = persistReducer(userPresistConfig, bookCollection);

const store = configureStore({
  reducer: {
    userInfo: persistedUserReducer,
    booksCol: bookCollection,
    borrowCollection: borrowCol,
    commentCollection: commentCol,
    systemState: systemSlice,
  },
});

const persistor = persistStore(store);

export { store, persistor };
