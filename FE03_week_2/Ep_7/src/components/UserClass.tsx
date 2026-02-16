import React from "react"
// extends will let react know that i am writing a class based component 

// a class based component is a class which extends React.component and has a render method which will render JSX 
class UserClass extends React.Component {
    // this class will have a method, which will return JSX 

    // to recieve props we will make use of constructor 
    constructor(props) {
        super(props)
        console.log(props)
    }

    render() {
        const { name } = this.props
        return (<div>
            Userclass <br />
            {name}
        </div>)
    }
}

export default UserClass