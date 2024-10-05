import { configureStore } from '@reduxjs/toolkit'
import {usersReducer} from "./slices/usersSlice.ts";
import {modalReducer} from "./slices/modalSlice.ts";

export const store = configureStore({
    reducer: {
        users: usersReducer,
        modal:modalReducer
    },
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware()
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch