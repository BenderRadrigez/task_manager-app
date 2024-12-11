import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CredentialsService } from '../../services/credentials.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  router = inject(Router);
  credService = inject(CredentialsService);

  exitFromUserPage(){
    console.log(this.credService.credentioals);
    
    // this.router.navigate(['authorization']);
  }
}
