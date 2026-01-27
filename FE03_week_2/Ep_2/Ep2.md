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
