import { DetailsPage } from './../details/details';
import { Component } from '@angular/core';
import { NavController,ModalController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public items = [
    {
      id: 1,
      img: 'https://avatars1.githubusercontent.com/u/918975?v=3&s=120',
      user_name: 'candelibas'
    },
    {
      id: 2,
      img: 'https://pbs.twimg.com/profile_images/726955832785571840/8OxhcDxl_400x400.jpg',
      user_name: 'maxlynch'
    },
    {
      id: 3,
      img: 'http://ionicframework.com/dist/preview-app/www/assets/img/sarah-avatar.png.jpeg',
      user_name: 'ashleyosama'
    },
    {
      id: 4,
      img: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa_400x400.jpeg',
      user_name: 'adam_bradley'
    },
    {
      id: 5,
      img: 'https://avatars1.githubusercontent.com/u/1024025?v=3&s=120',
      user_name: 'linus_torvalds'
    }
    
  ];

  constructor(public navCtrl: NavController,public modalCtrl:ModalController) {

  }

  selectedItem(item){
 
    this.modalCtrl.create(DetailsPage,{item:item})
    .present();
  }

}
