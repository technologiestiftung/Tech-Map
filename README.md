![](https://img.shields.io/badge/Built%20with%20%E2%9D%A4%EF%B8%8F-at%20Technologiestiftung%20Berlin-blue)
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors-)
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
- [FontAwesome](https://fontawesome.com/)
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

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/ThorstenDiekhof"><img src="https://avatars.githubusercontent.com/u/121924163?v=4?s=100" width="100px;" alt="ThorstenDiekhof"/><br /><sub><b>ThorstenDiekhof</b></sub></a><br /><a href="https://github.com/technologiestiftung/Tech-Map/pulls?q=is%3Apr+reviewed-by%3AThorstenDiekhof" title="Reviewed Pull Requests">👀</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/ZenVega"><img src="https://avatars.githubusercontent.com/u/50147356?v=4?s=100" width="100px;" alt="Urs Schmidt"/><br /><sub><b>Urs Schmidt</b></sub></a><br /><a href="https://github.com/technologiestiftung/Tech-Map/commits?author=ZenVega" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://marcoka.de"><img src="https://avatars.githubusercontent.com/u/6945881?v=4?s=100" width="100px;" alt="Marco"/><br /><sub><b>Marco</b></sub></a><br /><a href="#design-marcoka2000" title="Design">🎨</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

