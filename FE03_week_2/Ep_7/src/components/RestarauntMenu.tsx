import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addItem } from "../utils/cartSlice";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState([])

    const { resId } = useParams();

    const dispatch = useDispatch()

    const handleAddItem = () => {
        dispatch(addItem("abcd"))
    }


    useEffect(() => {
        fetchMenu()
    }, [])
    const fetchMenu = async () => {
        const data = await fetch(`https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId=${resId}`)
        const json = await data.json()
        console.log(json.data)
        setResInfo(json.data.cards)
        console.log(resInfo)
    }
    if (resInfo.length === 0) {
        return <></>
    }
    const { name, cuisines, city, avgRating, cloudinaryImageId, costForTwo } = resInfo[2]?.card?.card?.info
    const { categories } = resInfo[4]?.groupedCard?.cardGroupMap.REGULAR?.cards[7].card.card
    console.log(categories)
    return (
        <div>
            <img src={`https://media-assets.swiggy.com/swiggy/image/upload/${cloudinaryImageId}`} />
            <h1>
                {name}
            </h1>
            <h5>
                {cuisines.join(", ")}
            </h5>
            <h1>
                {city}
            </h1>
            <h1>
                {avgRating}
            </h1>
            <h1>
                {costForTwo}
            </h1>
            <div>
                <button className="p-2 m-4 bg-green-100" onClick={() => handleAddItem()}>
                    Add Item
                </button>
            </div>
            {categories[0].itemCards.map(val => {
                const { name, id } = val.card.info
                console.log(id)
                return (<h3 key={id}>{name}</h3>)
            })}
        </div>
    )
}

export default RestaurantMenu