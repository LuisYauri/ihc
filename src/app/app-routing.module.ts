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
    component: StudentComponent
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
