import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

const emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

export function isInvalidEmailValidator(control: AbstractControl): ValidationErrors | null {
    
        console.log(control.value);

        const regex: RegExp = new RegExp(emailPattern);
        const isInvalid = !regex.test(control.value);

        return isInvalid ? { emailInvalid: { value: control.value } } : null;
}