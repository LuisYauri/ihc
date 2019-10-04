import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './pages/Courses/courses.component';
import {SharedModule} from '../../../shared/shared.module';
import {CoursesRoutingModule} from './courses-routing.module';



@NgModule({
  declarations: [CoursesComponent],
  imports: [
    SharedModule,
    CommonModule,
    CoursesRoutingModule
  ]
})
export class CoursesModule { }
