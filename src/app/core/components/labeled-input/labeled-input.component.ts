import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-labeled-input',
  standalone: true,
  imports: [],
  templateUrl: './labeled-input.component.html',
  styleUrl: './labeled-input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LabeledInputComponent {}
