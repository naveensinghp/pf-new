import { Component,NgZone } from '@angular/core';
const data = {
  chart: {
    caption: "Technical Skills",
    subcaption: "For a net-worth of $1M",
    showvalues: "1",
    showpercentintooltip: "0",
    numberprefix: "$",
    enablemultislicing: "1",
    theme: "fusion"
  },
  data: [
    {
      label: "HTML",
      value: "300000"
    },
    {
      label: "PHP",
      value: "230000"
    },
    {
      label: "SQL",
      value: "180000"
    },
    {
      label: "Angular",
      value: "270000"
    },
    {
      label: "Insurance",
      value: "20000"
    }
  ]
};



@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {
  chart: any;
  width = 600;
  height = 400;
  type = "pie3d";
  dataFormat = "json";
  dataSource = data;

  constructor() {
  }
}
