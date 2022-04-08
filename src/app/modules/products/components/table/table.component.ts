import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styles: [
  ]
})
export class TableComponent implements OnInit {

  private _data: any[] = [];

  public tableHeaders: string[] = ['name', 'email', 'action'];
  
  @Input() 
  get data(): any[] { return this._data; }
  set data(value: any[]) {
    this._data = value;
  }

  constructor() { }

  ngOnInit(): void {
  }

  deleteUser(uid: string = ''): void {
    console.log(uid)
  }
}