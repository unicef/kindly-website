# Kindly Website

Public website for Kindly hosted at https://kindly.unicef.io. 
For the main Kindly software code repository, refer to [unicef/kindly](https://github.com/unicef/kindly).

## Overview

Single Page Application built with React following [this website design](https://miro.com/app/board/o9J_ls1DFJA=/?moveToWidget=3074457365573652264&cot=14) ([design in Zeplin](https://app.zeplin.io/project/616824940d0dd1be16eb4b9b), requires login).

Original website design by [Kristina Tlusty](https://www.linkedin.com/in/kristina-tlusty/) and Prateek Upreti 🙏

Summary of main files:

* [src/index.js](src/index.js) provides the entrypoint to the application, which mostly includes `App.css`
* [src/App.js](src/App.js) uses [React Router](https://reactrouter.com/) to serve two pages:
	* [src/Main.js] the website homepage that provides all the content, and layout using Bootstrap.
	* [src/Form.js] provides an embeddable component to try out Kindly, coded in [components/KindlyForm.js](components/KindlyForm.js)
* [src/App.css](src/App.css) provides the CSS for the application, customizing the Bootstrap default theme.
* [src/img](src/img) folder contains all the illustrations for the website in SVG format.

## Configuration

Configure an environment variable `REACT_APP_SCRIPT_URL` as per the instructions provided in [jamiewilson/form-to-google-sheets](https://github.com/jamiewilson/form-to-google-sheets) to store submissions from the `/contribute` form into a Google Spreadsheet.

## Hosting

The website is hosted using [GitHub Pages](https://pages.github.com/) using the `gh-pages` branch. The process of updating the website is automated through [GitHub Actions](https://docs.github.com/en/actions) through [.github/workflows/build-deploy.yml](.github/workflows/build-deploy.yml) following the documentation provided in the following article: [Deploying a React App Using GitHub Pages and GitHub Actions](https://codeburst.io/deploying-a-react-app-using-github-pages-and-github-actions-7fc14d380796)

## Embed Form

The Kindly Form is embeddable for demo purposes into other websites, such as unicef.org, using the following HTML code:

```html
<iframe src="https://kindly.unicef.io/form" style="width: 400px; height: 600px; border: none;"></iframe>

```

_⚠️&nbsp;&nbsp;Note that this form leverages an API endpoint that has the origin restricted to a shortlist of allowed domains, and it will otherwise not work from any generic website._

## Development

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## 💙 About UNICEF

[UNICEF](https://www.unicef.org/) works in over 190 countries and territories to protect the rights of every child. UNICEF has spent more than 70 years working to improve the lives of children and their families. In UNICEF, **we believe all children have a right to survive, thrive and fulfill their potential – to the benefit of a better world**.

## :memo: License

This repository contains both software and content, and a different license applies to each.

* **Software** included in this repository is licensed under the [MIT License](LICENSE). Please note that this license only applies to the software used to create Kindly public website, and a different software license applies to the software that Kindly runs. Refer to [unicef/kindly](https://github.com/unicef/kindly) for additional information.
* **Content** included in this repository is licenses under the [Creative Commons Attribution-ShareAlike 4.0](LICENSE.content.md)
