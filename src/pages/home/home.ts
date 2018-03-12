import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MusicPage } from '../music/music';
import { CommentPage } from '../comment/comment';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tab1Root = MusicPage;
  tab2Root = CommentPage;


  constructor(public navCtrl: NavController) {

  }

}
