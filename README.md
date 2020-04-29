This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

**** EXERCISE *****

A live analytics dashboard displays data about a medical operating room to doctors

and nurses. It receives its data from three independent monitoring systems:

 

- Temperature

- Air pressure

- Humidity

 

Each system sends randomly data every 100-200ms.

 

***** TASK *****

 

- Write an observable that, when subscribed to, emits a display object containing the

latest value of all three systems, to be consumed by the dashboard.

 

***** REQUIREMENTS *****

 

- display object should not be emitted more often than every 100ms

- display object should only be emitted when one of the systems sends a new value

- If a value is not received from a specific system for more than 1000ms, its reading (in the display object) should be 'N/A'

- All 3 systems must emit at least one value before 1 display object is ever sent to the dashboard.

 

 For the purposes of this exercise, assume that the readings from each system are


available as a 'data' event on a node EventEmitter. For example:

 

temperature = new EventEmitter();

temperature.on('data', data => { // data = '24.2' })



***** DELIVERABLES *****



- all your RX business logic must be inside a UNIQUE observable

- provide a basic UI in react

- provide unit tests and some basic component tests





Thank you and good luck!

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!
