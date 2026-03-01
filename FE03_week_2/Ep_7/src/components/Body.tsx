import RestaurantCard from "./RestaurantCard"
import restoList from "../utils/restoList"
import { useEffect, useState } from "react"
import Shimmer from "./Shimmer"
import useOnlineStatus from "../utils/useOnlineStatus"

const Body = () => {
    let resto = restoList.data.data.cards[0].card.card.gridElements.infoWithStyle.restaurants

    // console.log(resto)

    const a = async () => {
        const data = await fetch("https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING")
        const jsData = await data.json()
        console.log(jsData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
        // const res = jsData.data.cards.filter((val: Object) => {

        //     const a = val.card.card.info
        //     if (a) {
        //         return true
        //     } else {
        //         return false
        //     }
        // }).map((val) => val.card.card.info)
        const res = jsData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants.map((val: Object): Object => val?.info)

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
    const [searchTxt, setSearchTxt] = useState("")

    const onlineStatus = useOnlineStatus()
    if (onlineStatus === false) {
        return <h1>Looks like you are offline! Please check your internet connection</h1>
    }

    // what is conditional rendering 
    if (restoState.length === 0) {
        return <Shimmer height="144px" />
    }

    return (<div className="body">

        <div className="filter">
            <div className="search">
                <input type="text" value={searchTxt} className="search-box" onChange={(e) => {
                    const res = e.target.value
                    setSearchTxt(res)
                }} />
                <button onClick={() => {
                    console.log(searchTxt)
                }}>Search</button>
            </div>
            <button onClick={() => {
                resto = resto.filter(val => val.info.avgRating > 4.2
                )
                setRestoState(resto)
                console.log(restoState)
                // here data is filtered, but UI is updated 
                // since list of resto is changed the UI should also been updated along with data changed 

            }} className="filter-btn">Top Rated Restaurants</button>
        </div>
        <div className="res-container flex flex-wrap">
            {/* resName and cuisine are props, we are passing props(properties) */}
            {/* <RestaurantCard resName="Meghana foods" cuisine="Biryani, North Indian, Asian" /> */}
            {restoState.map((value, key) => {
                console.log(value)
                return <RestaurantCard key={value.id}
                    id={value.id}
                    resName={value.name}
                    cuisine={value.cuisines.toString()}
                    rating={value.avgRating}
                    imgId={value.cloudinaryImageId}
                />
            })}

        </div>
    </div>)
}

export default Body