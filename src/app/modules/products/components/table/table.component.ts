import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styles: [`
    i {
      cursor: pointer;
    }
  `]
})
export class TableComponent implements OnInit {

  private _data: any[] = [];
  
  @Input() 
  get data(): any[] { return this._data; }
  set data(value: any[]) {
    this._data = value;
  }

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  deleteProduct(uid: string = ''): void {
    this._router.navigate(['products', uid])
  }

  showProduct(uid: string = ''): void {
    this._router.navigate(['products', uid])
  }
}