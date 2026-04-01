import React from 'react'
import { IMG_CDN } from '../utils/constants'

const MovieCard = ({ posterPath }) => {

  if (!posterPath) {
    return
  }

  return (
    <div className='md:w-48 w-36 pr-4'>
      <img src={IMG_CDN.replace("/{POSTER_PATH}", posterPath)} alt='movie card' />
    </div>
  )
}

export default MovieCard
