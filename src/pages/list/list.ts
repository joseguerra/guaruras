import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Phone} from './phone.provider';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  public numero: string;


  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private storage: Storage,
              public phone:Phone) {

    this.get();               
  }

  get() {
    this.storage.get('token').then((token) => {

        this.phone.get(token).subscribe((data)=>{
          console.log(data);
          this.numero = data.phone;
        })
      
    });
    

  }

  update(){
    this.storage.get('token').then((val) => {
      this.phone.update(this.numero,val).subscribe((data)=>{
        console.log(data);
        this.numero = data.phone;
      })
    });
  }
}
