import { FormControl } from '@angular/forms';

export interface FormItem {
  country: FormControl<string | null>;
  username: FormControl<string | null>;
  birthday: FormControl<Date | null>;
}
