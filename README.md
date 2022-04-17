# Gulp starter

All packages are configured in the package.json.

## Install

- `npm i`

## Config

If build on school machine fail, set `useImageOptim` to `false` in `gulpfile.js`

## Features

- Copy `src/*.html` to `dist` folder.
- Copy `src/assets/*/` to `dist/assets/*/` folder.
- Compile SASS `src/styles/app.scss` to `dist/styles` folder.
- Bundle and transpile JS `src/scripts/app.js` to `dist/scripts` folder.
- Create sources maps.
- Run a dev web server with browsersync.

## Commands

- `gulp watch` : build on files changes, launch a dev server with browsersync.
- `npm run build` : build for production
- `npm run clean` : clean the `dist` folder.
