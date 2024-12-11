import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/user';

const CRED_KEY = 'TASK_CRED';

@Injectable({
  providedIn: 'root',
})
export class CredentialsService {
  private _credentials: IUser | null = null;

  constructor() {
    this.getCredentioals();
  }

  get isAthorized() {
    return !!this._credentials;
  }

  get credentioals() {
    return this._credentials;
  }

  setCredentials(user: IUser) {
    if (user) {
      localStorage.setItem(CRED_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(CRED_KEY);
    }
  }

  private getCredentioals() {
    const creds = localStorage.getItem(CRED_KEY) || '';

    if (creds) {
      this._credentials = JSON.parse(creds);
    }
  }
}
