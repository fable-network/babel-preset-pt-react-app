module.exports = function() {
  return {
    presets: ["react-app"],
    plugins: [
      '@babel/plugin-proposal-export-namespace-from',
      '@babel/plugin-proposal-export-default-from',
      'babel-plugin-styled-components',
      'react-hot-loader/babel'
    ],
    env: {
      production: {
        only: [
          "src"
        ]
      },
      test: {
        plugins: [
          "require-context-hook",
          "dynamic-import-node",
          "transform-es2015-modules-commonjs"
        ]
      }
    }
  }
};
