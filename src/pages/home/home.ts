import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { ChatPage } from '../chat/chat';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  username: string = "";

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  showAlert (title: string, message: string) {
    let alertBox = this.alertCtrl.create({
      title,
      subTitle: message,
      buttons: ["Ok"]
    });
    alertBox.present();
  }

  loginUser () {
    if (/^[a-z-Z0-0]*$/.test(this.username)) {
      this.navCtrl.push(ChatPage, {
        username: this.username
      });
    } else {
      this.showAlert("error", "Invalid Username");
    }
  }

}
