import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [`
    .login-form {
    width: 340px;
    margin: 50px auto;
  	font-size: 15px;
    }
    .login-form form {
        margin-bottom: 15px;
        background: #f7f7f7;
        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
        padding: 30px;
    }
    .login-form h2 {
        margin: 0 0 15px;
    }
    .form-control, .btn {
        min-height: 38px;
        border-radius: 2px;
    }
    .btn {        
        font-size: 15px;
        font-weight: bold;
    }
  `]
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = this.fb.group({
    email:    ['jpereira@gmail.com', [Validators.required]],
    password: ['123123', [Validators.required]]
  });

  loading: boolean = false

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  submit(){
    if(!this.loginForm.touched){
      this.loginForm.markAllAsTouched();
    }

    if(this.loginForm.invalid){
      return;
    }

    this.loading = true;

    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;

    this.authService.login(email, password).subscribe(auth => {
      if(!auth.ok){
        this.loading = false;
      } else {
        this.router.navigate(['products']);
      }
    })
  }

}
