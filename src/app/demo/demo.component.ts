import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer';
import { MatTableDataSource,MatMenuModule } from '@angular/material';

import * as _ from 'lodash';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-demo',
  templateUrl: './demo-material.component.html',
 // templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  constructor(private _customerService:CustomerService) { }
  data:Customer[]= [];
  dataSource : MatTableDataSource<Customer>;
  displayedColumns = ['firstname', 'lastname', 'email','actions'];
  asyncData: Observable<Customer[]>;
  ngOnInit() {
    this._customerService.getAll().subscribe((customers: Customer[])=>{
      
     // this.data.push(customer);
     this.data = customers;
      this.dataSource= new MatTableDataSource(customers);
    });

    this.asyncData = this._customerService.getAll();
  }

  applyFilter(filterText:string) {
    let filterValue = filterText.toLowerCase().trim();
    this.dataSource.filter = filterValue;
    this.data= this.data.filter((customer)=> {
      return !!customer.firstname.match(new RegExp(filterValue,'gi'))
    
    });
  }

  removeCustomer(customer:Customer)
  {
    //_.remove(this.data,(c)=>c.id === customer.id);
    this.data= _.filter(this.data,(c)=>{return (c.id !== customer.id);});
  }
}
