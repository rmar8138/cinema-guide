# CinemaGuide

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.6.

## Purpose

CinemaGuide app is an interactive movie guide that allows users to browse through different movies and cinemas. Users can view the movies that are currently showing, as well as viewing times at different cinemas in the area. They can also view details about these cinemas, as well as the movies they are showing. A form is alsoincluded in each cinema and movie page so that users can update information.

The data for the app is hardcoded in an assets file, and a service has been created to simulate API calls that retrieve this data. It simulates a relational database where there is a movies table, a cinemas table and a joins showings table that links the cinemas and movie showing times.

The app uses custom CSS/SCSS and borrows from the Netflix's UI.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
