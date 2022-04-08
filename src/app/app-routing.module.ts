import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { AutenticatedGuard } from './guards/autenticated.guard';

const routes: Routes = [
  {
    path: 'auth', 
    canLoad: [AutenticatedGuard], 
    canActivate: [AutenticatedGuard], 
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  { 
    path: 'products', 
    canLoad: [AuthGuard], 
    canActivate: [AuthGuard], 
    loadChildren: () => import('./modules/products/products.module').then(m => m.ProductsModule) },
  { 
    path: 'categories', 
    canLoad: [AuthGuard], 
    canActivate: [AuthGuard], 
    loadChildren: () => import('./modules/categories/categories.module').then(m => m.CategoriesModule) },
  { 
    path: 'users', 
    canLoad: [AuthGuard], 
    canActivate: [AuthGuard], 
    loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule) },
  {
    path: '**',
    redirectTo: 'auth'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
