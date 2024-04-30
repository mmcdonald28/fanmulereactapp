# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `python db_create.py`

Runs the python script to create new entries in the GraphQL database on Amplify according to a custom .json file or MuhlenbergBets.json by default. Make sure all the required python packages are installed. If it doesn't run, just pip install all the packages that are missing according to the error message.

Example usage:
```
python db_create.py --sport WSB --file MuhlenbergBets.json
```
this will create new entries in the database for Softball according to the data in MuhlenbergBets.json.

Example output:
```
{'createSportingEvent': {'id': '8faac56b-c14a-41f1-b4d8-2b6de04e78c6', 'Sport': 'WSB', 'EventDate': '2024-04-27', 'EventTime': '00:00:00', 'Result': 'undecided', 'betsID': 'temp', 'Home': 'Muhlenberg', 'Away': 'McDaniel', 'HomeML': '-160', 'AwayML': '+140', 'HomeSP': '-1.5', 'AwaySP': '+1.5', 'HomeSPodds': '-110', 'AwaySPodds': '-110', 'ouLine': 9.5, 'ouOdds': '-110', 'createdAt': '2024-04-30T18:59:48.104Z', 'updatedAt': '2024-04-30T18:59:48.104Z', '__typename': 'SportingEvent'}}
{'createSportingEvent': {'id': '51366114-d1e7-419f-a348-c7535c94e4f6', 'Sport': 'WSB', 'EventDate': '2024-04-27', 'EventTime': '00:00:00', 'Result': 'undecided', 'betsID': 'temp', 'Home': 'Muhlenberg', 'Away': 'McDaniel', 'HomeML': '-160', 'AwayML': '+140', 'HomeSP': '-1.5', 'AwaySP': '+1.5', 'HomeSPodds': '-110', 'AwaySPodds': '-110', 'ouLine': 9.5, 'ouOdds': '-110', 'createdAt': '2024-04-30T18:59:48.383Z', 'updatedAt': '2024-04-30T18:59:48.383Z', '__typename': 'SportingEvent'}}
```
If you see this it means database entries were successfully created.


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

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
