## Setup

This app was originally created with Node.js 12.14.1. You can use
[nvm](https://github.com/creationix/nvm) to make sure
you work with the same version of Node.js – run `nvm install`
and nvm will set up Node.js based on `.nvmrc` file.

Follow these steps to set up the app:

1. `npm install` – install dependencies
2. `npm test` – run all tests
3. `npm start` – run the app in the development mode at [http://localhost:3000/](http://localhost:3000/) (it automatically opens the app in your default browser)


There is also the `npm run test:watch` command available to start test runner in the watch mode. It runs tests related to modified files only.

## Build the app for production

1. `npm run build` – builds the app for production to the `build` folder.

## Architecture
This is a simple React app. Opted to not include Redux, since it could be done without
pain using just React State.

For testing used the lib `enzyme` and `jest`. 

## Improvements to be done

Improve the design, that is very simple, and adapt it to work on smaller screens.


## If I had more time

- Use Sass instead of Vanilla css.
- Use webpack to have more control of the production build version.
- Test as many cases I could to validate I was not missing an edge case. For example could create a script with request to all available Tv shows and then run a test with the complete flow from search to view details.
