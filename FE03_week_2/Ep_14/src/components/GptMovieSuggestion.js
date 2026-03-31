import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const GptMovieSuggestion = () => {

  const gpt = useSelector(store => store.gpt)
  const { movieResults, movieNames } = gpt
  console.log(movieNames, movieResults)

  if (!movieNames) {
    return
  }

  return (
    <div className="bg-black/90 text-white m-4 p-6 rounded-xl shadow-xl backdrop-blur-sm">
      {movieNames.map((movieTitle, index) => {
        return <MovieList key={movieTitle} title={movieTitle} moviesList={movieResults[index]} />
      })}
    </div>
  )
}

export default GptMovieSuggestion
