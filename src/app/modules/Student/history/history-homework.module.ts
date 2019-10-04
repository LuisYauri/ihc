import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HistoryHomeworkComponent} from './pages/HistoryHomework/history-homework.component';
import {SharedModule} from '../../../shared/shared.module';
import {HistoryHomeworkRoutingModule} from './history-homework-routing.module';
import {ModalHistoryComponent} from './components/Modal/modal-history.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [HistoryHomeworkComponent, ModalHistoryComponent],
  imports: [
    SharedModule,
    CommonModule,
    HistoryHomeworkRoutingModule,
    FormsModule
  ],
  entryComponents: [ModalHistoryComponent]
})
export class HistoryHomeworkModule {
}
