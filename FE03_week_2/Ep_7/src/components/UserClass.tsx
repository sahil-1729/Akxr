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
    }

    // when we are loading the components of class, means we are creating instance of class 
    // to create state variables we declare it in constructor  

    render() {
        const { name } = this.props
        const { count, count2 } = this.state
        return (<div>
            Userclass <br />
            {name}
            <br />
            {count}
            {count2}
        </div>)
    }
}

export default UserClass