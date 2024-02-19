import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalysisHomeComponent } from './analysis-home/analysis-home.component';
import { AnalysisRoutingModule } from './analysis-routing.module';
import { FooComponent } from './foo/foo.component';


@NgModule({
  declarations: [
    AnalysisHomeComponent,
    FooComponent
  ],
  imports: [
    CommonModule,
    AnalysisRoutingModule
  ]
})
export class TodoAnalysisModule { }
