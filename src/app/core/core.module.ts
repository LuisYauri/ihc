import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import { LoginComponent } from './pages/Auth/Login/login.component';
import { ForgotComponent } from './pages/Auth/Forgot/forgot.component';
import { NotFoundComponent } from './pages/404/not-found.component';

const COMPONENTS = [];


@NgModule({
  declarations: [...COMPONENTS, LoginComponent, ForgotComponent, NotFoundComponent],
  imports: [
    SharedModule
  ]
})
export class CoreModule {
}
