import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(public authService: AuthService) {}

  submit() { // Logic for checker to submit 
    console.log('Checker has submitted.'); }

    approve() { // Logic for maker to approve 
      console.log('Maker has approved.'); }
}
