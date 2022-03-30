import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

const emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

export const isInvalidEmailValidator = (control: AbstractControl): ValidationErrors | null => {

        const regex: RegExp = new RegExp(emailPattern);
        const isInvalid = !regex.test(control.value);

        return isInvalid ? { emailInvalid: { value: control.value } } : null;
}

export const confirmPassword: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
        const password = control.get('password')?.value;
        const confirmPassword = control.get('confirmPassword')?.value;
        console.log('password',password);
        console.log('confirmPassword', confirmPassword)
        
        return password !== confirmPassword ? { isNotEqualsPassword: true } : null;
}