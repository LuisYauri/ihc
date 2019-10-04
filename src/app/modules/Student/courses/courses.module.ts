import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './pages/Courses/courses.component';
import {SharedModule} from '../../../shared/shared.module';
import {CoursesRoutingModule} from './courses-routing.module';
import { NzCardModule } from 'ng-zorro-antd/card';
import { ViewCoursesComponent } from './pages/view-courses/view-courses.component';

@NgModule({
  declarations: [CoursesComponent, ViewCoursesComponent],
  imports: [
    SharedModule,
    CommonModule,
    CoursesRoutingModule,
    NzCardModule
  ]
})
export class CoursesModule { }
