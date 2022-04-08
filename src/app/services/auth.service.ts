import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Auth } from '../modules/auth/interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _targetURL: string = environment.targetURL;
  private _auth!: Auth;

  constructor(private http: HttpClient) { }

  get auth(): Auth {
    return { ...this._auth }
  }

  login(email: string = '', password: string = ''): Observable<any> {
    const url: string = `${this._targetURL}/api/auth/login`;
    return this.http.post<Auth>(url, { email, password})
      .pipe(
        tap(res => {
          this._auth = res;
          localStorage.setItem('token', res.data.token!);
        }),
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
    return this.http.post<Auth>(url, { name, email, password})
      .pipe(
        tap(res => {
          this._auth = res;
          localStorage.setItem('token', res.data.token!);
        }),
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

  logout(): void {
    localStorage.removeItem('token');
  }

  isLogin(): Observable<boolean> {
    
    const token = localStorage.getItem('token');
    
    if(!token){
      return of(false);
    }

    const headers = new HttpHeaders().set('x-token', token);
   
    const url: string = `${this._targetURL}/api/auth/validate`;
    
    return this.http.get<Auth>(url, { headers })
      .pipe(
        map(res => {
          this._auth = res;
          return true;
        }),
        catchError(_ => of(false))
      );

  }
}
