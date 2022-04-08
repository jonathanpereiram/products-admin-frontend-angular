import { Component, OnInit, Input } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

  deleteProduct(uid: string = ''): void {
    console.log(uid)
  }
}