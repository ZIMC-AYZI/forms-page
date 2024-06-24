import {
  DestroyRef,
  Directive,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';
import { FormControl, FormControlStatus } from '@angular/forms';
import { distinctUntilChanged } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Directive({
  selector: '[appInputValidation]',
  standalone: true,
})
export class InputValidationDirective<T> implements OnInit {
  @Input() inputControl!: FormControl<T>;
  @Input() inputLabel!: 'Country' | 'Username' | 'Birthday';

  constructor(
    private renderer2: Renderer2,
    private elementRef: ElementRef,
    private destroyRef: DestroyRef,
  ) {}

  public ngOnInit(): void {
    const field = this.elementRef.nativeElement;
    const parent = field.parentNode;

    const errorWrapper = this.createField();
    const errorMessage = this.createErrorField();

    this.renderer2.setStyle(errorWrapper, 'display', 'none');
    this.renderer2.appendChild(errorWrapper, errorMessage);

    this.renderer2.appendChild(parent, errorWrapper);

    this.inputControl.statusChanges
      .pipe(distinctUntilChanged(), takeUntilDestroyed(this.destroyRef))
      .subscribe((formControlStatus: FormControlStatus) => {
        if (formControlStatus === 'VALID') {
          this.renderer2.setStyle(errorWrapper, 'display', 'none');
          return;
        }

        this.renderer2.setStyle(errorWrapper, 'display', 'block');
      });
  }

  private createField(): HTMLElement {
    const field = this.renderer2.createElement('div');

    this.renderer2.addClass(field, 'input-error');

    return field;
  }

  private createErrorField(): HTMLElement {
    const field = this.renderer2.createElement('p');

    this.renderer2.addClass(field, 'input-error__message');
    this.renderer2.setStyle(field, 'position', 'relative');
    this.renderer2.setProperty(
      field,
      'innerText',
      `Please provide a correct ${this.inputLabel}`,
    );

    return field;
  }
}
