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

  private _tableData: any[] = [];

  public tableHeaders: string[] = ['name', 'email', 'action'];
  
  @Input() 
  get tableData(): any[] { return this._tableData; }
  set tableData(value: any[]) {
    this._tableData = value;
  }

  constructor() { }

  ngOnInit(): void {
  }

  deleteUser(uid: string = ''): void {
    console.log(uid)
  }

}
