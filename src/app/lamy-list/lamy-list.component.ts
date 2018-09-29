import { Component, OnInit ,ViewChild} from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { LamyPen} from '../models/lamy-pen'; 
import { LamyService } from '../services/lamy.service';
import { MatTableDataSource,MatPaginator } from '@angular/material';
@Component({
  selector: 'app-lamy-list',
 // templateUrl: './lamy-list.component.html',
 templateUrl: './lamy-list-material.html',
 
  styleUrls: ['./lamy-list.component.css']
})
export class LamyListComponent implements OnInit {


  asyncLamyList: Observable<LamyPen[]>;

  displayedColumns: string[] = ['name', 'color', 'price'/*,'id'*/];
  dataSource : MatTableDataSource<LamyPen>;
  data:LamyPen[]= [];

  displayDesc : string;
  selectedId :number = 1;




  totalPen :number;

  @ViewChild(MatPaginator) paginator: MatPaginator;



  
  constructor(private _lamyService:LamyService) { 

    this._lamyService.getAll().subscribe((lamys: LamyPen[])=>{
      
      this.dataSource = new MatTableDataSource(lamys);
      this.totalPen = lamys.length;
      
   });
  }


  ngOnInit() {

    this.asyncLamyList = this._lamyService.getAll();
//    this.dataSource.paginator = this.paginator;
  }

  ngAfterViewInit() 
  {
    console.log('in ngAfterViewInit');
   // this.dataSource.paginator = this.paginator;
  }
  

  onClickRow(desc:string, id:number)
  {
      this.displayDesc = desc;
      this.selectedId = id;
      this.dataSource.paginator = this.paginator;
  }

 

}
