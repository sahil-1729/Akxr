import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from "./VideoTitle"
import VideoBackground from "./VideoBackground"
import { API_OPTIONS } from '../utils/constants'

const MainContainer = () => {
    const movies = useSelector((store) => store.movies?.nowPlayingMovies)
    const [firstMovie, setFirstMovie] = useState("")

    useEffect(() => {
        if (movies) {
            exec()
        }
    }, [movies, firstMovie])

    const exec = async () => {
        const backupData = await fetch(`https://api.themoviedb.org/3/movie/${movies[0].id}/videos`, API_OPTIONS)
        const backupJson = await backupData.json()
        const backupTrailerVideo = backupJson?.results.filter(val => {
            return val.type === "Trailer"
        })
        // console.log(backupTrailerVideo)
        if (!backupTrailerVideo.length > 0) {
            const a = movies[1]
            setFirstMovie(a)
            // console.log("executing ... ", firstMovie)
            return 
        }
        setFirstMovie(movies[0])
    }

    return (
        firstMovie && <div>
            <VideoTitle original_title={firstMovie.original_title} overview={firstMovie.overview}/>
            <VideoBackground movieId={firstMovie.id} />
        </div>
    )
}

export default MainContainer
