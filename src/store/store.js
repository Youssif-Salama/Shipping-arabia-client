import { configureStore } from "@reduxjs/toolkit";
import LoginSlice from "./slices/LoginSlice";
import SignupSlice from "./slices/SignupSlice";
import GlobalSlice from "./slices/GlobalSlice";

export const store = configureStore({
    reducer: {
        LoginReducer: LoginSlice,
        SignupReducer: SignupSlice,
        GlobalReducer: GlobalSlice
    }
})