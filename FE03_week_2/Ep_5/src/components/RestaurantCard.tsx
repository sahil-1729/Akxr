// we can write like this below
// const RestaurantCard = (props: { resName?: string, cuisine?: string }): JSX.Element => {

// if I want to pass information to Component, how do i do that? using props, props means properties 
// props are just normal arguements to function 

const styleCard = {
    // backgroundColor: "#f0f0f0"
}

// or we can write like this, destructuring it 
const RestaurantCard = ({ resName, cuisine }: { resName?: string, cuisine?: string }): JSX.Element => {
    // props.resName
    // props.cuisine

    return (<div className="res-card" style={styleCard}>
        <img className="res-logo"
            src="https://images.pexels.com/photos/27860371/pexels-photo-27860371/free-photo-of-street-food.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=300" />
        <h3>
            {resName}
        </h3>
        <h4>{cuisine}</h4>
        <h4>4.4 stars</h4>
        <h4>38 minutes</h4>
    </div>)
}


export default RestaurantCard