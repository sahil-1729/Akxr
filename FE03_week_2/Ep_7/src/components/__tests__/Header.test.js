import Header from "../Header.tsx"
import { render } from "@testing-library/react"
import store from "../../utils/store"
import { Provider } from "react-redux"
import { StaticRouter } from "react-router-dom/server"

test('Header should load on rendering', () => {

    // this will create a small environment using jsdom 
    const header = render(
        <StaticRouter>
            <Provider store={store}> <Header /> </Provider>
        </StaticRouter>
    )

    // yahape jo print hoga is the actual virtual DOM element 
    // console.log(header)


    const logo = header.getAllByTestId("logo")
    // here also virtual DOM element is printed 
    console.log('LOGO ', logo[0].src)

    expect(logo[0].src).toBe("https://cdn.dribbble.com/userupload/16778067/file/original-d75cb39663149843b1572e4cc64681fe.jpg?resize=400x0")
    //   load Header 
    // render the header 
    // check if logo is missing 
})

test('Header should have 0 cart items on rendering', () => {

    // this will create a small environment using jsdom 
    const header = render(
        <StaticRouter>
            <Provider store={store}> <Header /> </Provider>
        </StaticRouter>
    )

    // yahape jo print hoga is the actual virtual DOM element 
    // console.log(header)


    const cart = header.getByTestId("cart")
    // here also virtual DOM element is printed 
    console.log('cart ',cart.innerHTML)

    expect(cart.innerHTML).toBe("Cart - 0")
    //   load Header 
    // render the header 
    // check if logo is missing 
})