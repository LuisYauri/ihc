import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryHomeworkComponent } from './pages/HistoryHomework/history-homework.component';
import {SharedModule} from '../../../shared/shared.module';
import {HistoryHomeworkRoutingModule} from './history-homework-routing.module';



@NgModule({
  declarations: [HistoryHomeworkComponent],
  imports: [
    SharedModule,
    CommonModule,
    HistoryHomeworkRoutingModule
  ]
})
export class HistoryHomeworkModule { }
