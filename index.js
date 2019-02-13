module.exports = function() {
  return {
    presets: [
      require('babel-preset-react-app')
    ],
    plugins: [
      require('@babel/plugin-proposal-export-namespace-from'),
      require('@babel/plugin-proposal-export-default-from'),
      require('babel-plugin-styled-components'),
      require('react-hot-loader/babel')
    ]
  }
};
