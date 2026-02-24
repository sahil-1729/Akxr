import React from "react"
// extends will let react know that i am writing a class based component 

// a class based component is a class which extends React.component and has a render method which will render JSX 
class UserClass extends React.Component {
    // this class will have a method, which will return JSX 

    // to recieve props we will make use of constructor 
    constructor(props) {
        super(props)
        console.log(props)

        // this.state = {
        //     count: 0
        // }
        // to add another state variable, we dont write like this 
        // this.state1 = {
        //     count: 0
        // }
        // instead we declare all the state variables in this.state itself
        this.state = {
            count: 0,
            count2: 8
        }
        console.log('constructor')

        this.state = {
            userInfo: {
                name: "Dummy",
                location: "Default "
            }
        }
    }

    // when we are loading the components of class, means we are creating instance of class 
    // to create state variables we declare it in constructor  

    render() {
        // const { name } = this.props
        // const { count, count2 } = this.state
        const { name, login } = this.state.userInfo
        console.log("render called ")
        return (<div>
            Userclass <br />
            {name}
            <br />
            {login}
            <button onClick={() => {
                // we cannot update the state variable like this, never ever do it like this  
                // count = count + 1
                // this.setState({
                //     count: count + 1
                // })

                // when updating multiple state varialbe do it as once 
                // this.setState({
                //     count: count + 1,
                //     count2: count2 + 1
                // })

                // so, jo bhi state variable we mention here, voh state variable only will get updated, other state variable ko touch bhi nai karega, this.setState
                // this.setState({
                //     count: count + 1
                // })

                // Mounting = First time a component is added to the DOM
            }}>Count increaset</button>
            {/* {count2} */}
        </div>)
    }

    async componentDidMount(): void {
        // this fn called after the constructor, then the render method are called 
        console.log("component mount ")
        const data = await fetch("https://api.github.com/users/sahil-1729")
        const json = await data.json()
        console.log(json)

        this.setState({
            userInfo: json
        })
    }
}

export default UserClass