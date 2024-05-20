import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    refreshOnSendMessage: 0
}

const GlobalSlice = createSlice({
    name: "global",
    initialState,
    reducers: {
        setRefreshOnSendMessage: (state, action) => {
            state.refreshOnSendMessage = action.payload
        }
    }
})

export const { setRefreshOnSendMessage } = GlobalSlice.actions
export default GlobalSlice.reducer    