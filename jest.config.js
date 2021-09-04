const config = {
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(jpe?g|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/file-mock.js',
    '\\.(css|scss|sass|less)$': '<rootDir>/__mocks__/style-mock.js',
  },
  setupFilesAfterEnv: [ './jest.setup.js' ],
  testEnvironment: 'jsdom',
};

module.exports = config;
