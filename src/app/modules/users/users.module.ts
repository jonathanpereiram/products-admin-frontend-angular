import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { ListComponent } from './pages/list/list.component';
import { MainComponent } from './pages/main/main.component';
import { SharedModule } from '../shared/shared.module';
import { TableComponent } from './components/table/table.component';

@NgModule({
  declarations: [
    ListComponent,
    MainComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule
  ]
})
export class UsersModule { }
