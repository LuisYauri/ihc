import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../../shared/shared.module';
import {HomeworkRoutingModule} from './homework-routing.module';
import {HomeworkComponent} from './pages/Homework/homework.component';
import { ModalHomeworkComponent } from './components/Modal/modal-homework.component';

@NgModule({
  declarations: [HomeworkComponent, ModalHomeworkComponent],
  imports: [
    SharedModule,
    CommonModule,
    HomeworkRoutingModule,
  ],
  entryComponents: [ModalHomeworkComponent]
})
export class HomeworkModule {
}
