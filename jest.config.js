module.exports = {
  displayName: {
    name: 'GITLAB-METRICS',
    color: 'green',
  },
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['src/__tests__'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
};
