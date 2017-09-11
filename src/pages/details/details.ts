import { Component } from '@angular/core';
import { IonicPage, NavController,ViewController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {

  item;

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl:ViewController) {
  //item is our key we pass in now we can access the array
    this.item = navParams.get('item');



  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

  cancel(){
this.viewCtrl.dismiss();

  }

}
