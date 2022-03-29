import { AbstractControl, AsyncValidator, ValidationErrors } from "@angular/forms";
import { Observable } from "rxjs";

export class EmailAsyncValidator implements AsyncValidator{
    
    validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
        throw new Error("Method not implemented.");
    }

}