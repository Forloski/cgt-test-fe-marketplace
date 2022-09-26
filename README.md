# How to run the test

Before starting the project the folowing command should be run to start json-server:

`npm run json-server`

Then the following command to start the project can be run:

`npm run start`

Automated tests can be run after both the json-server and the app are running with the following commands:

`npm run cypress:run` to run cypress headless

or

`npm run cypress:open` to open a browser with cypress running on it

# About the test

My initial idea was to make use of a DB to simulate what an real marketplace would do, storing your cart on a server to be used later and even in other devices if you're registered. To do that i had to use some third party libraries.

I started by installing Typescript on the CRA App, as its makes developing and refactoring easier.

Then installed a routing library, in this case i used react-location (https://react-location.tanstack.com) the sole reason being that i never had used before and wanted to try it out.

Went with json-server (https://www.npmjs.com/package/json-server) to simulate a DB and make the project more inline with what we would have done in a real application.

Then used Axios (https://axios-http.com/docs/intro) with RQ (https://tanstack.com/query/v4/) to handle http requests and basic caching.

Lastly i went with Cypress (https://www.cypress.io) to run our automated tests, using an white box approach was more than enough to run all tests i needed. Cypress also has a component tests for more granular testing, but it was not necessary in this project.

# Marketplace MVP

The goal of this task is to test your ability to test, refactor and implement new functionality on a given system. Note
that this repository does not represent the actual code of CGTrader, but only acts as a testing ground.

## New Functionality

Imagine the situation where management assigns you a task. Management wants you to implement basic MVP functionality for
the marketplace. User should be able to navigate between home page, product page and cart page, add multiple items to the cart and
see the total amount for payment.

## Tasks

1. Implement MVP cart functionality
2. Refactor implementation code and tests where you see fit. You have as much freedom here as you wish
3. Take UI and UX in consideration. Improve the layout and styles using css/scss
4. Make sure test suite runs through all of the tests successfully

## Notes & Requirements

- You can spend as much time as you want.
- You may refactor not only the application code, but the tests too. Keep in mind that test code is still code that
  needs to be maintained.
- Use git to track your changes. **Fork or clone this repository** and commit often.
- When finished, send us the link or the zip of the project via e-mail.

Good luck!

---

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
