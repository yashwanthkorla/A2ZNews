import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http,Headers,RequestOptions} from '@angular/http';
import {HomePage} from '../home/home';
import xml2js from 'xml2js';
import 'rxjs/add/operator/map';


/**
 * Generated class for the SourcePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-source',
  templateUrl: 'source.html',
})
export class SourcePage {
items:any= [];
selection:any = 'grid';
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http) {
  }

  ionViewDidLoad() {
this.http.get('https://newsapi.org/v1/sources?language=en').subscribe((data) => {
  let a = JSON.parse(data['_body']);
  // console.log(JSON.parse(data['_body']));
  // console.log(a['sources']);
  this.items = a['sources'];
});
  }
news(source,name){
  this.navCtrl.push(HomePage,{source,name});
}

}
