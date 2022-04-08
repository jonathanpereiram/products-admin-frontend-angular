import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListComponent } from './pages/list/list.component';
import { MainComponent } from './pages/main/main.component';
import { ShowUpdateComponent } from './pages/show-update/show-update.component';

const routes: Routes = [
  { 
    path: '', 
    component: MainComponent,
    children: [
      { path: '', component: ListComponent },
      { path: ':id', component: ShowUpdateComponent },
      { path: '**', redirectTo: '' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
