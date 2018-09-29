import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Menu } from '../Menu';

import { MenuService } from '../menu.service';
@Component({
  selector: 'app-menu-dynamic',
  templateUrl: './menu-dynamic.component.html',
  styleUrls: ['./menu-dynamic.component.css']
})
export class MenuDynamicComponent implements OnInit {

  
  asyncData: Observable<Menu[]>;

  data:Menu[]= [];

  constructor(private _menuService:MenuService) { 
     
    
  }

  ngOnInit() {

    this._menuService.getAll().subscribe((menus: Menu[])=>{
      
      // this.data.push(customer);
      this.data = menus;
      
     });
     
    this.asyncData = this._menuService.getAll();
  }

}
