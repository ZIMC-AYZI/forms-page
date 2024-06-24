import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Country } from '../enum/country';

export class CustomValidators {
  public static countryValidation(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const validCountries = Object.values(Country);
      const isValid = validCountries.includes(control.value);
      return isValid ? null : { invalidCountry: { value: control.value } };
    };
  }
}
