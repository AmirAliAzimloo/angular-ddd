import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

import { environment } from '@angular-ddd/environments';
import { AuthenticationService } from '@angular-ddd/application';

@Component({
  imports: [RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'app-web';

  authenticationService = inject(AuthenticationService);
  

  showEnv(){
    this.authenticationService.loginOTP().subscribe();
    console.log(environment.apiUrl)
  }

}
