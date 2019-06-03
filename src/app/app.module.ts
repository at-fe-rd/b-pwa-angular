import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, Injectable } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JwtModule } from '@auth0/angular-jwt';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient, HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { NgwWowModule } from 'ngx-wow';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { AuthModule } from './auth/auth.module';
import { FeatureModule } from './features/feature.module';
import { CoreModule } from './core/module/core.module';
import { Observable } from 'rxjs';
import { RouteReuseStrategy, Router, Scroll } from '@angular/router';
import { HomeRouteReuseStategy } from './features/home/home.reuse';
import { ViewportScroller } from '@angular/common';
import { first, timeout, map, filter } from 'rxjs/operators';
import { ErrorHandler } from './core/service/api/error-handler';
import { MatDialogModule } from '@angular/material';
import { DeviceDetectorModule } from 'ngx-device-detector';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AddToHomescreenModule } from './shared/partial/add-to-homescreen/add-to-homescreen.module';
import { environment } from '../environments/environment';

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
    BrowserAnimationsModule,
    DeviceDetectorModule.forRoot(),
    // NoopAnimationsModule,
    HttpModule,
    FormsModule,
    NgwWowModule,
    MatDialogModule,
    ReactiveFormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
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
    AppRoutingModule,
    CoreModule.forRoot(),
    AuthModule,
    FeatureModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    AddToHomescreenModule
  ],
  providers: [
    ErrorHandler
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
