import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from "./VideoTitle"
import VideoBackground from "./VideoBackground"

const MainContainer = () => {
    const movies = useSelector((store) => store.movies?.nowPlayingMovies)

    if (movies === null) {
        return
    }
    const firstMovie = movies[0]
    console.log('first movie ', firstMovie)

    const { original_title, overview } = firstMovie
    
    return (
        <div>
            <VideoTitle original_title={original_title} overview={overview}/>
            <VideoBackground />
        </div>
    )
}

export default MainContainer
