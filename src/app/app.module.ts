import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateLoader, TranslateModule, TranslatePipe, TranslateService} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {NgxSpinnerModule} from 'ngx-spinner';

import {PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface, PerfectScrollbarModule} from 'ngx-perfect-scrollbar';

import {AppRoutingModule} from './app-routing.module';
import {SharedModule} from './shared/shared.module';
import {AppComponent} from './app.component';
import {ContentLayoutComponent} from './layouts/content/content-layout.component';
import {FullLayoutComponent} from './layouts/full/full-layout.component';

import {AuthService} from './shared/auth/auth.service';
import {AuthGuard} from './shared/auth/auth-guard.service';
import {WINDOW_PROVIDERS} from './shared/services/window.service';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule, registerLocaleData} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {OpportunityPageModule} from './pages/opportunity-page/opportunity-page.module';
import localePt from '@angular/common/locales/pt';

const firebaseConfig = {
  apiKey: 'YOUR_API_KEY', // YOUR_API_KEY
  authDomain: 'YOUR_AUTH_DOMAIN', // YOUR_AUTH_DOMAIN
  databaseURL: 'YOUR_DATABASE_URL', // YOUR_DATABASE_URL
  projectId: 'YOUR_PROJECT_ID', // YOUR_PROJECT_ID
  storageBucket: 'YOUR_STORAGE_BUCKET', // YOUR_STORAGE_BUCKET
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID', // YOUR_MESSAGING_SENDER_ID
  appId: 'YOUR_APP_ID', // YOUR_APP_ID
  measurementId: 'YOUR_MEASUREMENT_ID' // YOUR_MEASUREMENT_ID
};

registerLocaleData(localePt, 'pt');


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelPropagation: false
};

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [AppComponent, FullLayoutComponent, ContentLayoutComponent],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    NgbModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    NgxSpinnerModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    PerfectScrollbarModule,
    OpportunityPageModule,
  ],
  providers: [
    AuthService,
    AuthGuard,
    {provide: PERFECT_SCROLLBAR_CONFIG, useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG},
    WINDOW_PROVIDERS,
    TranslatePipe,
    TranslateService,
    {provide: LOCALE_ID, useValue: 'pt-BR'}
  ],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
