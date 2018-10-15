# instabuy-remix

Instabuy round 2 with M E R N

# Initial Setup

- Install Node v8.2.1 (should be latest at the time of writing)
- Install npm v6.4.1 (should be latest at the time of writing)
- Run `npm install`

# Setup Issues

- Babel not working: You may not have babel installed, run the following command

sudo npm install --save-dev babel-cli

- node and npm: for MacOS users, you should download node through the website instead of through Homebrew, this is so that you can update both node and npm without having to touch the Homebrew directory.

- To update node: download n (ex: sudo n 8.2.1)
- To update npm: sudo npm install -g npm (installs latest version)

Install ONLY the "devDependencies listed in the package.json file. Thank you Richard!

- npm install --only=dev


## Building and running

To run the app, you'll need to build the source code (everything in src) and then run the transpiled code (everything in build). The reason why we do this is because we are using ES6 JS syntax but browser JS engines don't support it yet, so we use babel to transpile ES6 JS into ES5 JS syntax.

We require ES6 for JSX syntax for React and new features that ES6 has that addresses some shortcomings of ES5.

## New Update (15th OCT, 2018)

I updated the repository to fit the API and MongoDB settings, know that the mongodb will not work with my credentials (obviously) and you need to setup your own. How you setup mongodb and mongoose I leave to you (feel free to ask for questions though!)


To build and run:

- `npm run start-watch`
