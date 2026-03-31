import React, { lazy, useRef } from 'react'
import lang from '../utils/langConstants'
import { useDispatch, useSelector } from 'react-redux'
import { generateText } from '../utils/gemini'
import { API_OPTIONS } from '../utils/constants'
import { addGptMovieResult } from '../utils/gptSlice'

const GptSearchBar = () => {

    const langKey = useSelector(store => store.config.lang)
    const dispatch = useDispatch()

    const getMovieDetail = async (movie) => {
        console.log(movie)
        const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`, API_OPTIONS)
        // console.log(data)

        const result = await data.json()
        // console.log(result)

        return result.results
    }

    const searchTxt = useRef(null)
    const handleGPTsearch = async () => {
        console.log(searchTxt.current.value)
        const result = await generateText(searchTxt.current.value)
        console.log(result.recommendations)

        const movieTitleArr = result.recommendations.map(val => val.title)

        const promiseArr = result.recommendations.map((movie) => getMovieDetail(movie.title))
        const tmdbResult = await Promise.all(promiseArr)
        console.log(tmdbResult)

        dispatch(addGptMovieResult({ movieNames: movieTitleArr, movieResults: tmdbResult }))

    }

    return (
        <div className='pt-[10%]  flex justify-center'>
            <form className='bg-black grid grid-cols-12 w-1/2' onSubmit={(e) => e.preventDefault()}>
                <input ref={searchTxt} type='text' className='p-4 m-4 col-span-9' placeholder={lang[langKey].gptSearchPlaceholder} />
                <button className='py-2 px-4 bg-red-700 text-white rounded-lg col-span-3 m-4' onClick={handleGPTsearch} >{lang[langKey].search}</button>
            </form>
        </div>
    )
}

export default GptSearchBar
