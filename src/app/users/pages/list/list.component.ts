import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { User } from '../../interfaces/user.interface';
import { UserTable } from '../../interfaces/table.interface';

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

  tableHeaders: string[] = ['name', 'email'];

  users: UserTable[] = [];

  numbersOfPagination: number = 0;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _userService: UserService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this._activatedRoute.queryParams.subscribe(params => {
      
      let { page = '0' } = params;

      if(!page){
        console.log('no viene page')
        this._router.navigate(['users'], { queryParams: { page: '0', skip: '3'}});
      }

      const reg = new RegExp('^[0-9]+$');

      if(reg.test(page)){
        console.log('regex fallo')
        this._router.navigate(['users'], { queryParams: { page: '0', skip: '3'}});
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
        
          this.users = users.data.items
            .map<UserTable>(usr => ({name: usr.name, email: usr.email}));
      });
    })
    
  }

}
