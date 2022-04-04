import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(
    private _authService: AuthService,
    private _router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
      return this._authService.isLogin()
        .pipe(
          tap(auth => {
            if(!auth){
              this._router.navigateByUrl('/auth/login');
            }
          })
        )

  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> {
      return this._authService.isLogin()
      .pipe(
        tap(auth => {
          if(!auth){
            this._router.navigateByUrl('/auth/login');
          }
        })
      )
  }
}
