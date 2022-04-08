import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-update',
  templateUrl: './show-update.component.html',
  styles: []
})
export class ShowUpdateComponent implements OnInit {

  productForm: FormGroup = this._fb.group({
    name: ['', Validators.required]
  })

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _fb: FormBuilder
  ) { }

  get name() {
    return this.productForm.get('name');
  }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(params => {
      console.log(params);
    })
  }

}
