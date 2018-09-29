import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Customer } from './Customer';
//import { SERVICEBASE } from './app-settings';
@Injectable()
export class CustomerService {
  constructor(private _http: HttpClient) {  }
  //private BASEURL = SERVICEBASE + "customers";

  getAll():Observable<Customer[]>{
   return this._http.get<Customer[]>("http://localhost:3002/customer");
  }

}
