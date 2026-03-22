import React from 'react'
import { IMG_CDN } from '../utils/constants'

const MovieCard = ({ posterPath }) => {
  return (
    <div>
      <img src={IMG_CDN.replace("/{POSTER_PATH}", posterPath)} alt='movie card' />
    </div>
  )
}

export default MovieCard
