import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private role: string = '';

  constructor(private router: Router) {}

  login(role: string) {
    this.role = role;
    this.router.navigate(['/home']);
  }

  getRole() {
    return this.role;
  }

  isChecker() {
    return this.role === 'checker';
  }

  isMaker() {
    return this.role === 'maker';
  }
}
