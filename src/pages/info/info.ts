import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import {SocialSharing} from '@ionic-native/social-sharing';
/**
 * Generated class for the InfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {
information:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private iab: InAppBrowser,public toastCtrl:ToastController, private socialSharing : SocialSharing) {
    this.information = this.navParams.get('info');
  }

inapp(url){
  const browser = this.iab.create(url);
}
share(){
  this.socialSharing.share(this.information['title'],this.information['description'],this.information['urlToImage'],this.information['url']).then((res) => this.message(res) ).catch(err => this.message(err));
}

message(message){
  let toast = this.toastCtrl.create({
    message : message,
    duration : 2000,
    position : 'bottom'
  });
}
}
