import {NavController} from 'ionic-angular';
import {Component} from '@angular/core';

/*
 Generated class for the SelectLocationPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  templateUrl: 'build/pages/select-location/select-location.html',
})
export class SelectLocationPage {
  static get parameters() {
    return [[NavController]];
  }

  constructor(nav) {
    this.nav = nav;

    this.searches = [
      {
        id: 1,
        name: "New York City, NY, USA"
      }
    ]
  }
}
