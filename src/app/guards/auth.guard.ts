import { Router } from '@angular/router';
import { CredentialsService } from '../services/credentials.service';
import { inject } from '@angular/core';

export const AuthGuard = () => {
  const credServise = inject(CredentialsService);
  const router = inject(Router);
  
  if (!credServise.isAthorized) {
    router.navigate(['authorization']);
  }
};
