import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders }  from '@angular/core';


// route
import { RouterModule,Routes, Router, ActivatedRoute  } from '@angular/router';
import { DemoComponent } from '../demo/demo.component';
import { HomeComponent } from '../home/home.component';
import { MenuComponent } from '../menu/menu.component';
import { SearchComponent } from '../search/search.component';
import { FormComponent } from '../form/form.component';
import { LamyListComponent } from '../lamy-list/lamy-list.component';
import { LamyPaginationComponent} from '../lamy-pagination/lamy-pagination.component';
import { CustomLamyComponent} from '../custom-lamy/custom-lamy.component';
import { LamyUploadComponent} from '../lamy-upload/lamy-upload.component';
import { AlStarShadeComponent} from '../al-star-shade/al-star-shade.component';
import {  CreditComponent } from '../credit/credit.component';
//import {AuthGuard} from '../auth.guard';
import {AppAuthGuard} from '../app-auth.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'demo', component: DemoComponent },
  { path: 'search', component: SearchComponent },
  { path: 'lamyList', component: LamyListComponent },
  { path: 'customLamy', component: CustomLamyComponent },
  { path: 'lamyUpload', component: LamyUploadComponent },
  { path: 'alstarShade', component: AlStarShadeComponent },
  { path: 'form', component: FormComponent },
  
  { path: 'credit', component: CreditComponent },
  { path: 'paging', component: LamyPaginationComponent ,
    canActivate: [AppAuthGuard] }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],

 
  exports: [RouterModule],
  
  declarations: []
})
export class RouteModule { }

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);