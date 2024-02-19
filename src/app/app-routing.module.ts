import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'history',
    loadChildren: () =>
      import('./todo-history/todo-history.module').then(
        (m) => m.TodoHistoryModule
      ),
  },
  {
    path: 'analysis',
    loadChildren: () =>
      import('./todo-analysis/todo-analysis.module').then(
        (module) => module.TodoAnalysisModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
