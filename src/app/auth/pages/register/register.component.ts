import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { confirmPassword, isInvalidEmailValidator } from '../../../shared/validators/input-validator';
import { AuthService } from '../../services/auth.service';

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

  registerForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, isInvalidEmailValidator]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required]]
    }, 
    {
      validators: confirmPassword
    }
  )

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
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

    const name = this.registerForm.get('name')?.value;
    const email = this.registerForm.get('email')?.value;
    const password = this.registerForm.get('password')?.value;

    this.authService.register(name, email, password).subscribe(res => {
      console.log(res);
    })
  }

}
