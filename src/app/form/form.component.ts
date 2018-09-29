import { Component, OnInit , Directive} from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

/* tslint:disable-next-line */
@Directive({selector: 'canvas[baseChart]', exportAs: 'base-chart'})

export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

/*
   // Pie
   public pieChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
   public pieChartData:number[] = [300, 500, 100];
   public pieChartType:string = 'pie';
  
   // events
   public chartClicked(e:any):void {
     console.log(e);
   }
  
   public chartHovered(e:any):void {
     console.log(e);
   }
   */
}
