import RestaurantCard from "./RestaurantCard"
import restoList from "../utils/restoList"
import { useEffect, useState } from "react"
import Shimmer from "./Shimmer"

const Body = () => {
    let resto = restoList.data.data.cards[0].card.card.gridElements.infoWithStyle.restaurants

    // console.log(resto)

    const a = async () => {
        const data = await fetch("https://www.swiggy.com/mapi/restaurants/list/v5?lat=19.07480&lng=72.88560&collection=83637&tags=layout_CCS_Burger&sortBy=&filters=&type=rcv2&offset=0&carousel=true&third_party_vendor=1")
        const jsData = await data.json()
        // console.log(jsData)
        const res = jsData.data.cards.filter((val: Object) => {

            const a = val.card.card.info
            if (a) {
                return true
            } else {
                return false
            }
        }).map((val) => val.card.card.info)

        setRestoState(res)
        console.log('the data ', res)
        // return jsData
    }
    useEffect(() => {
        // console.log("I come first")
        a()
        // console.log('promise ', b)
    }, [])

    const [restoState, setRestoState] = useState([])

    // what is conditional rendering 
    if (restoState.length === 0) {
        return <Shimmer height="144px" />
    }

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
            {/* <RestaurantCard resName="Meghana foods" cuisine="Biryani, North Indian, Asian" /> */}
            {restoState.map((value, key) => {

                return <RestaurantCard key={value.id} resName={name}
                    cuisine={value.cuisines.toString()}
                    rating={value.avgRating} />
            })}

        </div>
    </div>)
}

export default Body