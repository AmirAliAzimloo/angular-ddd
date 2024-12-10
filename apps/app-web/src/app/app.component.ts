import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

import { environment } from '@angular-ddd/environments';
import { AuthenticationApiService } from '@angular-ddd/infrastructure';

@Component({
  imports: [RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'app-web';

  auth = inject(AuthenticationApiService);
  

  showEnv(){
    this.auth.loginOTPRequest().subscribe();
    console.log(environment.apiUrl)
  }

}
