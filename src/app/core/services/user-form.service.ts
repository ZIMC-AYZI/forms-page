import { Injectable } from '@angular/core';
import { AbstractHttpComponent } from '@shared/helpers/abstract-http-component';
import { Observable } from 'rxjs';
import {
  ICheckUserNamePayload,
  ICheckUserNameResponse,
  ISubmitFormPayload,
  ISubmitFormResponse,
} from '@shared/models/user-api-form.model';

@Injectable({
  providedIn: 'root',
})
export class UserFormService extends AbstractHttpComponent {
  public checkUserName(
    username: ICheckUserNamePayload,
  ): Observable<ICheckUserNameResponse> {
    return this.httpPostRequest('/api/checkUsername', { username });
  }

  public submitForms(
    formsValue: ISubmitFormPayload[],
  ): Observable<ISubmitFormResponse> {
    return this.httpPostRequest('/api/submitForm', formsValue);
  }
}
