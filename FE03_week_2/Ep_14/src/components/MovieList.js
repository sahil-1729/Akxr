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
    <div className='flex flex-col px-6 '>
      <h1 className='text-3xl py-4 text-white'>
        {title}
      </h1>
      <div className='flex flex-row'>
        {moviesList.map((movie) => {
          return <MovieCard key={movie.id} posterPath={movie.poster_path} />
        })}
      </div>
    </div>
  )
}

export default MovieList
