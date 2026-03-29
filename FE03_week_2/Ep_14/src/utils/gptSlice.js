import { createSlice } from "@reduxjs/toolkit";


const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGPTSearch: true
    },
    reducers: {
        toggleGPTSearchView: (state) => {
            state.showGPTSearch = !state.showGPTSearch
            console.log(state.showGPTSearch)
        },
    }
})

export const { toggleGPTSearchView } = gptSlice.actions

export default gptSlice.reducer