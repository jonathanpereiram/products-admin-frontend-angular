import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [`
    .nav-link {
      cursor: pointer
    }
  `]
})
export class NavbarComponent implements OnInit {

  get auth() {
    return this._authService.auth.data;
  }

  constructor(
    private _authService: AuthService,
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  logout() {
    this._authService.logout();
    this._router.navigateByUrl('auth/login');
  }

}
