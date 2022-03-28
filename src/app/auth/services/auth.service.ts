import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _targetURL: string = environment.targetURL;

  constructor(private http: HttpClient) { }

  login(): Observable<any>{
    const url: string = `${this._targetURL}/api/auth/login`;
    return this.http.post(url, {});
  }
}
