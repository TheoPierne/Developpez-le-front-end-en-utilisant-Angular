# Olympic Games App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.3.

## Getting Started

- Minimum NodeJS version: v14.15.0

Install dependencies with
```sh
npm install
```

Start the server with `npm start`, it will open `http://localhost:4200/` in your current/favorite browser.


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Architecture of the project

```sh
src
├───app 
│   ├───core 
│   │   ├───models         # Contains the models of the data
│   │   └───services       # Contains the services to handle the data
│   └───pages
│       ├───details        # Contains the details page where you can find details about a country that participated to the Olympic Games
│       ├───home		   # Contains the home page where you can find a chart with all country that participated to Olympic Games
│       └───not-found      # Contains the "not found page" that showed up when browsing for unknown page on the app
├───assets
│   ├───icons			   # Contains the icons for the app`
│   └───mock   	   		   # Contains the data that be process on the app`
└───environments           # Contains the environment variables for the project`
```
