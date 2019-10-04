import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeworkComponent} from './pages/Homework/homework.component';

const routes: Routes = [
  {
    path: '',
    component: HomeworkComponent,
    data: {title:'HomeWork'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeworkRoutingModule {
}
