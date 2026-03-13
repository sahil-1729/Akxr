import Header from "../Header.tsx"
import {render} from "@testing-library/react"
import store from "../../utils/store"
import { Provider } from "react-redux"
import {StaticRouter} from "react-router-dom/server"

test('Header should load on rendering', () => {
  
    // this will create a small environment using jsdom 
    const header = render(
    <StaticRouter>
    <Provider store={store}> <Header  /> </Provider>
    </StaticRouter>
)

    console.log(header)

//   load Header 
// render the header 
// check if logo is missing 
})
