import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './layouts/Login/login.component';
import {LayoutsModule} from './layouts/layouts.module';
import {SharedModule} from './shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {StudentComponent} from './layouts/Student/student.component';
import {TeacherComponent} from './layouts/Teacher/teacher.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'student',
    component: StudentComponent,
    children: [
      {
        path: 'homework',
        loadChildren: 'src/app/modules/Student/homework/homework.module#HomeworkModule',
      },
      {
        path: 'history-homework',
        loadChildren: 'src/app/modules/Student/history/history-homework.module#HistoryHomeworkModule',
      },
      {
        path: 'courses',
        loadChildren: 'src/app/modules/Student/courses/courses.module#CoursesModule',
      },
    ],
  },
  {
    path: 'teacher',
    component: TeacherComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
