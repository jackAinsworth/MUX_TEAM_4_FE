import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { StepsModalComponent } from './steps-modal/steps-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Import Ionic Native Plugins
import {Health} from '@ionic-native/health/ngx';
import {Pedometer} from '@ionic-native/pedometer/ngx';
import {LocalNotifications} from '@ionic-native/local-notifications/ngx';
import { TabsPage } from './tabs/tabs.page';


@NgModule({
  declarations: [AppComponent, StepsModalComponent, TabsPage],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,  FormsModule, ReactiveFormsModule,],
  providers: [
    Health,
    Pedometer,
    LocalNotifications, {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}],
  bootstrap: [AppComponent],
})
export class AppModule {
}
