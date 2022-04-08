import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [`
    nav {
      margin-top: 10px;
    }
  `]
})
export class ListComponent implements OnInit {

  products: Product[] = [];

  numbersOfPagination: number = 0;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _productService: ProductService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this._activatedRoute.queryParams.subscribe(params => {

      const { page = '1' } = params;

      const regex = new RegExp('^[0-9]+$');

      if(!page || !regex.test(page)){
        this._router.navigate(['products'], { queryParams: { page: '1' }});
        return;
      }

      let pageNumber = parseInt(page);

      pageNumber = pageNumber - 1;

      if(pageNumber < 0){
        pageNumber = 0;
      }
      
      const limit = 5;

      if(pageNumber != 0){
        pageNumber = pageNumber * limit;
      }
      
      this._productService.getProducts(pageNumber, limit)
        .subscribe(products => {

          this.numbersOfPagination = Math.ceil(products.data.countDocuments / limit);

          this.products = products.data.items;
      });
    })
  }

}
