import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalysisHomeComponent } from './analysis-home/analysis-home.component';
import { FooComponent } from './foo/foo.component';
import { authGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    component: AnalysisHomeComponent,
},
{
    path: 'foo/:id',
    canActivate: [authGuard],
    component: FooComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnalysisRoutingModule {}
