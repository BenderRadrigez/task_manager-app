import { Component } from '@angular/core';
import { AuthorizationFormComponent } from '../../components/authorization-form/authorization-form.component';

@Component({
  selector: 'app-authorization-page',
  standalone: true,
  imports: [AuthorizationFormComponent],
  templateUrl: './authorization-page.component.html',
  styleUrl: './authorization-page.component.scss'
})
export class AuthorizationPageComponent {
  

}
