import React from 'react'
import MovieList from "../components/MovieList"
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
    const moviesList = useSelector(store => store.movies?.nowPlayingMovies)
    // console.log(moviesList)

    return (
        moviesList
        &&
        <div className='bg-black'>
            <div className='-mt-40 pl-12 relative z-20'>
                <MovieList title={"Now Playing"} moviesList={moviesList} />
                <MovieList title={"Trending"} moviesList={moviesList} />
                <MovieList title={"Popular"} moviesList={moviesList} />
                <MovieList title={"Upcoming Movies"} moviesList={moviesList} />
            </div>
        </div>

    )
}

export default SecondaryContainer
