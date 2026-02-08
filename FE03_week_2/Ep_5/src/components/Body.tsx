import RestaurantCard from "./RestaurantCard"

const Body = () => {
    return (<div className="body">
        <div className="search">
            Search
        </div>
        <div className="res-container">
            {/* resName and cuisine are props, we are passing props(properties) */}
            <RestaurantCard resName="Meghana foods" cuisine="Biryani, North Indian, Asian" />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />

        </div>
    </div>)
}

export default Body