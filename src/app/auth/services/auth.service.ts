import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of, switchMap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _targetURL: string = environment.targetURL;

  constructor(private http: HttpClient) { }

  login(email: string = '', password: string = ''): Observable<any> {
    const url: string = `${this._targetURL}/api/auth/login`;
    return this.http.post(url, { email, password})
      .pipe(
        map(res => ({
          ok: true,
          ...res
        })),
        catchError(err => of({
          ok: false,
          msg: err.error.errors[0].msg
        }))
      );
  }

  register(name: string = '', email: string = '', password: string = ''): Observable<any> {
    const url: string = `${this._targetURL}/api/auth/register`;
    return this.http.post(url, { name, email, password})
      .pipe(
        map(res => ({
          ok: true,
          ...res
        })),
        catchError(err => of({
          ok: false,
          msg: err.error.errors[0].msg
        }))
      );
  }
}
