import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { isInvalidEmailValidator } from '../../../shared/validators/input-validator';

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
    email:    ['', [Validators.required]],
    password: ['', [Validators.required]]
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  submit(){
    console.log(this.loginForm.controls['email'].errors);
    console.log('request');
    this.authService.login().subscribe(auth => {
      console.log(auth)
    })
  }

}
