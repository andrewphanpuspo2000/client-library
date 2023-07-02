import { configureStore } from "@reduxjs/toolkit";
import userData from "./pages/Components/signin/userSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import bookCollection from "./pages/Components/Book-com/bookSlice";

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
  },
});

const persistor = persistStore(store);

export { store, persistor };
