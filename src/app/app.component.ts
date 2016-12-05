import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { Splashscreen } from 'ionic-native';
import { HomePage } from '../pages/home/home';
import { DataService } from '../providers/api.service';

@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`,
  providers: [ DataService ]
})
export class MyApp {

  rootPage : any = HomePage;

  constructor(platform: Platform, private dataService: DataService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

      Splashscreen.hide();
    });
  }
}
