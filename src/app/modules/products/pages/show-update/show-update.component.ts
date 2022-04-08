import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
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
export class ShowUpdateComponent implements OnInit, AfterViewInit {

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

  @ViewChild('updateButton') updateButton!: ElementRef<HTMLButtonElement>;

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

  ngAfterViewInit(): void {
    this.updateButton.nativeElement.disabled = true;
  }

  select(uid: any){
    console.log(uid)
  } 

  changeMode(){
    if(this.isFormDisabled){
      this.name?.enable();
      this.price?.enable();
      this.stock?.enable();
      this.active?.enable();
      this.category?.enable();
      this.updateButton.nativeElement.disabled = false;
    } else {
      this.name?.disable();
      this.price?.disable();
      this.stock?.disable();
      this.active?.disable();
      this.category?.disable();
      this.updateButton.nativeElement.disabled = true;
    }
    this.isFormDisabled = !this.isFormDisabled;
  }

}
