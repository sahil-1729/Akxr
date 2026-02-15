import { useEffect } from "react"
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
    const { id } = useParams();
    console.log(id);

    useEffect(() => {
        fetchMenu()
    }, [])
    const fetchMenu = async () => {
        const data = await fetch("https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId=766502")
        const json = await data.json()
        console.log(json)
    }
    return (
        <div>
            <h1>
                Name of Resto
            </h1>
        </div>
    )
}

export default RestaurantMenu