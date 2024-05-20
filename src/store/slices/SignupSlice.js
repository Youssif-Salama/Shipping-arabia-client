import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";
import { errorToaster, successToaster } from "../../utils/ReactHotToast";

const initialState = {
    data: null,
    error: null,
    loading: false
}

export const Signup = createAsyncThunk("user/Signup", async ({ endPoint, formData }) => {
    try {
        const result = await axios.post(`${import.meta.env.VITE_BASE_URL}${endPoint}`, formData)
        successToaster(result?.data?.message);
        return result;
    }
    catch (error) {
        errorToaster(error?.response?.data?.message)
        return error;
    }
})

export const SignupSlice = createSlice({
    name: "signup",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(Signup.pending, (state) => {
                state.loading = true
            })
            .addCase(Signup.fulfilled, (state, action) => {
                state.loading = false
                state.data = action.payload
            })
            .addCase(Signup.rejected, (state, action) => {
                state.loading = false
                state.error = action.error
            })
    }
})

export default SignupSlice.reducer;

