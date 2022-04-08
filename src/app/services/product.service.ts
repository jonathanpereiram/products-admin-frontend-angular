import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

import { environment } from 'src/environments/environment';
import { ProductRoot } from '../modules/products/interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _targetURL: string = environment.targetURL;

  constructor(private _http: HttpClient) { }

  getProducts(page: number = 0, limit = 0){
    const url = `${this._targetURL}/api/products`;
    return this._http.get<ProductRoot>(url);
  }
}
