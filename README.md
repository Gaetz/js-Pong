# js-Pong
A pong game with javascript.

Uses ES6 with babel and webpack, to get a cleaner code.

## How to install ES6 with babel and webpack

Prerequisites
- Install nodejs
- Install npm

File structure 
- Create an 'index.html' file at root
- Create a 'app' folder at root
- Create a 'index.js' in the app folder
- Create a 'dist' folder at root
- Create a .babelrc file at root
- Create a webpack.config.js file at root
- add 'node_modules' to your .gitignore

Install babel locally

`npm install --save-dev babel-loader babel-core`

Install webpack locally

`npm install webpack --save-dev`

Install babel preset environment

`npm install babel-preset-env --save-dev`


Paste this in your package.json, under `version`
 ``` json
 "scripts": {
    "start": "webpack --config mywebpack.config.js",
    "build": "babel src -d lib"
 },`
 ```
 
Paste this in your .babelrc file
``` json
{
  "presets": ["env"]
}
```

Add this in your webpack.config.js file
``` javascript
module: {
  rules: [
    { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
  ]
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

Run webpack in terminal to compile your js. This will export bundle.js in dist folder, where your html page will use it.
```
$ ./node_modules/.bin/webpack app/index.js dist/bundle.js`
```
