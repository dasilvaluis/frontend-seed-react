# Install React

## 1 - Install React

```sh
  yarn add react react-dom
```

If not using Typescript, install `prop-types`:

```sh
  yarn add prop-types
```

## 2 - React presets

2.1 - Install @babel/preset-react

```sh
  yarn add @babel/preset-react -D
```

2.2 - Config babel with React presets @ `.babelrc`

```json
  {
    ...
    "presets": [
      ...
      "@babel/preset-react"
    ]
    ...
  }
```

## 3 - Install React Testing Library

```sh
  yarn add @testing-library/react -D
```

## 4 - Linting

4.1 - Install React eslint plugins @ `.eslintrc`

```sh
  yarn add eslint-plugin-import eslint-plugin-react eslint-plugin-react-hooks -D
```

4.2 - Config eslint @ `.eslintrc`

```json
  {
    "extends": [
      // ...
      "plugin:import/recommended",
      "plugin:react/recommended",
      "plugin:react-hooks/recommended"
    ],
    "parserOptions": {
      // ...
      "ecmaFeatures": {
        "jsx": true
      }
    },
    "rules": {
      // ...
      "react/jsx-curly-spacing": [2, { "when": "always", "children": true }],
      "react/jsx-boolean-value": ["always"]
    },
    "settings": {
      "version": "detect",
      "import/resolver": {
        "node": {
          "extensions": [".js", ".jsx"]
        }
      }
    }
  }
```

## 4 - Config webpack

@ `webpack.config.js`
```js
  //...
  module: {
    rules: [
      // ...
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [ 'babel-loader' ],
      },
      // ...
    ],
  },
  resolve: {
    extensions: [ '.js', '.jsx' ],
  },
  // ...
```

## 5 - Make stylelint ignore .jsx files

@ `.stylelintrc`
```json
  {
    "ignoreFiles": ["**/*.js", "**/*.jsx", "node_modules/**/*", "dist/**/*"],
    "extends": "stylelint-config-standard"
  }
```
