- What you are going to build
- Whats the process of you building it

- create UI

- Conflict driven UI
  - e.g
    - when you open swiggy and see list of catalogs, at mumbai location let's say you see chinese cuisine catalog, birayni catalog,
    - but if you are in different location, chances are that, you see different catalogs not same as mumbai location
    - this is where, conflict driven UI comes in
      - where we design our interface based on the data, i.e based on the data the UI gets changed
      - all the UI is driven by conflict(the data)
      - we are controlling the layout of UI based on the data
      -

- All big companies put their images on cdn

- use optional chaining
  resData?.data while geting data from API
- Destructuring
  const {avgRating, cusines} = resData?.data

- for unique prop error, and while using map method
  add key attribute ALWAYS

- Why are keys required?
  - Let say there are list of restaurant cards that are to be rendered in the page, and they are rendered
  - now suppose theres a new restaurent card that has to be rendered, react will re render all the cards, just to re render that restaurant card, bc it doesn't know which is the new restaurant card being rendered
  - but if each of them is being given new id, and new resto card is given id, then react knows which is the new id, and it will render only the newly added card, not the entire list of cards, this helps in improving performance
  - react says to not use index as keys in map method, bc its not a recommended practice,
  - unique keys >> index as key >> not using keys
