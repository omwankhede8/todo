import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import todoReducer from "../features/todo/todoSlice";

const persistConfig = {
  key: "root",
  storage, //================================default storage to local storage===================================
};

const persistedReducer = persistReducer(persistConfig, todoReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
