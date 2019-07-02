# babel-preset-pt-react-app

This package includes the Babel preset used by [passionTrade Create React App](https://github.com/passionTrade/create-pt-react-app).

## Usage in Create React App Projects

The easiest way to use this configuration is with [passionTrade Create React App](https://github.com/passionTrade/create-pt-react-app), which includes it by default. **You don’t need to install it separately in Create React App projects.**

## Usage Outside of passionTrade's Create React App

If you want to use this Babel preset in a project not built with passionTrade's Create React App, you can install it with the following steps.

First, [install Babel](https://babeljs.io/docs/setup/).

Then install babel-preset-react-app.

```sh
yarn add @passiontrade/babel-preset-pt-react-app
```

Then create a file named `.babelrc` with following contents in the root folder of your project:

```js
{
  "presets": ["@passiontrade/pt-react-app"]
}
```
