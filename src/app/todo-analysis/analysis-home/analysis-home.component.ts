import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-analysis-home',
  templateUrl: './analysis-home.component.html',
  styleUrl: './analysis-home.component.scss',
})
export class AnalysisHomeComponent implements OnInit{
  private acivated: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    this.acivated.data.subscribe((data) => {
      console.log('data', data);
    });
  }
}
