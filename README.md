## Setup

Git clone this repository and install all dependencies with: `npm install`. Then run the app using `npm start`. More details are below in the create-react-app section.

## Functionality

This project displays information related to posts, users, and user comments. It has a header navigation which allows the user to toggle between a list of posts and a list of users. The list of posts, users, and comments are obtained from the backend API: `https://jsonplaceholder.typicode.com`.

### Posts View

Posts view is the default view and can be navigated to via `localhost:3000/`. It displays a list of clickable post titles. When a post title is clicked, a post detail view appears which shows the post title, author, post body and a list of post comments. This post detail view can also be navigated by typing the url `localhost:3000/post/<postid>`. In the post list view, if the author's name is clicked, the app displays information about the user. To go back to the all posts view, we can click on `Posts` in the header navigation.

### Users View

The Users view can be navigated to by clicking on `Users` in the header or directly by going to `localhost:3000/users`. This displays a list of users. When a user is clicked, the app displays information about the user. To navigate back to the all-users view, we can click on `Users` in the header navigation. The Users view also has a search input which allows us to filter the users list. The input text is matched with the user's name or username. It also has an autocomplete selectable dropdown that can be selected to filter the users list.

## Improvements / Additions if I Had Unlimited Time

- Add pagination for posts. In the real world, the lists of posts will be unbounded. We could work on a backend endpoint that returns paginated posts. On the frontend, we could implement a never-ending scroll that retrieves the next page of posts. Also we will have resolve the users that are not in the redux store and fetch those users from the backend. For now, I am fetching all posts and users.

- Add more tests: I have a few to get started. I added a couple of snapshot tests with jest. I also added tests for the comments-reducer.

- Add media queries for a great mobile experience: fix the css so that the lists cover 90% width.

- Add throttle / debounce for the autocomplete functionality on searching users.

- Do some error handling / display using the error flag that is stored in the store

- Show the loading state (skeleton posts or loading circle) for posts / users using the loading flag.

- Add selectors (using `reselect`) for better performance

## Default information from Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
