import React from 'react'
import MovieList from "../components/MovieList"
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
    const moviesList = useSelector(store => store.movies?.nowPlayingMovies)
    // console.log(moviesList)

    return (
        <div>
            <MovieList title={"Now Playing"} moviesList={moviesList} />
        </div>
    )
}

export default SecondaryContainer
