import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { LamyPen} from '../models/lamy-pen'; 
import { CustomLamy} from '../models/custom-lamy'; 
@Injectable()
export class LamyService {

  constructor(private _http: HttpClient) { }


   getAll():Observable<LamyPen[]>{
   return this._http.get<LamyPen[]>("http://localhost:3000/lamy-list");
  }

  createCustomLamy(custom: CustomLamy)
  {
    
      console.log(' createCustomLamy -- > Nib : ' + custom.nib);
      console.log(' createCustomLamy -- > Clip Color : ' + custom.clipColor);
      console.log(' createCustomLamy -- > Body Color : ' + custom.bodyColor);
      
  }

}
