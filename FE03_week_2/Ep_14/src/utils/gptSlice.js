import { createSlice } from "@reduxjs/toolkit";


const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGPTSearch: true,
        movieNames: null,
        movieResults: null
    },
    reducers: {
        toggleGPTSearchView: (state) => {
            state.showGPTSearch = !state.showGPTSearch
            console.log(state.showGPTSearch)
        },
        addGptMovieResult: (state, action) => {
            const { movieNames, movieResults } = action.payload
            state.movieNames = movieNames
            state.movieResults = movieResults
        }
    }
})

export const { toggleGPTSearchView, addGptMovieResult } = gptSlice.actions

export default gptSlice.reducer