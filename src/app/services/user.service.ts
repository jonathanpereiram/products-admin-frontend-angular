import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { UserRoot } from '../modules/users/interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _targetURL: string = environment.targetURL;

  constructor(private http: HttpClient) { }

  getAllUsers(page: number = 0, limit = 0): Observable<UserRoot> {
    const url: string = `${this._targetURL}/api/users`;

    const params: HttpParams = new HttpParams().set('page', page).set('limit', limit);

    return this.http.get<UserRoot>(url, { params });

  }
}
