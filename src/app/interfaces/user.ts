export interface IUser {
  login: string;
  password: string;
  name?: string;
  age?: number;
  email?: string;
  projects?: [];
  notes?: [];
}
