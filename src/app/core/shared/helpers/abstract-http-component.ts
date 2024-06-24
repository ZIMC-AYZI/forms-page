import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Params } from '@angular/router';
import { Observable, take } from 'rxjs';
import {inject} from "@angular/core";


export class AbstractHttpComponent {
  protected http = inject(HttpClient);

  public httpPostRequest<T, U>(url: string, body: T, params: Params = {}): Observable<U> {
    const headers = this.getHttpHeaders();

    return this.http.post<U>(url, body, { headers, params });
  }

  public httpGetRequest<T>(url: string, params: Params = {}): Observable<T> {
    const headers = this.getHttpHeaders();

    return this.http.get<T>(url, { headers, params });
  }

  public httpDeleteRequest<T>(url: string, params: Params = {}): Observable<T> {
    const headers = this.getHttpHeaders();

    return this.http.delete<T>(url, { headers, params });
  }

  public httpPatchRequest<T, U>(url: string, body: T): Observable<U> {
    const headers = this.getHttpHeaders();

    return this.http.patch<U>(url, body, { headers });
  }

  public getHttpHeaders(): HttpHeaders {
    return new HttpHeaders();
  }
}
