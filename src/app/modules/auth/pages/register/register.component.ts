import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { confirmPassword, isInvalidEmailValidator } from '../../../shared/validators/input-validator';
import { AuthService } from '../../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
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
    .error-text {
      color: red
    }
  `]
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup = this._fb.group({
    name: ['john pereira', Validators.required],
    email: ['jpereira@gmail.com', [Validators.required, isInvalidEmailValidator]],
    password: ['123123', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['123123', [Validators.required]]
    }, 
    {
      validators: confirmPassword
    }
  )

  loading: boolean = false;

  constructor(
    private _fb: FormBuilder,
    private _authService: AuthService,
    private _router: Router
  ) { }

  get name() {
    return this.registerForm.get('name')
  }

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get confirmPassword() {
    return this.registerForm.get('confirmPassword');
  }

  ngOnInit(): void {
  }

  submit(){
    if(!this.registerForm.touched){
      this.registerForm.markAllAsTouched(); 
    }

    if(this.registerForm.invalid){
      return;
    }

    this.loading = true;

    const name = this.registerForm.get('name')?.value;
    const email = this.registerForm.get('email')?.value;
    const password = this.registerForm.get('password')?.value;

    this._authService.register(name, email, password)
      .subscribe(res => {
        this.loading = false;
        this._router.navigateByUrl('users');
    })
  }

}
