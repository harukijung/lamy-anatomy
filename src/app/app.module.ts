import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { Directive} from '@angular/core';
// route
//import { RouterModule,Routes, Router, ActivatedRoute } from "@angular/router";


// service
import { CustomerService } from './customer.service';
import { MenuService } from './menu.service';
import { LamyService} from './services/lamy.service';

// self create module
import { MaterialModule } from './material.module';

//self create component
import { DemoComponent } from './demo/demo.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { MainComponent } from './main/main.component';
import { MenuDynamicComponent } from './menu-dynamic/menu-dynamic.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { RouteComponent } from './route/route.component';
import { SearchComponent } from './search/search.component';
import { LamyListComponent } from './lamy-list/lamy-list.component';
import { LamyPaginationComponent } from './lamy-pagination/lamy-pagination.component';

import { routing } from './route/route.module';
import { FormComponent } from './form/form.component';
import { AuthGuard} from './auth.guard';
import { AppAuthGuard} from './app-auth.guard';
import { CustomLamyComponent } from './custom-lamy/custom-lamy.component';
import { LamyUploadComponent } from './lamy-upload/lamy-upload.component';


// for form lamy-upload
import {ReactiveFormsModule} from "@angular/forms";
import { AlStarShadeComponent } from './al-star-shade/al-star-shade.component';
import { CreditComponent } from './credit/credit.component';

//import { Chart } from 'chart.js';
//import { ChartsModule } from 'ng2-charts';
//import { HttpClientModule } from '@angular/common/https';
/*
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'demo', component: DemoComponent },
  { path: 'search', component: SearchComponent }
];
*/

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    HomeComponent,
    MenuComponent,
    MainComponent,
    MenuDynamicComponent,
    SideNavComponent,
    RouteComponent,
    SearchComponent,
    FormComponent,
    LamyListComponent,
    LamyPaginationComponent,
    CustomLamyComponent,
    LamyUploadComponent,
    AlStarShadeComponent,
    CreditComponent,
   // ChartsModule,
    
    
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    routing,
    ReactiveFormsModule
   // RouterModule.forRoot(routes)


  ],
  providers: [CustomerService,MenuService, AppAuthGuard, LamyService],
  bootstrap: [AppComponent]
})





export class AppModule { }
