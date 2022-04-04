import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { AutenticatedGuard } from './guards/autenticated.guard';

const routes: Routes = [
  {
    path: 'auth', canLoad: [AutenticatedGuard], canActivate: [AutenticatedGuard], loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  { path: 'users', canLoad: [AuthGuard], canActivate: [AuthGuard], loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
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
