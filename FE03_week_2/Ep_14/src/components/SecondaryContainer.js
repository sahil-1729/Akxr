import React from 'react'
import MovieList from "../components/MovieList"
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
    const moviesList = useSelector(store => store.movies)
    // console.log(moviesList)

    return (
        moviesList
        &&
        <div className='bg-black'>
            <div className='-mt-64 pl-12 relative z-20'>
                <MovieList title={"Now Playing"} moviesList={moviesList?.nowPlayingMovies} />
                <MovieList title={"Trending"} moviesList={moviesList?.popularMovies} />
                <MovieList title={"Popular"} moviesList={moviesList?.nowPlayingMovies} />
                <MovieList title={"Upcoming Movies"} moviesList={moviesList?.nowPlayingMovies} />
            </div>
        </div>

    )
}

export default SecondaryContainer
