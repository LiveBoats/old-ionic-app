import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {DataService} from "../../providers/api.service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [ DataService ]
})
export class HomePage {

  constructor(private navCtrl: NavController, private dataService : DataService) {
    this.dataService.getVesselBaseFromMmsi("308095000").subscribe(value => console.log(value))
  }
}
