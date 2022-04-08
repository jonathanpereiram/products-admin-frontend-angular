import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../../services/user.service';
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

  users: User[] = [];

  numbersOfPagination: number = 0;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _userService: UserService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this._activatedRoute.queryParams.subscribe(params => {
      
      const { page = '1' } = params;

      const regex = new RegExp('^[0-9]+$');

      if(!page || !regex.test(page)){
        this._router.navigate(['users'], { queryParams: { page: '1' }});
        return;
      }

      let pageNumber = parseInt(page);

      pageNumber = pageNumber - 1;

      if(pageNumber < 0){
        pageNumber = 0;
      }
      
      const limit = 5;

      if(pageNumber != 0){
        pageNumber = pageNumber * limit;
      }
      
      this._userService.getAllUsers(pageNumber, limit)
        .subscribe(users => {
          this.numbersOfPagination = Math.ceil(users.data.countDocuments / limit);

          this.users = users.data.items;
      });
    })
    
  }

}
