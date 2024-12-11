import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/user';
import { INote } from '../interfaces/note';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class HttpService {
  constructor(private http: HttpClient) {}

  login(user: IUser) {
    return this.http.post<string>('http://localhost:3000/api/login', user);
  }

  getNotes(username: string): Observable<[]>{
    return this.http.get(`http://localhost:3000/api/users/${username}/notes`)
    .pipe(map((data: any)=>{
      return data;
    }))
  }

  addNote(username: string, note: INote) {
    return this.http.post<string>(
      `http://localhost:3000/api/users/${username}/notes`,
      note
    );
  }
}
