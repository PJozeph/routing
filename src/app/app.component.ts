import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'routing-demo';

  private router: Router = inject(Router);

  navigateToAnalysis() {
    console.log('Navigating to analysis');
    this.router.navigate(['analysis']);
  }

  navigateToHisory() {
    this.router.navigate(['history']);
  }
}
