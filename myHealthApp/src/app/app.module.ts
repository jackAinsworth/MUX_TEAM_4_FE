import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { StepsModalComponent } from './steps-modal/steps-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HealthService} from "./health.service";
// Import Ionic Native Plugins
import {Health} from '@ionic-native/health/ngx';
import { TabsPage } from './tabs/tabs.page';
import { NumberFormatPipe } from './number-format.pipe';


@NgModule({
  declarations: [AppComponent, StepsModalComponent, TabsPage, NumberFormatPipe],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,  FormsModule, ReactiveFormsModule,],
  providers: [
    HealthService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
