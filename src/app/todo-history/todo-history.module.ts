import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryRoutingModule } from './todo-history.routing.module';
import { HistoryHomeComponent } from './history-home/history-home.component';

@NgModule({
  declarations: [HistoryHomeComponent],
  imports: [CommonModule, HistoryRoutingModule],
})
export class TodoHistoryModule {}
