import { Component, OnInit } from '@angular/core';
import {CustomLamy} from '../models/custom-lamy';
import {Clip} from '../models/clip';
import {Body} from '../models/body';

import { LamyService } from '../services/lamy.service';

@Component({
  selector: 'app-custom-lamy',
  templateUrl: './custom-lamy.component.html',
  styleUrls: ['./custom-lamy.component.css']
})
export class CustomLamyComponent implements OnInit {

  myCustomLamy :CustomLamy;

  myNib : string = 'EF';
  myClipColor : number = 1;
  myBodyColor : Body =  {code: 1, bodyColor: 'Blue'};
  printCustName : boolean = false;
  sumDesc : string;

  //List available
  nibList: string[] = ['EF', 'F', 'M', 'LH'];
  
  clipColorList: Clip[] = [
    {code: 1, clipColor: 'black'},
    {code: 2, clipColor: 'Yellow'},
    {code: 3, clipColor: 'Red'},
    {code: 4, clipColor: 'Metal'}
  ];

  bodyColorList: Body[] = [
    {code: 1, bodyColor: 'Blue'},
    {code: 2, bodyColor: 'Yellow'},
    {code: 3, bodyColor: 'Red'},
    {code: 4, bodyColor: 'Black'},
    {code: 5, bodyColor: 'Pink'},
    {code: 6, bodyColor: 'Green'},
    {code: 7, bodyColor: 'White'}
  ];

  constructor(private _lamyService:LamyService) { }

  ngOnInit() {
  }


  onClickSum()
  {
    console.log('onClickSum call');
    
    this.sumDesc =  'I choose nib ' + this.myNib + ' with '  +   
       this.clipColorList[this.myClipColor -1].clipColor + ' clip ,' +
       this.myBodyColor.bodyColor+ ' Body and ' +
       ((this.printCustName)?'Print Customer Name':'No print');

  //  this.myCustomLamy.nib = this.myNib;
  //  this.myCustomLamy.clipColor = this.clipColorList[this.myClipColor -1].clipColor;
  //  this.myCustomLamy.bodyColor =   this.myBodyColor.bodyColor;
  //  this._lamyService.createCustomLamy(this.myCustomLamy);
  }
}
