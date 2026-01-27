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
