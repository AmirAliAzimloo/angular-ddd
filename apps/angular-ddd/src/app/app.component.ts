import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";
import { AccountComponent } from "./pages/account/account.component";

@Component({
  imports: [RouterModule, HomeComponent, AccountComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-ddd';
}
