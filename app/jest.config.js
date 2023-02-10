module.exports = {
  setupFiles: [
    '<rootDir>/test/src/jest-setup.js',
  ],
  roots: [
      "<rootDir>/test"
  ],
  testRegex: 'test/(.+)\\.test\\.(jsx?|tsx?)$',
  transform: {
      "^.+\\.tsx?$": "ts-jest"
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  "globals": {
    "window": {}
  },
  coverageDirectory: "<rootDir>/jestCD"
};