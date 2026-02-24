### class based components

- they are the old way of writing components
- loading and mounting the component one and same thing
- so in given e.g
  - const About = () => {
    return (<div>
    <h1>
    About
    </h1>
    <User />
    <UserClass name="abc" />
    </div>)
    }
  - the code is executed line by line, when it is mounted, when it reaches the Userclass component, then userclass component ka ek instance is created, meaning constructor is called, then jaake render is called
- also parent component are called first, then jaake child component are called, so parent constructor, parent render are called, then jaake child constructor, child render

- componentDidMount(): void {
  // this fn called only after the constructor, then the render method, and then jaake componentDidMount are called
  console.log("component mount ")
  }
- if parent and child component both have componentDidMount fn, then this is the order of the fn calling
  - parent constructor -> parent render -> child constructor -> child render method -> child didcomponentmount method -> parent didcomponentmount method

- componentDidMount is used to make API calls
- functional comopnnet we used to use useEffect to make API calls, bc after rendering the UI completely, then jaake useEffect used to get executed

- react lifecycle method diagram - READ
- 1:20:00 se start watch again
  ![alt text](image.png)
- componentDidUpdate
- till 2:00:00, watch the additional 46 minutes
