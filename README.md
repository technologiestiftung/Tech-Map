
![](https://img.shields.io/badge/Built%20with%20%E2%9D%A4%EF%B8%8F-at%20Technologiestiftung%20Berlin-blue)
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-9-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

# TSB Tech-map

This is an open source React application that displays the technologies, tools, and hardware used by different teams of Technologiestifung Berlin in the form of a subway map. It uses a Leaflet map to provide an interactive and visual representation.

## Features

- Display of technologies, tools, and hardware used by a company
- Interactive Leaflet map for a visually appealing representation
- Easy generation of new stations using the `/generator` slug, which opens a UI to position the station
- JSON data for stations can be easily added by copying and pasting into the equivalent file in the `src/data` folder

## License

This project is licensed under the MIT License, making it free to use for everyone.

## Tech stack

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

- [Typescript](https://www.typescriptlang.org/)
- [leaflet](https://leafletjs.com/)
- Linting with [ESLint](https://eslint.org/)
- Formatting with [Prettier](https://prettier.io/)

### Installation

#### Node.js

This project is a Create-React-App which requires you to have [Node.js](https://nodejs.org/en/) installed.


Clone the repository to your local machine:

```bash
git clone git@github.com:technologiestiftung/Tech-Map.git
```

Move into the repository folder:

```bash
cd Tech-Map
```

Make sure you use the Node.js version specified in `.nvmrc`. Find out which Node version you're currently on with:

```bash
node --version
```

If this version differs from the one specified in `.nvmrc`, please install the required version, either manually, or using a tool such as [nvm](https://github.com/nvm-sh/nvm), which allows switching to the correct version via:

```bash
nvm use
```

With the correct Node version, install the dependencies:

```bash
npm install
```
or
```bash
yarn
```

Since our fonts are not free to use, you have to provide your own in the 'src/fonts' folder and replace the '@font-face...' implimentations in the global.css'

You are now ready to start a local development server on http://localhost:3000 via:

```bash
npm run start
```
or
```bash
yarn start
```

## Adding New Stations
To add new stations to the subway map, you can use 'http://localhost:3000/generator', which opens a UI for positioning the station. Simply copy and paste the generated JSON into the respective file in the src/data folder.

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->