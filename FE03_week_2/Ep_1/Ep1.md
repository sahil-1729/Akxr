### What's parcel?

- its a web application bundler
- It handles asset bundling
  - HTML, CSS, JS, images, etc
- transpilation
- hot module replacement
  - its a feature which automatically updates JS modules, CSS or another assets in running application in real time, without need of full page reload

### What's difference transpiling and compiling

- Compilers
  - compiling is taking a source code in one programming language, and converting into output file in some other language
  - In practice we mostly use this term to describe a compiler such as gcc which takes in C code as input and produces a binary executable (machine code) as output.
- Transpilers
  - Transpilers are a subset of compilers
  - They are source to source compilers, they take the source code in one lang and convert into another source code file in some other language
  - The output is understandable by human
  - some example of traspiler is Babel
    - It transpiles ES6 code into ES5
      - where ES6 and ES5 are different versions or generations of js

(Source)[https://stackoverflow.com/questions/44931479/compiling-vs-transpiling]

- Write notes, handwritten on every concept mentioned
- pause the video and DO the exact code mentioned in the video, on your own
- maintain github repo

### CDN

- cdn is a group of servers which caches content like videos, images and HTML files
- they do this to reduce the web page load time and reduce latency

- We can include the react in HTML file, how?
  - we can do this using CDN
    <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
    <script src="https://unpkg.com/@babel/standalone@7.10.3/babel.min.js" crossorigin></script>
  - by including these links in the HTML file, we can use react in HTML
  - basically we are injecting these links into the HTML file
  - these links contain the source code of react, which is at the end, just js
  - that is why react is nothing just a js library
  - What happened when we inject this code in the HTML file in our project ?
    - so when we look at the dev tools in browser and type "react", we can see the list of fns that react provides, in the console itself
  - Why there are 3 files to include? why not just 1 file?
    - react.development.js contains the core react
    - whereas the react-dom.development.js contains the dom operations of react, where we could perform the dom operations
    - The reason the files like react.development.js and react-dom.development.js are different, bc react is not just used on browser, but on mobile and various other devices, and react dom is used specifically on browser purpose
- React is nothing but a js library

### Using react in HTML file

- to create element using react, we use React.createElement()
  - .createElement takes 3 arguements
    - first is the tag name
    - the obj
    - the content that we want to insert
  - now that we have created the element, we want to insert the element
    - for this, we need to mention react, ki the root element, from where we would perform the dom manipulation
    - For dom operations, we make use of ReactDom not React
      - const root = ReactDOM.createRoot(document.createElementById("root"))
      - root is the place from where all the operations will be performed
      - root.render(<THE NAME OF THE ELEMENT>)
        - this method is actually putting the element into the DOM
