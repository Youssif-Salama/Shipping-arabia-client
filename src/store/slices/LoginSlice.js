import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";
import { errorToaster, successToaster } from "../../utils/ReactHotToast";

const initialState = {
    data: null,
    error: null,
    loading: false
}

export const Login = createAsyncThunk("user/login", async ({ endPoint, formData }) => {
    try {
        const result = await axios.post(`${import.meta.env.VITE_BASE_URL}${endPoint}`, formData)
        successToaster(result?.data?.message);
        localStorage.setItem("currentUserToken", result?.data?.token)
        return result;
    }
    catch (error) {
        errorToaster(error?.response?.data?.message)
        return error;
    }
})

export const LoginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(Login.pending, (state) => {
                state.loading = true
            })
            .addCase(Login.fulfilled, (state, action) => {
                state.loading = false
                state.data = action.payload
            })
            .addCase(Login.rejected, (state, action) => {
                state.loading = false
                state.error = action.error
            })
    }
})

export default LoginSlice.reducer;

