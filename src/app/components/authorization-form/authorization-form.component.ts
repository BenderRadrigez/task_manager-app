import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HttpService } from '../../services/http.service';
import { Router } from '@angular/router';
import { IUser } from '../../interfaces/user';
import { CredentialsService } from '../../services/credentials.service';


@Component({
  selector: 'app-authorization-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  providers: [HttpService],
  templateUrl: './authorization-form.component.html',
  styleUrl: './authorization-form.component.scss',
})
export class AuthorizationFormComponent {
   
  authorizationForm: FormGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    checkbox: new FormControl(false, Validators.requiredTrue),
  });


  private router = inject(Router);
  private credService = inject(CredentialsService);
  private httpService =  inject(HttpService);

  constructor() {}

  submit() {
    if(this.authorizationForm.valid) {
      this.login(this.authorizationForm.getRawValue());
        
    }
   
  }


  private login(user: IUser){
    this.httpService
    .login(user)
    .subscribe(res => {
      console.log(res);
      this.credService.setCredentials(user);
      this.router.navigate(['']);
    });
  }



}
