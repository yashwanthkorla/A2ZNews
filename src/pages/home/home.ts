import { Component } from '@angular/core';
import { NavController,LoadingController,NavParams } from 'ionic-angular';
import {Http} from '@angular/http';
import {InfoPage} from '../info/info';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
items:any =[];
topItems:any =[];
latestNews:boolean = false;
popularNews:boolean = false;
source:any;
popItems:any;
selection = 'top';
sourceName:any;
default = "assets/img/NoImage.png";
// popularItems:any =[];
  constructor(public navCtrl: NavController,public http:Http,public loadingCtrl : LoadingController,public navParams:NavParams) {
  this.source = this.navParams.get('source');
  this.sourceName = this.navParams.get('name');
  }
ionViewDidLoad(){
    //You can get the api key at https://newsapi.org/
  let key ='<YOUR_API_KEY>';
  this.http.get('https://newsapi.org/v1/articles?source='+this.source+'&sortBy=latest&apiKey=' + key).subscribe((data) =>{
    this.latestNews = true; 
  let a = JSON.parse(data['_body']);
    this.items = a['articles'];
  });

  this.http.get('https://newsapi.org/v1/articles?source='+this.source+'&apiKey=' + key).subscribe((data) =>{
    let a = JSON.parse(data['_body']);
    this.topItems = a['articles'];
  });

}
info(info){
  this.navCtrl.push(InfoPage,{info});
}
}
