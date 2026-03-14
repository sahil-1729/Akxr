import { fireEvent, render, waitFor } from "@testing-library/react"
import store from "../../utils/store"
import { Provider } from "react-redux"
import { StaticRouter } from "react-router-dom/server"
import Body from "../Body.tsx"
import { REST_DATA } from "../../utils/constants.js"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(REST_DATA)
        }
    })
})

test("Shimmer should load on homepage", () => {
    const body = render(<StaticRouter>
        <Provider store={store}>
            <Body />
        </Provider>
    </StaticRouter>)
    // console.log(body)
    const shimmer = body.getByTestId("shimmer")

    // to check the children of shimmer 
    // shimmer.children 

    // wait till you get search btn on screen, add async for it to work
    // await waitFor(()=>expect(screen.getByTestId("search-btn"))) 

    // check if the no of items is matching or not
    // expect(restoList.children.length).toBe(10)

    // we can also execute events in jest using fireEvent
    // fireEvent.click; fireEvent.change(input, { target: { value: 1 } })
    // const search-btn = body.getByTestId("btn")
    // fireEvent.click(search-btn)

    expect(shimmer.innerHTML).toBe("Loading")
    // console.log("SHIMER ",shimmer.innerHTML)
})