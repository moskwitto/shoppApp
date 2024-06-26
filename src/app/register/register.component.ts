// src/app/register/register.component.ts
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [AuthService]
})
export class RegisterComponent {
  user: User = { name: '', email: '', password: '' };  // 默认值为空字符串

  constructor(private authService: AuthService, private http: HttpClient, private router: Router) { }

  onSubmit(): void {
    this.authService.register(this.user).subscribe(
      data => {
        console.log('Registration successful', data);
        alert('Registration successful, please log in.');
        this.router.navigate(['/login']);
      },
      error => {
        console.error('Registration failed', error);
        console.log("After trying to sign up")
        // alert('Registration failed, please try again later.');
      }
    );
  }

  ToLogin(): void {
    this.router.navigate(['/login']);
  }
}
