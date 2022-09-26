import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';
import { environment } from 'src/environments/environment';
import { RegisterRequestInterface } from '../types/registerRequest.interface';
import { HttpClient } from '@angular/common/http';
import { AuthResponseInterface } from '../types/AuthResponse.interface';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
    const url = environment.apiUrl + 'users';
    return this.http
      .post<AuthResponseInterface>(url, data)
      .pipe(map((res: AuthResponseInterface) => res.user));
  }
}
