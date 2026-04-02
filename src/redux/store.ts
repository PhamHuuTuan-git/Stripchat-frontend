import sidebarSlice from "./slices/sidebar.slice";
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/user.slice";

export const store = configureStore({
    reducer: {
        sidebar: sidebarSlice.reducer,
        authen: userSlice.reducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
