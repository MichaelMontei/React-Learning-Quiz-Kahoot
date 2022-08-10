# Getting Started with Create React App Kahoot Quiz But better!

## The objective

- Consume an API
- Make a React application
- KAHOOT MUSIC INTENSIFIES

## Concretely, what are we going to do?

We are going to try to make a quiz site / application that will be better than Kahoot! Starting with a simple react project we are going to keep adding layers of complexity 'till we have a super fun quiz to share with friends and family.

Now to make it a bit easier, instead of having the user create their own quizzes we are going to consume the [open trivia database](https://opentdb.com/). Here we can fetch multiple choice questions with possible answers! (And the correct one of course ;) )

I will get you started with some basic react explanation, but you will have to complete it. Good luck!

## Getting started
In the project directory, you can run:

### `npx create-react-app kahoot-but-better`

We first create a new project in React with the following command.
Now go to the root folder of the project u just created.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


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

### `npm i axios react router DOM`

We can use Axios to call our API'S. This is not necessary, but for this exercise I will use Axios.
The React router DOM allows us our app to have different pages and route between them.

### `npm install @material-ui/core`

React components for faster and easier web development.

## Must have

- [x] A trivia style quiz
- [x] Settings (subject, difficulty, amount of questions, ...)
- [x] Score / Rapport card

## Extra's

- [ ] Go wild
- [ ] Make it super mobile friendly
- [ ] Deploy it online
- [ ] Keep high scores of your players
- [ ] Connect with Node and Socket.io to make it multiplayer!