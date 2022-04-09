import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../../services/product.service';
import { CategoryService } from '../../../../services/category.service';
import { Category } from '../../../categories/interfaces/category.interface';

@Component({
  selector: 'app-show-update',
  templateUrl: './show-update.component.html',
  styles: [`
    i {
      cursor: pointer;
    }
  `]
})
export class ShowUpdateComponent implements OnInit {

  productForm: FormGroup = this._fb.group({
    name: [{value: '', disabled: true } , Validators.required],
    price: [{value: '', disabled: true }, Validators.required],
    stock: [{value: '', disabled: true }, Validators.required],
    active: [{value: false, disabled: true }, Validators.required],
    category: [{value: '-1', disabled: true }, Validators.required]
  });

  categories: Category[] = [];

  isPencilHover: boolean = false;
  isDataLoaded: boolean = false;
  isFormDisabled: boolean = true;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _fb: FormBuilder,
    private _productService: ProductService,
    private _categoryService: CategoryService
  ) { }

  get name(): AbstractControl | null {
    return this.productForm.get('name');
  }

  get price(): AbstractControl | null {
    return this.productForm.get('price');
  }

  get stock(): AbstractControl | null {
    return this.productForm.get('stock')
  }

  get active(): AbstractControl | null {
    return this.productForm.get('active')
  }

  get category(): AbstractControl | null {
    return this.productForm.get('category');
  }

  ngOnInit(): void {
    
    this._activatedRoute.params.subscribe(({uid = ''}) => {

      this._categoryService.getCategories()
        .subscribe(category => {
          this.categories = category.data.items;
        });

      this._productService.getProductById(uid)
        .subscribe(product => {
          this.name?.setValue(product.data.name);
          this.price?.setValue(product.data.price);
          this.stock?.setValue(product.data.stock);
          this.active?.setValue(product.data.active);
          this.category?.setValue(product.data.category);

          setTimeout(() => {
            this.isDataLoaded = true;
          }, 1000);
          
        });
    });
  }

  changeMode(){
    if(this.isFormDisabled){
      this.name?.enable();
      this.price?.enable();
      this.stock?.enable();
      this.active?.enable();
      this.category?.enable();
    } else {
      this.name?.disable();
      this.price?.disable();
      this.stock?.disable();
      this.active?.disable();
      this.category?.disable();
    }
    this.isFormDisabled = !this.isFormDisabled;
  }

  updateProduct(){
    console.log(this.category?.value)
  }

}
