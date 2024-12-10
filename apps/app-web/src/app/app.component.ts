import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { environment } from '@angular-ddd/environments';

@Component({
  imports: [RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'app-web';
  

  showEnv(){
    console.log(environment.apiUrl)
  }

}
