import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ListComponent } from './pages/list/list.component';
import { MainComponent } from './pages/main/main.component';
import { SharedModule } from '../shared/shared.module';
import { TableComponent } from './components/table/table.component';


@NgModule({
  declarations: [
    ListComponent,
    MainComponent,
    TableComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule
  ]
})
export class ProductsModule { }
