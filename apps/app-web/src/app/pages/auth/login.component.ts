import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from '@angular-ddd/application';

@Component({
  selector: 'app-web-login',
  standalone:true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm = new FormGroup({
    phone: new FormControl('')
  });

  authService = inject(AuthenticationService)

  

  onSubmit(){
    console.log(this.loginForm)
    this.authService.loginOTP().subscribe();
  }
}
