import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { PasswordPage} from '../pages/password/password';
import { ResetPasswordPage } from '../pages/password/reset_password';
import { OneSignal } from '@ionic-native/onesignal';
import { Device } from '@ionic-native/device';
import { Storage } from '@ionic/storage';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage

  pages: Array<{title: string, component: any, icon: string}>;

  constructor(public platform: Platform,
              public statusBar: StatusBar,
              public splashScreen: SplashScreen,
              private oneSignal: OneSignal,
              private device: Device,
              private storage: Storage,
              public alertCtrl: AlertController,
              ) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage, icon: "ios-home-outline" },
      { title: 'Grabar numero', component: ListPage, icon: "ios-call-outline" },
      { title: 'Cambiar contraseña', component: PasswordPage, icon: "ios-lock-outline" },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      if(this.device.platform){
        this.oneSignal.startInit('84d86d4d-5c55-4653-9ff5-3eafd056cdd4', '1022113476844');

        this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

        this.oneSignal.handleNotificationReceived().subscribe((data) => {
          console.log(data)
          console.log("notificacion recibida")
        });

        this.oneSignal.handleNotificationOpened().subscribe(() => {
          console.log("notificacion abierta")
        });

        this.oneSignal.endInit();

        this.oneSignal.getIds().then((data)=>{
          this.storage.set('onesignal_id', data.userId);
        })


      }
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  close() {

    let alert = this.alertCtrl.create({
      title: 'Desea cerrar sesión ? ',
      buttons: [
        {
          text: 'Cerrar',
          handler: data => {
            this.nav.setRoot(LoginPage);
          }
        },
        {
          text: 'Cancelar',
          handler: data => {
          }
        }
      ]
    });

    alert.present();
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
