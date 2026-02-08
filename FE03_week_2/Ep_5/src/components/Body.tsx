import RestaurantCard from "./RestaurantCard"
import restoList from "../utils/restoList"
import { useEffect, useState } from "react"

const Body = () => {
    let resto = restoList.data.data.cards[0].card.card.gridElements.infoWithStyle.restaurants

    console.log(resto)
    useEffect(() => {
        console.log("I come first")
    }, [])
    const [restoState, setRestoState] = useState(resto)

    return (<div className="body">
        <div className="search">
            Search
        </div>
        <div className="filter">
            <button onClick={() => {
                resto = resto.filter(val => val.info.avgRating > 4.2
                )
                setRestoState(resto)
                console.log(restoState)
                // here data is filtered, but UI is updated 
                // since list of resto is changed the UI should also been updated along with data changed 

            }} className="filter-btn">Top Rated Restaurants</button>
        </div>
        <div className="res-container">
            {/* resName and cuisine are props, we are passing props(properties) */}
            <RestaurantCard resName="Meghana foods" cuisine="Biryani, North Indian, Asian" />
            {restoState.map((val, key) => {

                return <RestaurantCard key={key} resName={val.info?.name} cuisine={val.info.cuisines.toString()} rating={val.info.avgRating} />
            })}

        </div>
    </div>)
}

export default Body