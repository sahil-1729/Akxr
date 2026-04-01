import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { BG_URL } from '../utils/constants'

const GPTSearch = () => {
    return (
        <>
            <div className='fixed -z-10'>
                <img src={BG_URL} alt='not found' className='h-screen object-cover md:w-screen'/>
            </div>
            <div className='pt-[40%] md:p-0'>
                <GptSearchBar />
                <GptMovieSuggestion />
            </div>
        </>

    )
}

export default GPTSearch
