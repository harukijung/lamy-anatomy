import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Menu } from '../Menu';

import { MenuService } from '../menu.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  name = 'Angular 5';
  objectKeys = Object.keys;

  my_menu = {
    'main1': ['sub1', 'sub2'],
    'main2': ['sub1', 'sub2', 'sub3'],
  };
   
  

  asyncData: Observable<Menu[]>;
  data:Menu[]= [];
  constructor(private _menuService:MenuService) { 
      this._menuService.getAll().subscribe((menus: Menu[])=>{
      
      // this.data.push(customer);
      this.data = menus;
      
     });
    
  }
  
  ngOnInit() {
    
  }

}
