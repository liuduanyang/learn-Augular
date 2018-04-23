import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MessagelistsPage} from '../messagelists/messagelists'



@Component({
  selector: 'page-message',
  templateUrl: 'message.html'
})

export class MessagePage{
  items=[];
  constructor(public nav:NavController) {
    this.items = [
      {
        'title': 'A',
        'description': '小A',
        'color': 'assets/imgs/tou2.png',
        'time':'18:09 pm'
      },
      {
        'title': 'A',
        'description': '小A',
        'color': 'assets/imgs/tou2.png',
        'time':'18:09 pm'
      }
    ]
  }

  openNavDetailsPage(item) {
    this.nav.push(MessagelistsPage, { item: item });
  }
}


