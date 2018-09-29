import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Menu } from './Menu';

@Injectable()
export class MenuService {

  
  constructor(private _http: HttpClient) {  }

  getAll():Observable<Menu[]>{
    return this._http.get<Menu[]>("http://localhost:3001/menu");
   }
}
