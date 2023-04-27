# HighchartsAppApi

## Project Objective

The goal of this project is to display weather forecast for a week on a column chart in an Angular app using angular-highcharts library and weather API

## Project Components

Our project consists of angular-highcharts column chart populated with weather forecast for a week retrieved from weather API

## Technologies used

- Angular

## Development environment

- Nodejs v16.15.1
- npm v8.11.0
- Angular CLI v15.2.6
- IDE: VS Code

## How to use weather API?

Please refer to this [documentation](https://www.weather.gov/documentation/services-web-api)

## Procedures

1. Create an Angular project called _highchartsApp-api_ using the following command: ng new highchartsApp-api
2. Create a component called _highcharts-chart_ using the following command: ng g c highcharts-chart
3. Download and install [angular-highcharts](https://www.npmjs.com/package/angular-highcharts) using npm
4. Import _ChartModule_ by adding _import { ChartModule } from 'angular-highcharts';_ to _app.module.ts_
5. Add _ChartModule_ to imports array in _app.module.ts_
6. Import _Chart_ by adding _import { Chart } from 'angular-highcharts';_ to _highcharts-chart.component.ts_
7. Add chart configuration to _highcharts-chart.component.ts_
8. Add chart to template _highcharts-chart.component.html_
9. Import _HttpClientModule_ by adding _import { HttpClientModule } from '@angular/common/http';_ to _app.module.ts_ to make HTTP requests like GET & POST, etc. to the back end server
10. Add _HttpClientModule_ to imports array in _app.module.ts_
11. Import _HttpClient_ by adding _import { HttpClient } from '@angular/common/http';_ to _highcharts-chart.component.ts_  to make HTTP requests to back end server
12. Implement logic as explained in _highcharts-chart.component.ts_
13. Build app using the following command: ng-serve-o and the output should appear as follows:

![highchartsApp-api 2](https://user-images.githubusercontent.com/41340307/234836218-3de373c5-ec7c-49fa-a411-a0ecabad69a7.PNG)
