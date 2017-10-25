import { Component } from '@angular/core';

import { NavController,LoadingController,AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {HomePage } from '../home/home';
import {Login} from './login.provider'


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  public username: string;
  public password: string;
  public onesignal_id:string = "123";
  constructor(public navCtrl: NavController,
              public loadingCtrl: LoadingController,
              public alertCtrl: AlertController,
              private storage: Storage,
              public login:Login             
              ) {
    storage.get('onesignal_id').then((val) => {
      this.onesignal_id = val;
      console.log('Your token is', val);
    });
      

  }

  home(){

    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    loading.present();

    this.login.login(this.username,this.password,this.onesignal_id).subscribe(
      data => {
        this.storage.set('token', data.token);
        this.storage.set('perfil_id', data.perfil_id);
        loading.dismiss();
        this.navCtrl.setRoot(HomePage);
      },
      err => {        
        if(err.status == 400){          
          loading.dismiss();
          let alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Combinacion incorrecta',
            buttons: ['OK']
          });
          alert.present();
        }
        else{
          loading.dismiss();
            let alert = this.alertCtrl.create({
              title: 'Lo sentimos',
              subTitle: 'Pruebe mas tarde',
              buttons: ['OK']
            });
            alert.present();
        }
      }
    );
  }

}
