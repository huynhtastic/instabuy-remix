# instabuy-remix

Instabuy round 2 with M E R N

# Initial Setup

- Install Node v8.2.1 (should be latest at the time of writing)
- Install npm v6.4.1 (should be latest at the time of writing)
- Run `npm install`

## Building and running

To run the app, you'll need to build the source code (everything in src) and then run the transpiled code (everything in build). The reason why we do this is because we are using ES6 JS syntax but browser JS engines don't support it yet, so we use babel to transpile ES6 JS into ES5 JS syntax.

We require ES6 for JSX syntax for React and new features that ES6 has that addresses some shortcomings of ES5.

To build and run:

- `npm run build`
- `node build/app.js`
