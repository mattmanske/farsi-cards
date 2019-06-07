module.exports = {
  testEnvironment: "node",
  testPathIgnorePatterns: [
    "/node_modules/"
  ],
  setupFiles: [
    "<rootDir>/internals/testing/setup.js"
  ],
  modulePaths: [
    "<rootDir>/src/",
    "<rootDir>/node_modules/",
    "<rootDir>/internals/"
  ],
  moduleFileExtensions: [
    "js",
    "jsx",
    "yml"
  ],
  "transform": {
    "\\.js?$" : "babel-jest",
    "\\.yml$" : "yaml-jest"
  },
  collectCoverageFrom: [
    "src/**/*.{js,jsx}",
    "!src/*.{js,jsx}",
    "!src/**/styles.js",
    "!src/**/mocks/*.js"
  ]
}