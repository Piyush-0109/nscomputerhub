# Getting Started with Create React App

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


## Firebase setup 
- login into your firebase account
- create your application in firebase
- install firebase and firebase tools into your project with the command `npm i firebase && npm install -g firebase-tools`
- login into firebase cli through terminal use command `firebase login` this will redirect you to browser and login into yoour firebase account and wait for login success
and on success on your terminal it will show login success
- initialise the firebase into your project use command `firebase init` it will ask few questions before you proceed.
    **Question will be as follows : inputting the ansers to the questions here itself you can change according to your requirement**
    - Are you ready to proceed? (Y/n)  y
    - Which Firebase features do you want to set up for this directory? Press Space to select features, then Enter to
      confirm your choices. (Press <space> to select, <a> to toggle all, <i> to invert selection, and <enter> to proceed)
      instance
       ( ) Firestore: Configure security rules and indexes files for Firestore
       ( ) Functions: Configure a Cloud Functions directory and its files
      >(*) Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys
       ( ) Hosting: Set up GitHub Action deploys
       ( ) Storage: Configure a security rules file for Cloud Storage
       ( ) Emulators: Set up local emulators for Firebase products
      (Move up and down to reveal more choices)
    - Please select an option: (Use arrow keys)
      > Use an existing project
        Create a new project
        Add Firebase to an existing Google Cloud Platform project
        Don't set up a default project
    - Select a default Firebase project for this directory: (Use arrow keys)
      > ns-computer-hub (NS Computer Hub)
    - What do you want to use as your public directory? build
    - Configure as a single-page app (rewrite all urls to /index.html)? Yes
    - Set up automatic builds and deploys with GitHub? No
- after initilisation is done run command `npm run build` check if build is success
- to deploy use command `firebase deploy` the application will now be deployed to the url in the console

