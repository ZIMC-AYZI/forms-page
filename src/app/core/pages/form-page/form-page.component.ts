import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  OnInit,
} from '@angular/core';
import { MatCard, MatCardContent } from '@angular/material/card';
import {
  AbstractControl,
  AsyncValidatorFn,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { FormItemComponent } from '../../components/form-item/form-item.component';
import { MatButton, MatFabButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { AsyncPipe, NgForOf } from '@angular/common';
import {
  catchError,
  debounceTime,
  map,
  Observable,
  of,
  Subject,
  switchMap,
  takeWhile,
  tap,
  timer,
} from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RemainingTimerPipe } from '@shared/pipes/remaining-timer.pipe';
import { CustomValidators } from '@shared/validators/custom-validators';
import { UserFormService } from '../../services/user-form.service';
import { FormItem } from '@shared/models/user-form.model';
import {
  DEBOUNCE_TIME,
  FORMS_SUBMIT_REQUEST_DURATION,
  MAX_AVAILABLE_FORMS,
} from '@shared/consts/general-consts.config';

@Component({
  selector: 'app-form-page',
  standalone: true,
  imports: [
    FormItemComponent,
    MatButton,
    MatIcon,
    MatFabButton,
    MatCard,
    MatCardContent,
    NgForOf,
    AsyncPipe,
    RemainingTimerPipe,
  ],
  templateUrl: './form-page.component.html',
  styleUrl: './form-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormPageComponent implements OnInit {
  public generalForm!: FormArray<FormGroup<FormItem>>;

  public pending = false;
  public timeRemain$!: Observable<number>;
  public requestDuration = FORMS_SUBMIT_REQUEST_DURATION;
  public maxAvailableForms = MAX_AVAILABLE_FORMS;
  private triggerFormSubmitSubj: Subject<boolean> = new Subject<boolean>();

  constructor(
    private fb: FormBuilder,
    private destroyRef: DestroyRef,
    private cdr: ChangeDetectorRef,
    private userFormService: UserFormService,
  ) {}

  public get getAllFormGroups(): FormGroup<FormItem>[] {
    return this.generalForm.controls as FormGroup<FormItem>[];
  }

  public ngOnInit(): void {
    this.formSubmitListener();
    this.initializeGeneralForm();
  }

  public generateNewForm(): void {
    this.generalForm.push(
      this.fb.group<FormItem>({
        country: new FormControl<string | null>(null, [
          Validators.required,
          CustomValidators.countryValidation(),
        ]),
        username: new FormControl<string | null>(
          null,
          [Validators.required],
          [this.checkUsername()],
        ),
        birthday: new FormControl<Date | null>(null, [Validators.required]),
      }),
    );
  }

  public submitAllForms(): void {
    this.pending = true;

    this.timeRemain$ = timer(0, 1000).pipe(
      takeUntilDestroyed(this.destroyRef),
      map((value) => this.requestDuration - value),
      tap((val) => {
        if (!val) {
          this.pending = false;
          this.triggerFormSubmitSubj.next(true);
          this.cdr.detectChanges();
        }
      }),
      takeWhile((val) => !!val && this.pending),
    );
  }

  public cancelRequest(): void {
    this.pending = false;
    this.cdr.detectChanges();
  }

  public formItemRemove(idx: number): void {
    this.generalForm.removeAt(idx);
  }

  private checkUsername(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      if (!control.value) {
        return of(null);
      }
      return of(control.value).pipe(
        debounceTime(DEBOUNCE_TIME),
        switchMap((username) => this.userFormService.checkUserName(username)),
        map((response: any) =>
          response.isAvailable ? null : { usernameTaken: true },
        ),
        catchError(() => of(null)),
      );
    };
  }

  private initializeGeneralForm(): void {
    this.generalForm = this.fb.array<FormGroup<FormItem>>([
      this.fb.group<FormItem>({
        country: new FormControl<string | null>(null, [
          Validators.required,
          CustomValidators.countryValidation(),
        ]),
        username: new FormControl<string | null>(
          null,
          [Validators.required],
          [this.checkUsername()],
        ),
        birthday: new FormControl<Date | null>(null, [Validators.required]),
      }),
    ]);
  }

  private formSubmitListener(): void {
    this.triggerFormSubmitSubj
      .asObservable()
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        switchMap(() =>
          this.userFormService.submitForms(this.generalForm.getRawValue()),
        ),
      )
      .subscribe((response) => {
        this.initializeGeneralForm();
      });
  }
}
