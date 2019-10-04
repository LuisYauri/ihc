import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from 'src/app/shared/shared.module';

import {MenuLeftTeacherComponent} from './Teacher/Menu/MenuLeftTeacher/menu-left-teacher.component';
import {MenuLeftStudentComponent} from './Student/Menu/MenuLeftStudent/menu-left-student.component';

const COMPONENTS = [MenuLeftTeacherComponent, MenuLeftStudentComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [SharedModule, FormsModule, ReactiveFormsModule,],
  exports: [...COMPONENTS],
})
export class LayoutModule {
}
