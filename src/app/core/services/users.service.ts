import { environment } from './../../../environments/environment.prod';
import { User } from './../../shared/models/user.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private readonly USER_API = `${environment.serverApiUrl}/users`;

  constructor(private http: HttpClient) { }

  create(user: User) {
    return this.http.post<User>(`${this.USER_API}`, user);
  }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.USER_API);
  }

  get(id: number): Observable<User> {
    return this.http.get<User>(`${this.USER_API}/${id}`);
  }

  update(id: number, user: User): Observable<User> {
    return this.http.put<User>(`${this.USER_API}/${id}`, user);
  }

  delete(id: number): Observable<User> {
    return this.http.delete<User>(`${this.USER_API}/${id}`);
  }

}
