import {Component, OnInit} from '@angular/core';
import {Platform} from "@ionic/angular";
import {LocalNotifications} from "@capacitor/local-notifications";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  stepsToday: string = "";

  constructor(/*private health: Health,*/ private platform: Platform) {}

  ngOnInit() {
    this.platform.ready().then(() => {
      /*this.initializeHealth();*/
    });
  }

  protected readonly LocalNotifications = LocalNotifications;
}
