import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts'; // The Chart object from which an instance is created to draw chart
import { HttpClient } from '@angular/common/http';  // Service to be injected in the constructor to make HTTP requests to back end server

@Component({
  selector: 'app-highcharts-chart',
  templateUrl: './highcharts-chart.component.html',
  styleUrls: ['./highcharts-chart.component.scss']
})
export class HighchartsChartComponent implements OnInit {

  data: any = [];
  chart: Chart;
  officeID: string = "AKQ"; // Forecast office ID
  gridX: number = 50; // Forecast grid X coordinate
  gridY: number = 70; // Forecast grid Y coordinate
  baseURL: string = "https://api.weather.gov/gridpoints/";  // API endpoint

  constructor(public http: HttpClient) { } // Injecting HttpClient service

  ngOnInit(): void {  // On chart load, the code block here will execute
    this.getTemp(); // Function to get and display temperatures on chart
  }

  public getTemp() {
    return this.http.get<any>(`${this.baseURL}${this.officeID}/${this.gridX},${this.gridY}/forecast?units=si`) // Calling HTTP get method
      .subscribe(res => {
        this.data = res.properties.periods.map((p: any) => p.temperature)  // Mapping from array of objects to array of numbers (temperatures)
        this.chart = new Chart({
          title: {  // The chart's main title
            text: '7-day Weather Forecast'  // The title of the chart
          },
          subtitle: { // The chart's subtitle
            text: 'Source: https://www.weather.gov/documentation/services-web-api'  // The subtitle of the chart
          },
          xAxis: {  // The X axis or category axis. Normally this is the horizontal axis

            // If categories are present for the xAxis, names are used instead of numbers for that axis
            categories: res.properties.periods.map((p: any) => {
              return `${p.startTime}
              ${p.endTime}`;
            }), // Mapping from array of objects to array of strings (start timestamps and end timestamps)

            // Configure a crosshair that follows either the mouse pointer or the hovered point.
            crosshair: true
          },
          yAxis: {  // The Y axis or value axis. Normally this is the vertical axis

            min: 0, // The minimum value of the axis

            title: {  // The axis title, showing next to the axis line

              text: 'Temperature (°C)' // The actual text of the axis title
            }
          },
          tooltip: {  // Options for the tooltip that appears when the user hovers over a series or point

            // The HTML of the tooltip header line
            headerFormat: '<span style = "font-size:10px">{point.key}</span><table>',

            // The HTML of the point's line in the tooltip
            pointFormat: '<tr><td style = "color:{series.color};padding:0">{series.name}: </td>' +
              '<td style = "padding:0"><b>{point.y}°C</b></td></tr>',

            // A string to append to the tooltip format
            footerFormat: '</table>',

            // When the tooltip is shared, the entire plot area will capture mouse movement or touch events
            shared: true,

            // Use HTML to render the contents of the tooltip instead of SVG
            useHTML: true
          },
          plotOptions: {  // A wrapper object for config objects for each series type

            column: { // Column series display one column per value along an X axis

              // Padding between each column or bar, in x axis units
              pointPadding: 0.2,

              // The width of the border surrounding each column or bar
              borderWidth: 0
            }
          },
          series: [{ // Series options for specific data and the data itself
            type: 'column',
            name: 'Temp',
            data: this.data // An array of data points for the series
          }]
        });
      },
        err => {
          console.error('Request failed with error');
          console.log(err);
        });
  }
}
