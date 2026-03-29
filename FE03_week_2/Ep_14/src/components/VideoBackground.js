import React from 'react'
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer"

const VideoBackground = ({ movieId }) => {

  const trailerId = useSelector(store => store.movies?.trailerVideo?.key)
  useMovieTrailer(movieId)

  // console.log('movie Id ', movieId, " ", trailerId)

  return (
    <div className='w-screen'>
      <iframe
        className='w-screen aspect-video'
        src={`https://www.youtube.com/embed/${trailerId}?si=${trailerId}?&autoplay=1&mute=1&loop=1`} title="YouTube video player"
        // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" ></iframe>
    </div>
  )
}

export default VideoBackground