# js-Pong
A pong game with javascript.

Uses ES6 with babel and webpack, to get a cleaner code.

## How to install ES6 with babel and webpack

Prerequisites
- Install nodejs
- Install npm

File structure 
- Create an 'index.html' file at root
- Create a 'app' folder at root, where will go your javascript sources
- Create a 'dist' folder at root, where webpack will bundle your compiled files
- Create a 'index.js' in the app folder
- Create a '.babelrc' file at root
- Create a 'webpack.config.js' file at root
- add 'node_modules/' to your .gitignore


Install webpack and webpack dev server locally

`npm install webpack webpack-dev-server --save-dev`

Install babel locally

`npm install --save-dev babel-loader babel-core`

Install babel preset environment

`npm install babel-preset-es2015 --save-dev`


Paste this in your package.json, under `version`
 ``` json
  "scripts": {
    "start": "./node_modules/.bin/webpack -p",
    "dev": "./node_modules/.bin/webpack-dev-server --inline --hot"
  },
 ```
 
Paste this in your .babelrc file
``` json
{
  "presets": ["es2015"]
}
```

Add this in your webpack.config.js file
``` javascript
module.exports = {
  entry: "./app/index.js",
  output: {
    filename: "./dist/bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      }
    ]
  },
}
```

## Usage

Add this in the body of your html file
``` html
    <script src="dist/bundle.js"></script>
```

Declare an exported class in a js file (in the app folder)
``` javascript
export default class Ball {
    // code
}
```

Import it into an other js file without '.js' (path must be consistent), and use it
``` javascript
import Ball from './ball';

// ...

    ball = new Ball(10, 75, 75);

```

Run babel and webpack thanks to npm in terminal to compile your js. This will export a minified bundle.js in dist folder, where your html page will use it.

``` 
npm run start
```

If you want to dynamically reload your change while developping, use webpack-dev-server via npm

``` 
npm run dev
```

Your app will run at [http://localhost:8080/](http://localhost:8080/)