import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState([])

    const { resId } = useParams();
    console.log(resId);

    useEffect(() => {
        fetchMenu()
    }, [])
    const fetchMenu = async () => {
        const data = await fetch(`https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId=${resId}`)
        const json = await data.json()
        console.log(json)
        setResInfo(json.data.cards)
        console.log(resInfo)
    }
    if (resInfo.length === 0) {
        return <></>
    }
    const { name, cuisines } = resInfo[2]?.card?.card?.info
    const { categories } = resInfo[4]?.groupedCard?.cardGroupMap.REGULAR?.cards[7].card.card
    console.log(categories)
    return (
        <div>
            <h1>
                {name}
            </h1>
            <h5>
                {cuisines.join(", ")}
            </h5>
            {categories[0].itemCards.map(val => {
                const { name, id } = val.card.info
                console.log(id)
                return (<h3 key={id}>{name}</h3>)
            })}
        </div>
    )
}

export default RestaurantMenu