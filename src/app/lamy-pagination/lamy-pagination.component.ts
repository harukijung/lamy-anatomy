import { Component, OnInit ,ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource, MatSort} from '@angular/material';

@Component({
  selector: 'app-lamy-pagination',
  templateUrl: './lamy-pagination.component.html',
  styleUrls: ['./lamy-pagination.component.css']
})

export class LamyPaginationComponent implements OnInit {

  displayedColumns: string[] = ['model', 'name', 'color'];
  dataSource = new MatTableDataSource<LamyElement>(ELEMENT_DATA);

  displayDesc : string;
  selectedId :number = 1;


  constructor() {
    this.dataSource = new MatTableDataSource<LamyElement>(ELEMENT_DATA);
    this.dataSource.paginator = this.paginator;
   }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.dataSource = new MatTableDataSource<LamyElement>(ELEMENT_DATA);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  onClickRow(desc:string, id:number)
  {
      this.displayDesc = desc;
      this.selectedId = id;
     
  }

  applyFilter(filterText:string) {
    let filterValue = filterText.toLowerCase().trim();
    this.dataSource.filter = filterValue;
    
  }


 
}
export interface LamyElement {
  id: number;
  name: string;
  color: string;
  model: string;
}

const ELEMENT_DATA: LamyElement[] = [
  {id: 1, name: 'Petrol blue', color: 'Blue', model: 'Safari'},
  {id: 2, name: 'Bluegreen', color: 'Green', model: 'AL-star'},
  {id: 3, name: 'Terracotta Orange', color: 'Orange', model: 'Safari'},
  {id: 4, name: 'Griso grey', color:'Grey', model: 'Safari'},
  {id: 5, name: 'abc red', color: 'Red', model: 'abc'},
  {id: 6, name: 'Bastian Schweinsteiger', color: 'Silver', model: 'AL-star'},
  {id: 7, name: 'Pico laser orange', color: 'Orange', model: 'Pico'},
  {id: 8, name: 'Lamy Minions', color: 'Yellow', model: 'Safari'},
  {id: 9, name: 'W.Germany safari red', color: 'Red', model: 'Safari'},
  {id: 10, name: 'Savannah Green', color: 'Green', model: 'Safari'},
  {id: 11, name: 'Lamy Accent', color: 'Silver', model: 'Accent'},
  {id: 12, name: 'White red clip', color: 'White', model: 'Safari'},
  {id: 13, name: 'Kumamon', color: 'Black', model: 'Safari'},
  {id: 14, name: 'Brown Black', color: 'Black', model: 'Safari'},
  {id: 15, name: 'Aluminum black clip', color: 'Silver', model: 'AL-star'},
  {id: 16, name: '150 Jahre Freundschaft', color: 'Black', model: 'Safari'},
  {id: 17, name: 'Aquamarine 2011', color: 'Blue', model: 'Safari'},
  {id: 18, name: 'Red yellow clip', color: 'Red', model: 'Safari'},
  {id: 19, name: 'Logo Mercedes - Benz Jupiter Red', color: 'Red', model: 'Logo'},
 // {id: 20, name: 'Pacific', color: 'Blue', model: 'AL-star'},
  {id: 21, name: 'Bastian Schweinsteiger (with signed poster)', color: 'Silver', model: 'Safari'},
 // {id: 22, name: 'Orange 2011 Limited Edition', color: 'Orange', model: 'Safari'},
  {id: 23, name: 'Logo Mercedes - Benz Mountain Grey', color: 'Grey', model: 'Logo'},
  //{id: 24, name: 'Coffee 2010', color: 'Brown', model: 'AL-star'},
  {id: 25, name: 'Logo Mercedes - Benz South Sea Blue', color: 'Blue', model: 'Logo'},
  //{id: 26, name: 'Neon Lime 2015', color: 'Green', model: 'Safari'},
  {id: 27, name: 'Alpine w.germany (screen Marlboro lights)', color: 'White', model: 'Safari'},
  {id: 28, name: 'Laimo', color: 'White/Black', model: 'Safari'},
  {id: 29, name: '30 Jahre', color: 'White', model: 'Safari'},

];