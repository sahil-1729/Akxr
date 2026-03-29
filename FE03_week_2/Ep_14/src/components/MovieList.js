import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, moviesList }) => {
  // console.log(moviesList)

  if (moviesList === null) {
    return
  }
  return (
    moviesList
    &&
    <div className='flex flex-col px-6 w-full'>
      <h1 className='text-3xl py-4 text-white'>
        {title}
      </h1>

      <div className='flex overflow-x-scroll scrollbar-hide [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]'>
        <div className='flex'>
          {moviesList.map((movie) => {
            return <MovieCard key={movie.id} posterPath={movie.poster_path} />
          })}
        </div>
      </div>

    </div>
  )
}

export default MovieList
