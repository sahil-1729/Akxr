import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {

    const dispatch = useDispatch()
    // let user = useSelector((store) => console.log('movies ', store.movies));


    const getNowPlaying = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS)

        const { results } = await data.json()
        // console.log(results)

        dispatch(addNowPlayingMovies(results))
    }

    useEffect(() => {
        getNowPlaying()
        // return () => {

        // };
    }, []);

}

export default useNowPlayingMovies