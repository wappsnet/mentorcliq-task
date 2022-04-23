## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

# JSONServer + JWT Auth

A Fake REST API using json-server with JWT authentication.

Implemented End-points: login,register

## Install

```bash
$ npm install
$ npm run start-auth
```

Might need to run
```
npm audit fix
```

## How to login/register?

You can login/register by sending a POST request to

```
POST http://localhost:8000/auth/login
POST http://localhost:8000/auth/register
```
with the following data

```
{
  "email": "nilson@email.com",
  "password":"nilson"
}
```

You should receive an access token with the following format

```
{
   "access_token": "<ACCESS_TOKEN>"
}
```


You should send this authorization with any request to the protected endpoints

```
Authorization: Bearer <ACCESS_TOKEN>
```

#Application Description

There are implemented draft Mentoring application with multi-step registration, login, authentication.  
Application has routing with react-router v5, redux/toolkit storage, and basic design components.
Registration current flow containing 3 steps:
1. Personal Information step.
2. Authentication credentials (email, password) step.
3. Job details step

#Task Requirements
1. Project has a bag router related. Routes current implementation allow render route specific page on page load, but in case of application inner navigation routes are changing, but pages does not rendered correctly. Ex.: when You will navigate from `/login` to `/register/details` route will change, but there will still be rendered login component. You need to fix a bag.
2. You need to add 4-th (Suggestions) step to registration flow:
   In this step you will need to get employees list by api - GET `http://localhost:8000/employees`. employees lit contains user specific data item.
   You need suggest them to your current user ass potential matches, and suggest up to 5 matches. You will need to sort them by best data matching algorithm. User can add employee to own suggestions list, and remove them.
3. After registration user should be redirected to profile page, where he/she can edit profile, and suggestions.
4. You need to change routes by this way: Not logged-in user has no access to profile page, and logged-in user has no access to login and register pages.  
   
   
