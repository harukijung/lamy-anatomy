import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatButtonModule, 
         MatInputModule,MatMenuModule,
         MatSidenavModule } from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSortModule} from '@angular/material/sort';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    MatMenuModule,
    MatSidenavModule,
    MatTabsModule,
    MatPaginatorModule,
    MatRadioModule,
    MatSelectModule,
    MatSortModule,
    MatCheckboxModule
  ],
  exports: [MatTableModule,MatButtonModule,
    MatInputModule,MatMenuModule,MatSidenavModule,
    MatTabsModule,MatPaginatorModule,MatRadioModule,
    MatSelectModule,MatSortModule,MatCheckboxModule],

  declarations:[]
})
export class MaterialModule { }
