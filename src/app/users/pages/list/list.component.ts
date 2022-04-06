import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  styles: [`
    nav {
      margin-top: 10px;
    }
  `]
})

export class ListComponent implements OnInit {

  users: {name: string, email: string}[] = [];
  tableHeaders: string[] = ['name', 'email'];
  numbersOfPagination: number = 0;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _userService: UserService
  ) { }

  ngOnInit(): void {
    this._activatedRoute.queryParams.subscribe(params => {
      
      let { page = 0 } = params;

      const a = parseInt(page)

      console.log('=>',a)

      if(a === NaN){
        return;
      }

      page = page - 1;

      if(page < 0){
        page = 0;
      }
      
      const limit = 3;

      if(page != 0){
        page = page * limit;
      }
      
      this._userService.getAllUsers(page, limit)
        .subscribe(users => {
          this.numbersOfPagination = users.data.countDocuments / limit;
        
          this.users = users.data.items.map(usr => ({name: usr.name, email: usr.email}));
      });
    })
    
  }

}
