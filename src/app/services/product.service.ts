import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Product } from '../modules/products/interfaces/product.interface';
import { DataObject, DataItems } from '../interfaces/data.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _targetURL: string = environment.targetURL;

  constructor(private _http: HttpClient) { }

  getProducts(page: number = 0, limit = 0): Observable<DataItems<Product>> {
    const url = `${this._targetURL}/api/products`;

    const params: HttpParams = new HttpParams()
      .set('page', page)
      .set('limit', limit)
      .set('fields', 'name,price');

    return this._http.get<DataItems<Product>>(url, { params });
  }

  getProductById(uid: string = ''): Observable<DataObject<Product>> {
    const url = `${this._targetURL}/api/products/${uid}`;
    return this._http.get<DataObject<Product>>(url);
  }
}
