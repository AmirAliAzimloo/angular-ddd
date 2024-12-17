import { TestService } from '@angular-ddd/platform';
import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  imports: [RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'app-web';
  private api_base: string = "";

  constructor(
    private testService: TestService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    // Set the api_base value
    this.api_base = this.testService.ApiUrl;

    if (!isPlatformBrowser(this.platformId)) {
      // Server-side execution
      console.log("SERVER_SIDE: API URL from DI:", this.testService.ApiUrl);
    } else {
      // Client-side execution
      console.log("CLIENT_SIDE: API URL from DI:", this.api_base);
    }


  }
}
