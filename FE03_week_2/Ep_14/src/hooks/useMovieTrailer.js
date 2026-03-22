
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { API_OPTIONS } from '../utils/constants'
import { addTrailerVideo } from '../utils/movieSlice'

const useMovieTrailer = (movieId) => {

    const dispatch = useDispatch()
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
}

export default useMovieTrailer