import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styles: [
  ]
})
export class TableComponent implements OnInit {

  private _tableData: any[] = [];

  @Input() tableHeaders: string[] = [];
  @Input() 
  get tableData(): any[] { return this._tableData }
  set tableData(value: any[]) {
    this._tableData = value;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
