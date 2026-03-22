import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, moviesList }) => {
  console.log(moviesList)

  return (
    <div>

      <div>
        <h1>
          {title}
        </h1>
        <div>
          {moviesList.map((movie)=>{
            return <MovieCard key={movie.id} posterPath={movie.poster_path} />
          })}
        </div>
      </div>

    </div>
  )
}

export default MovieList
