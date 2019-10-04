import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CoursesComponent} from './pages/Courses/courses.component';
import {ViewCoursesComponent} from './pages/ViewCourses/view-courses.component';


const routes: Routes = [
  {
    path: '',
    component: CoursesComponent,
    data: {title:'Courses'}
  },
  {
    path: 'view',
    component: ViewCoursesComponent,
    data: {title:'ViewCourses'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursesRoutingModule {

}
