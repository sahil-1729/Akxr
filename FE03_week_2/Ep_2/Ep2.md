- TO make project, to go for prodn, we need to do a lot of optimization before we make the code ready for production
- Alot of other packages are used extensively to make the project run faster,

### NPM

- so npm is anything but NODE PACKAGE MANAGER
  - npm doesn't have a full form
  - it manages packages
- npm is a package manager, helps in managing packages
- all the libraries that we need comes from npm
- so when we use "npm init" command
  - what happens is package.json file is created
  - package.json is the configuration for npm
    - it tracks the list of the packages and konse version of packages are installed in project
  - our project is depended on lot of packages, those packages are dependencies

- So when we have HTML, CSS, JS files, we need to combine all of them, to go into production, for that we need to make it optimized, clean before going to prodn
  - so in order to do that, we make use of bundler
  - so things like webpack, parcel, vite - these are bundler

# Bundler

- it bundles the files, packages the files, so that it can be shipped to prodn
- in create react app, it makes use of bundler like webpack, babel
- we install packages usign cmd
  - npm install <PACKAGE NAME>

- while installing, there are 2 types of depenedencies, that we can install
  - one is dev dependency
    - these are those dependencies, that required during development purposes
  - one is normal dependency
    - normal dependencies are those, which are required during production also
    - so when we use cmd npm install -D parcel
      - here we are instructing npm(the package manager) to install parcel as dev dependency
      - we are actually fetching parcel package from npm itself

  "devDependencies": {
  "@types/react": "^19.0.0",
  "@types/react-dom": "^19.0.0",
  "parcel": "^2.14.0"
  }

- what does "^" mean here?
  - "^" means ki,if koi bhi minor update agar aata lets say in react, then it automatically get upgraded to that minor version.
  - apart from "^" we can also use "~"
    - this indicates that koi bhi major version ayega toh, it gets upgraded to the major version
- package-lock.json keeps track of all the exact version of the packages that are installed
- package.json will keep the approx version of the package like ^2.3.6, whereas package-lock.json will have exact version of the package

### What's node modules?

- node_modules contains all the packages or dependencies we installed from npm
- its sort of like a db where all our installed packages exist
- so when i installed parcel, using npm, only parcel should have been installed in the node_modules right? why other files getting installed?
  - because when we installed parcel, parcel will have its own dependencies, in order to run parcel, so other dependencies will also get installed
  - this is called transitive dependency
  - since every dependencies will have their own dependencies, they will have their own package.json

  - we don't need to push node_modules, into repo, as they are very huge and also we can re install node_modules using package.json

### npx

- when we ran cmd npx parcel index.html
- npm means installing the package, npx means executing the package
- so when we ran npx parcel, we actually execute the package

- using CDN links is not the right way to use react in project
- here's the steps we took
- created HTML file, used CDN links to use react
- then installed parcel, use npx parcel index.html to execute the package
- then removed the cnd links and run file using parcel, shows react not found,
- then npm install react and use imports to import react in app.js, shows error, we cannot use import or export in client browser
- as normal broswer script cannot have import or export, and we used import or export in normal .js file
- so we need to mention in HTML file, the script we have referenced is of type="module"
<script type="module" src="index.tsx"></script>
- so after mentioning above, and we execute npx parcel index.html, and when me make changes in file, it gets immediately reflected, without need of writing npx parcel index.HTML every time making change

So how is it happening?

### parcel

- features?
  - hot module replacement
    - how does HMR work?
      - it uses file watching algorithm
  - local server
  - dev build environment
  - it also does caching, jiske vajah se, every time we make changes and it gets reflected more quickly than before bc of caching, which leads to buidl faster
  - its a bundler so obv bundling of files
  - image optimization
  - consistent hashing
    - it generates unqie name for the html, css, js files, so that hash only changes when the files content changes
  - differential bundling
    - it provides other bundlers for different apps, lets say for older browsers
  - also allows to host on https apart from http
  - Tree shaking
    - remove unused code

- there are so many things other than react, which makes the react app fast

- npx parcel build index.html
  - to build production ready file

### browserList

- its a package used to support the web page for older broswers
- "browsersList": ["last 2 versions"]
- this ensures ki every browser ke atleast 2 version older tak 100% chalega, it adds more code to add older browser support
- use case - governement website
