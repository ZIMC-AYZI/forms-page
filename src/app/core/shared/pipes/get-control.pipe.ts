import { Pipe, PipeTransform } from '@angular/core';
import { FormControl } from '@angular/forms';

@Pipe({
  name: 'getControl',
  standalone: true,
})
export class GetControlPipe<T> implements PipeTransform {
  transform(control: T): FormControl {
    return control as unknown as FormControl;
  }
}
