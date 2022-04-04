import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { User } from '../../interfaces/user.interface';

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

  users: User[] = [];
  numbersOfPagination: number = 0;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _userService: UserService
  ) { }

  ngOnInit(): void {
    this._activatedRoute.queryParams.subscribe(params => {
      let { page = 0} = params;

      page = page - 1;

      if(page < 0){
        page = 0;
      }

      const limit = 3;
 
      this._userService.getAllUsers(page, limit)
      .subscribe(users => {
        this.numbersOfPagination = users.data.countDocuments / limit;
        console.log('numbersOfPagination:', this.numbersOfPagination)
        this.users = users.data.items;
      })
    })
    
  }

}
