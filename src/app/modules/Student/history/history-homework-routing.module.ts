import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HistoryHomeworkComponent} from './pages/HistoryHomework/history-homework.component';

const routes: Routes = [
  {
    path: '',
    component: HistoryHomeworkComponent,
    data: {title:'HistoryHomework'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoryHomeworkRoutingModule {
}
