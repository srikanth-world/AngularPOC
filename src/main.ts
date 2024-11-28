import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { HomeComponent} from './app/features/home/home.component';
import { CheckerComponent } from './app/features/checker/checker.component';
import { MakerComponent } from './app/features/maker/maker.component';
import { RoleGuard } from './app/core/guards/role.guard';
import { AuthService } from './app/core/services/auth.service';
import { LoginComponent } from './app/features/login/login.component';

const appRoutes: Routes = [ 
  { path: 'home', component: HomeComponent }, 
  { path: 'checker', component: CheckerComponent, canActivate: [RoleGuard], data: { expectedRole: 'checker' } }, 
  { path: 'maker', component: MakerComponent, canActivate: [RoleGuard], data: { expectedRole: 'maker' } }, 
  { path: 'login', component: LoginComponent }, 
  { path: '', redirectTo: '/login', pathMatch: 'full' } 
];

  const bootstrapConfig = { providers: [ provideRouter(appRoutes), importProvidersFrom(RoleGuard, AuthService) ] };

  bootstrapApplication(AppComponent, {...appConfig, ...bootstrapConfig })
  .catch((err) => console.error(err));
