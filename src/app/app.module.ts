import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import {HttpModule} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { PasswordPage} from '../pages/password/password';
import { ResetPasswordPage } from '../pages/password/reset_password';
import { ResetPasswordPageTwo } from '../pages/password/reset_password_two';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { OneSignal } from '@ionic-native/onesignal';
import { SMS } from '@ionic-native/sms';
import { BackgroundGeolocation } from '@ionic-native/background-geolocation';
import { Device } from '@ionic-native/device';
import { IonicStorageModule } from '@ionic/storage';
/*Providers*/

import {Rutas} from './rute';
import {Login} from '../pages/login/login.provider';
import {Phone} from '../pages/list/phone.provider';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    PasswordPage,
    ResetPasswordPage,
    ResetPasswordPageTwo
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    PasswordPage,
    ResetPasswordPage,
    ResetPasswordPageTwo
  ],
  providers: [
    StatusBar,
    SplashScreen,
    OneSignal,
    SMS,
    BackgroundGeolocation,
    Device,
    Login,
    Phone,
    Rutas,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
