import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JwtModule } from '@auth0/angular-jwt';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { ServiceWorkerModule } from '@angular/service-worker';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { CoreModule } from './core/module/core.module';
import { AddToHomescreenModule } from './shared/partial/add-to-homescreen/add-to-homescreen.module';
import { environment } from '../environments/environment';
import { ErrorHandler } from './core/service/api/error-handler';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function tokenGetter() {
  return localStorage.getItem('access-token');
}


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter,
        // throwNoTokenError: true
      }
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    AppRoutingModule,
    CoreModule.forRoot(),
    AddToHomescreenModule
  ],
  providers: [
    ErrorHandler
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
