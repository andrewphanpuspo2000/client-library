import { configureStore } from "@reduxjs/toolkit";
import userData from "./pages/Components/signin/userSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const userPresistConfig = {
  key: "userInfo",
  storage,
};

const persistedUserReducer = persistReducer(userPresistConfig, userData);

const store = configureStore({
  reducer: {
    userInfo: persistedUserReducer,
    testUser: userData,
  },
});

const persistor = persistStore(store);

export { store, persistor };
