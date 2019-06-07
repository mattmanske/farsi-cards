# Farsi Falsh Card Application

This React based webapp leverages several frameworks/libraries *(not an exhaustive list)*:

- [React](https://facebook.github.io/react/) • Declarative UI component library
- [Redux](http://redux.js.org/) • Global application state management
- [Redux-Saga](https://redux-saga.js.org/) • Asynchronous side-effect management
- [Styled Components](https://www.styled-components.com/) • Component styling library
- [Lodash](https://lodash.com/) • JS utility function library
- [Jest](https://facebook.github.io/jest/) • JS testing framework
- [Enzyme](http://airbnb.io/enzyme/) • JS testing utility

## Local Setup

These are all the pertinent scripts for running the application locally. I prefer to use `yarn` but you can replace it in all of the following instructions with `npm` without issue.

#### Install Paackages
Will install all required NPM packages.
```
yarn install
```

#### Run Development Server
Starts a development server at `http://localhost:3000` and will live-replace any code changes w/o requiring page reload.
```
yarn dev
```

####  Running Tests
This parses all test files and runs them. It should also generate a coverage report.

*__NOTE:__ The end-to-end tests will need a browser environment in order to run. You will need to have a development server running concurrently (see above) in order for those tests to run.*
```
yarn test
```

####  Build Development
Generates the static, minified assets needed to deploy the application live. All assets are dumped into the `dist` folder at the root of the project.
```
yarn build
```

####  Deploy Project
This command runs the tests and if sucessful, will build the production assets and push them to GitHub Pages
```
yarn deploy
```

#####  Generate Additional Components
Will prompt you with a short series of questions in order to generate new component modules in the codebase (saves on some repetitive scaffolding)
```
yarn generate
```