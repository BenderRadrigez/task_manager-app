import { Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { AuthorizationPageComponent } from './pages/authorization-page/authorization-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', component: MainPageComponent, canActivate: [AuthGuard]},
  {
    path: 'authorization',
    component: AuthorizationPageComponent,
  },
  { path: '**', component: NotFoundPageComponent },
];
