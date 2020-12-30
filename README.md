# Modul 133 Dorflaedeli by David Zweili

This project developed based on a school project. It demonstrates a simple example of a client server application with a sessioncookie.

## Project Information

- **Environment:** Node

- **Client:** Developed with React library

- **Server:** Developed with Express framework

- **Typescript:** Server and client are both developed with typescript. Classes which are used in both are defined in the shared-classes folder as node packages. Then they are added to the client and server as dependencies.

- **Sessioncookie:** A sessioncookie is in use to get the shopping cart of the user from the server.

## Installation (for production)

If you don't already have it, you need to install [Node](https://nodejs.org/en/) first. Then navigate with a console to the folder in which this README is located, to fire off the following commands.

1. Install all dependencies: `npm run install:all`
2. Build client and server: `npm run build:all`
3. Run server in production: `npm start`
4. Watch the application on http://localhost:8080/

## Development

If you want to develop on the client, you can make advantage of autorefreshing your client in the browser, while developing in typescript.

1. Install all dependencies: `npm run install:all`
2. At least build your server: `npm run build:server`
3. Start your application in dev-mode: `npm run dev:client`
4. Your browser should pop up automatically on http://localhost:8090/.
