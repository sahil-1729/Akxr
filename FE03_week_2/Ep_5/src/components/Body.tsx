import RestaurantCard from "./RestaurantCard"
import restoList from "../utils/restoList"

const Body = () => {
    let resto = restoList.data.data.cards[0].card.card.gridElements.infoWithStyle.restaurants

    console.log(resto)

    return (<div className="body">
        <div className="search">
            Search
        </div>
        <div className="filter">
            <button onClick={() => {
                resto = resto.filter(val => val.info.avgRating > 4.5
                )
                console.log(resto)
                // here data is filtered, but UI is updated 

            }} className="filter-btn">Top Rated Restaurants</button>
        </div>
        <div className="res-container">
            {/* resName and cuisine are props, we are passing props(properties) */}
            <RestaurantCard resName="Meghana foods" cuisine="Biryani, North Indian, Asian" />
            {resto.map((val, key) => {

                return <RestaurantCard key={key} resName={val.info?.name} cuisine={val.info.cuisines.toString()} rating={val.info.avgRating} />
            })}

        </div>
    </div>)
}

export default Body