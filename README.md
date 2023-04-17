# HighchartsAppApi

The goal of this project is to display temperature for a week on a column chart in an Angular app using angular-highcharts library and weather API

## How to use angular-highcharts?

For this project, angular-highcharts is included using the [distribution package](https://www.npmjs.com/package/angular-highcharts)

## Development environment

- Nodejs v16.15.1
- npm v8.11.0
- Angular CLI v15.2.6
- IDE: VSCode

## Procedures

1. Create an Angular project called _highchartsApp-api_ using the following command: ng new highchartsApp-api
2. Download and install [angular-highcharts](https://www.npmjs.com/package/angular-highcharts)
3. Modify _app.module.ts_, _highcharts-chart.component.ts_ and _highcharts-chart.component.html_ (For template: Remove _button_ element) as described [here](https://www.npmjs.com/package/angular-highcharts)
4. Modify _highcharts-chart.component.ts_ as described [here](https://www.tutorialspoint.com/angular_highcharts/angular_highcharts_combinations_column.htm)
5. Import _HttpClientModule_ from '@angular/common/http' to make HTTP requests like GET & POST, etc. to the back end server
6. Add _HttpClientModule_ to imports array in _app.module.ts_
7. Import _HttpClient_ from '@angular/common/http' to make HTTP requests to back end server
8. Implement logic as explained in _highcharts-chart.component.ts_
8. Build app using the following command: ng-serve-o and the output should appear as follows:

![highchartsApp-api](https://user-images.githubusercontent.com/41340307/232491580-01095df9-91d7-4d8b-bb68-54b922d25cfc.PNG)
