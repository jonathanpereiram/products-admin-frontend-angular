import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { DataItems } from '../interfaces/data.interface';
import { Category } from '../modules/categories/interfaces/category.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private _targetURL: string = environment.targetURL;

  constructor(private _http: HttpClient) { }

  getCategories(page: number = 0, limit = 0): Observable<DataItems<Category>> {
    const url = `${this._targetURL}/api/categories`;

    const params: HttpParams = new HttpParams()
      .set('page', page)
      .set('limit', limit)
      .set('fields', 'name');

    return this._http.get<DataItems<Category>>(url, { params });
  }
}
