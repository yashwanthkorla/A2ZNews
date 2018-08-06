import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {HttpModule} from '@angular/http';
import {InAppBrowser} from '@ionic-native/in-app-browser';
import {SocialSharing} from '@ionic-native/social-sharing';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {SourcePage} from '../pages/source/source';
import {InfoPage} from '../pages/info/info';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SourcePage,
    InfoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SourcePage,
    InfoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    InAppBrowser,
    SocialSharing,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
