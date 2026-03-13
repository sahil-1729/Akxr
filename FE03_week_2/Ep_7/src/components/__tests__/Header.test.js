import Header from "../Header.tsx"
import {render} from "@testing-library/react"

test('Header should load on rendering', () => {
  
    // this will create a small environment using jsdom 
    const header = render(<Header/>)

    console.log(header)

//   load Header 
// render the header 
// check if logo is missing 
})
