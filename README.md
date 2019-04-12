# babel-preset-ft-react-app

This package includes the Babel preset used by [fashionTrade Create React App](https://github.com/FashionTrade/create-ft-react-app).

## Usage in Create React App Projects

The easiest way to use this configuration is with [fashionTrade Create React App](https://github.com/FashionTrade/create-ft-react-app), which includes it by default. **You don’t need to install it separately in Create React App projects.**

## Usage Outside of fashionTrade's Create React App

If you want to use this Babel preset in a project not built with fashionTrade's Create React App, you can install it with the following steps.

First, [install Babel](https://babeljs.io/docs/setup/).

Then install babel-preset-react-app.

```sh
yarn add @fashiontrade/babel-preset-ft-react-app
```

Then create a file named `.babelrc` with following contents in the root folder of your project:

```js
{
  "presets": ["@fashiontrade/ft-react-app"]
}
```
