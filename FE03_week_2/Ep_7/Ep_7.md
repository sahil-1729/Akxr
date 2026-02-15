- Useffect requires 2 things, callback function and a dependency array
- WHen we do not mention any dependency array, the useEffect will be called every time, my component will render
  - e.g you set a onclick fn, usme you added a set Fn, so whenever click event hoga, component is going to get rendered, so useEffect is going to get called
- If dependency array is empty, then useEffect will be called only when the component is rendered for first time
- If we include like variable, inside the depenedency array, then the useEffect will render, every time the variable changes or updated

- nvr use useState inside, if else condn, for loops, fn
- usestate are meant to be written in fnal components

- Whenever we see a function starting with "use" its a fckin hook

- Link is a component provided by react router dom
- when we make use of anchor tag, and click on anchor tag, it actually refresh the page
- When we use Link component, it refreshes the component, whereas in case of anchor tag, it reloads the page
- THere are 2 types of routing that I can have in application,
  - client side routing and server side routing
- sever side routing
  - in server side routing, when we click on anchor tag, it reloads the page, make a network call, gets the data of that html file and then shows the data
- client side routing
  - we don't make network call in client side routing, as all the components are already loaded when the page is loading for first time, and when go to any route, its just the components gets interchanged, and we don't make any network call

### React router

- dynamic route
  - const .... = createBrowserRouter([
    {
    path : ...,
    element: <...>,
    children : [
    {
    path: "/restaurants/:resId",
    element: <>
    },
    {
    path: "/contact",
    element: <>
    }
    ]
    }
    ])

  - :redId is dynamic

- Useparams
  - is a hook
  - const params = useParams()
