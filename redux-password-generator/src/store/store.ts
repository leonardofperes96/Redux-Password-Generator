import { configureStore } from "@reduxjs/toolkit";
import passwordReducer from "./reducers/passwordReducer";

// ...

const store = configureStore({
  reducer: {
    password: passwordReducer,
  },
});

export default store;

// export type RootState = ReturnType<typeof store.getState>;

// export type AppDispatch = typeof store.dispatch;
