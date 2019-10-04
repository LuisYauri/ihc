import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CoursesComponent} from './pages/Courses/courses.component';


const routes: Routes = [
  {
    path: '',
    component: CoursesComponent,
    data: {title:'Courses'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursesRoutingModule {
}
