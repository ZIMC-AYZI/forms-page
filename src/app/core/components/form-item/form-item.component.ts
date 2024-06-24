import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { DatePickerComponent } from '../date-picker/date-picker.component';
import { LabeledInputComponent } from '../labeled-input/labeled-input.component';
import { MatCard, MatCardContent } from '@angular/material/card';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { GetControlPipe } from '@shared/pipes/get-control.pipe';
import { InputValidationDirective } from '@shared/directives/input-validation.directive';
import { MatButton, MatFabButton } from '@angular/material/button';
import { FormItem } from '@shared/models/user-form.model';

@Component({
  selector: 'app-form-item',
  standalone: true,
  imports: [
    DatePickerComponent,
    LabeledInputComponent,
    MatCard,
    MatCardContent,
    ReactiveFormsModule,
    GetControlPipe,
    InputValidationDirective,
    MatFabButton,
    MatButton,
  ],
  templateUrl: './form-item.component.html',
  styleUrl: './form-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormItemComponent {
  @Input() formGroup!: FormGroup<FormItem>;
  @Input() disabled = false;
  @Input() disableRemove = false;
  @Output() removeItem: EventEmitter<void> = new EventEmitter<void>();
}
