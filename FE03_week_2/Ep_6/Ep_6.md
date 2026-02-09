### Monolith architecture

- earlier when apps were developed they are made using monolith architecture
- Now people are moving towards micro services architecture

- micro services different services are made for each micro service, like seperate project for each service(like UI ke alag, backend ke liye alag project, authentication ke liye alag project) and these micro services combine together to make the app
  - Single responsibility principle, where every service has its own job, in micro services atleast
- also in monolith every developer would have to work into same project same repo
- IN our case, we are currenlty building UI micro service
- IN monolith architecture, we used to build everything under one tech stack, e.g java me we used to build UI, server, authentication everythin under java, in micro service, we could use different service
- currently we are building UI microservice using react
- Which tech stack to use? it all depends on use case
- now, how will the services talk to each other ?
  - each service is running on a particular port
  - like in our case our UI micro service is running on port 1234
  - so we can map the services ka port with the domain name
    - e.g
      :1234 - UI
      :1000 - Backend service
      :3000 - SMS
      so we bind, the ports with domain name like :1234 -> / | :1000 -> /api
      similarly if UI micro service wants to call SMS Backend service its gonna make use of /api or :1000

### What are the 2 approaches to show the data on UI

- First is to, when loading the page, make an API call and wait till you get the data, once recieved, show the data to the UI
  - load - API call - render
- Second is, load the page with whatever data you have, and then make an API call to get the data, and the render it
  - load - render - make API call - render

- Second approach is better and have UX
- also the render cycles in react is very fast, so no need to worry much about too much rendering

### UseEffect

- Its a hook, which is a simple js function
- it takes 2 arguements
  - callback fn(a fn calling other fn in fn)
  - dependency array
    - when its set as []
      - the functional component(the main fn) will get executed(completing the render cycle) and then then jaake callback fn(useEffect me jo hai) is executed( I HAVE TRIED AND TESTED, ITS TRUE)

### CORS

- our broswers block us, while we are making API call from one origin to another origin(2 different origin)

### While fetching data

- make use of optional chaining
  value?.name

### What is conditional rendering

- when we do rendering at particular condition, its conditional rendering

- when we use set fn in useState, react will re render the component
  - how does it re render? by using reconcillation algorithm

- if we declare "const" state variable, in useState, how is it that we are able to modify it? eventhough its declared constant
  - bc it creates like a snapshot, it doesn't actually modifies the value, like wo vapaas call karta hai component ko but with the new value
