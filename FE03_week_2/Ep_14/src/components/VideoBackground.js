import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from '../utils/movieSlice';

const VideoBackground = ({ movieId }) => {

  const dispatch = useDispatch()
  const trailerId = useSelector(store => store.movies?.trailerVideo)
  console.log(trailerId["key"])
  const getMovieVideos = async () => {

    const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`, API_OPTIONS)
    const json = await data.json()

    const trailerVideo = json?.results.filter(val => {
      return val.type === "Trailer"
    })
    const trailer = trailerVideo ? trailerVideo[0] : json.results[0]
    console.log(trailerVideo[0])
    dispatch(addTrailerVideo(trailer))
  }

  useEffect(() => {
    getMovieVideos()
  }, [])

  return (
    <div>
      <iframe width="560" height="315" src={`https://www.youtube.com/embed/AFuE1LRxm80?si=${trailerId ? trailerId : 1}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" ></iframe>
    </div>
  )
}

export default VideoBackground