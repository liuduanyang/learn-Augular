import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }

  items = []; 

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
      for (let i = 0; i < 3; i++) {
        this.items.push( this.items.length );
      }

      console.log('Async operation has ended');
      console.log(this.items);
      infiniteScroll.complete();

      this.items.length=0;
    }, 500);
  }

  list="infos";

  goSub(){
    this.navCtrl.push(AboutPage,{data:'data'});
  }

}
