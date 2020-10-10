# Micro-frontend Boilerplate Using Nx and Next.js

## Development server

### Start individual micro-apps
|App|Command|URL|
|--|--|--|
|content | `nx serve content`|http://localhost:3001/|
|browse-search | `nx serve rowse-search`|http://localhost:3002/|
|cart-checkout | `nx serve cart-checkout`|http://localhost:3003/|
|accounts | `nx serve accounts`|http://localhost:3004/|

### Start all micro-apps
Run `yarn start:all` to start dev-server for all micro-apps.
This cmd will automatically configure all the reverse proxy required for seemless transition from one app to other. Navigate to http://localhost:3001/.

## Build

Run `nx build <AppName>` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `nx test <AppName>` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e <AppName>` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

