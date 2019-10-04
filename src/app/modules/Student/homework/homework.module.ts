import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../../shared/shared.module';
import {HomeworkRoutingModule} from './homework-routing.module';
import {HomeworkComponent} from './pages/Homework/homework.component';


@NgModule({
  declarations: [HomeworkComponent],
  imports: [
    SharedModule,
    CommonModule,
    HomeworkRoutingModule,
  ]
})
export class HomeworkModule {
}
