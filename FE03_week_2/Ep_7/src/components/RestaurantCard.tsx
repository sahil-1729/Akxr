import { JSX } from "react"
import { LOGO_URL } from "../utils/constants"
import { Link } from "react-router-dom"

// we can write like this below
// const RestaurantCard = (props: { resName?: string, cuisine?: string }): JSX.Element => {

// if I want to pass information to Component, how do i do that? using props, props means properties 
// props are just normal arguements to function 

const styleCard = {
    // backgroundColor: "#f0f0f0"
}

// or we can write like this, destructuring it 
const RestaurantCard = ({ resName, cuisine, rating, id, imgId }: { resName?: string, cuisine?: string, rating?: number, id: number, imgId: string }): JSX.Element => {
    // props.resName
    // props.cuisine

    // https://media-assets.swiggy.com/swiggy/image/upload/

    const cuisineArr = cuisine?.split(',')

    return (<div className="res-card m-4 p-4 bg-[#f0f0f0f0] w-56 rounded-lg" style={styleCard}>

        <img className="res-logo rounded-md"
            src={`https://media-assets.swiggy.com/swiggy/image/upload/${imgId}`} alt="image nai mil rha " />
        <Link to={`restaurants/${id}`}>
            <h3 className="font-bold py-4 text-lg">
                {resName}
            </h3>

            <h4 className="text-wrap">
                {cuisineArr?.map(val => {
                    return val + ", "
                })}
            </h4>
        </Link>
        <h4>{rating} stars</h4>
        <h4>38 minutes</h4>
    </div>)
}


export default RestaurantCard