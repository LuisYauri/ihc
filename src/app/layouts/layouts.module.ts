import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {LoginComponent} from './Login/login.component';
import {TeacherComponent} from './Teacher/teacher.component';
import {StudentComponent} from './Student/student.component';

import {LayoutModule} from '../core/components/LayoutComponents/layout.module';
import {FormsModule} from '@angular/forms';

const COMPONENTS = [LoginComponent, TeacherComponent, StudentComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    SharedModule,
    LayoutModule,
    FormsModule
  ],
  exports: [...COMPONENTS],
})
export class LayoutsModule {
}
