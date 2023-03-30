![Personal Homepage](./public/PersonalHomepageIcon.png)
# Hi! Welcome to Personal Homepage project! 💻📱🔧
This is my virtual reasume with information on what technologies I have learned so far, what I want to learn in the near future and all links to my Social Media - just in case you want to contact me ✉

It's not just a nice table with pictures - the project checks most of the technologies listed there in practice.  👨‍💻

I invite you to take a look at the page  👇
https://jaroslawogonowski.github.io/personal-homepage/

![Personal homepage- gif](./public/PersonalHomepage.gif)

## 🦾Technologies used: 
- HTML
- CSS
- Styled Components
- JavaScript
- React
- Axios
- useEffect
- custom hooks
- async
- GlobalStyle
- Redux-Saga
- Redux (Toolkit)

## How it works? 👀🛠
### 🆗 HEADER
In the header there is my photo, a short note, a button with the option to send an email directly to me and an animated button to change the theme.

### ⏩ THEME BUTTON
The button responsible for changing the theme changes the value in the state and transfers it directly to the APP where Theme Provider reads it and, based on the props, adds a light or dark composition to the page.

### ⏩ ARTICLES
The next two articles are the same component with different props - they map the skill array as the main content.
### ⏩ PORTFOLIO
The next content is the portfolio which, except for the header, fetches the content from the GitHub API using the axios library. Repository titles are modulated in such a way that they are legible, well presented and do not contain extra characters.
### ⏩ FOOTER
At the end of the page you will find a footer with contact information and SVG icons with links to my social media.
## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


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
