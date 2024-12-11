import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from '@angular-ddd/application';

import { Store } from '@ngrx/store';
import { AppState, selectUser, saveUser } from '@angular-ddd/persistence';

@Component({
  selector: 'app-web-login',
  standalone:true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    phone: new FormControl('')
  });

  authService = inject(AuthenticationService);

  store = inject(Store<AppState>);

  user$ = this.store.select(selectUser);

  ngOnInit() {
    this.user$.subscribe((user) => {
      console.log('User changed:', user);
    });
  }

  onSubmit(){
    console.log(this.loginForm.value);
    this.store.dispatch(
      saveUser({
        userId: '123', 
        nationalId: '456',
        username: '0912123456',
        firstName: 'John',
        lastName: 'Doe',
      })
    );
    this.authService.loginOTP().subscribe();
  }
}
