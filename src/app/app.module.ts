import {BrowserModule} from '@angular/platform-browser';
import {NgModule, LOCALE_ID} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

//Icons
import {IconDefinition} from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';

import {NZ_I18N, es_ES as localeZorro, NZ_ICONS} from 'ng-zorro-antd';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {registerLocaleData} from '@angular/common';
import es from '@angular/common/locales/es';

const LOCALE_PROVIDERS = [
  {provide: LOCALE_ID, useValue: 'es'},
  {provide: NZ_I18N, useValue: localeZorro},
];

registerLocaleData(es);

/**
 * AntDesign Icons
 */
const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key]);


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    ...LOCALE_PROVIDERS,
    {provide: NZ_ICONS, useValue: icons},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
