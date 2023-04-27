import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChartModule } from 'angular-highcharts'; // Module needed to use chart
import { HttpClientModule } from '@angular/common/http';  // Module to make HTTP requests like GET & POST, etc. to the back end server
import { AppComponent } from './app.component';
import { HighchartsChartComponent } from './highcharts-chart/highcharts-chart.component'; // Module needed to use Highcharts chart

@NgModule({
  declarations: [
    AppComponent,
    HighchartsChartComponent
  ],
  imports: [
    BrowserModule,
    ChartModule, // add ChartModule to your imports
    HttpClientModule  // add HttpClientModule to your imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
