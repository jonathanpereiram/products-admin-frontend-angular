import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
