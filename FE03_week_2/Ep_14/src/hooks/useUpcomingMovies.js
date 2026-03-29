import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addUpcomingMovies } from "../utils/movieSlice";

const useUpcomingMovies = () => {

    const dispatch = useDispatch()
    // let user = useSelector((store) => console.log('movies ', store.movies));


    const getUpcomingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming', API_OPTIONS)

        const { results } = await data.json()
        // console.log("Upcoming ",results)

        dispatch(addUpcomingMovies(results))
    }

    useEffect(() => {
        getUpcomingMovies()
        // return () => {

        // };
    }, []);

}

export default useUpcomingMovies